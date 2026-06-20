// app.js — UFC Fight Predictor, version 100% statique.
// Le modele (regression logistique) tourne directement dans le navigateur :
// aucun serveur, hebergeable sur GitHub Pages.

const state = { model: null, fighters: {}, list: [], a: null, b: null };
const el = (id) => document.getElementById(id);

/* ---------- Theme (clair/sombre, defaut sombre, memorise) ---------- */
(function theme() {
  const html = document.documentElement;
  const apply = (t) => {
    html.setAttribute("data-theme", t);
    el("iconMoon").style.display = t === "light" ? "block" : "none";
    el("iconSun").style.display = t === "light" ? "none" : "block";
    localStorage.setItem("ufc-theme", t);
  };
  apply(localStorage.getItem("ufc-theme") || "dark");
  el("themeToggle").addEventListener("click", () =>
    apply(html.getAttribute("data-theme") === "light" ? "dark" : "light")
  );
})();

/* ---------- Photos des combattants (Wikipedia, cote client) ---------- */
const photoCache = new Map();
async function fighterPhoto(name) {
  if (photoCache.has(name)) return photoCache.get(name);
  const url =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*" +
    "&prop=pageimages&piprop=thumbnail&pithumbsize=400&redirects=1&titles=" +
    encodeURIComponent(name);
  let src = null;
  try {
    const data = await fetch(url).then((r) => r.json());
    const page = Object.values(data?.query?.pages || {})[0];
    if (page?.thumbnail?.source) src = page.thumbnail.source;
  } catch (_) {}
  photoCache.set(name, src);
  return src;
}
const initials = (n) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

async function setAvatar(box, name, side) {
  box.className = "avatar loading";
  box.innerHTML = `<span class="avatar-ph">${initials(name)}</span>`;
  const src = await fighterPhoto(name);
  if (box.dataset.name !== name) return;
  box.className = "avatar" + (src ? " filled" : "");
  box.innerHTML = src
    ? `<img src="${src}" alt="${name}" loading="lazy">`
    : `<span class="avatar-ph">${initials(name)}</span>`;
}

/* ---------- Prediction (regression logistique pure) ---------- */
function predictProbaA(fa, fb) {
  const m = state.model;
  const f = {
    a_fights_before: fa.fights_before, a_wins_before: fa.wins_before, a_win_rate: fa.win_rate,
    b_fights_before: fb.fights_before, b_wins_before: fb.wins_before, b_win_rate: fb.win_rate,
    a_days_since_last: fa.days_since_last, b_days_since_last: fb.days_since_last,
    a_age: fa.age, b_age: fb.age,
    diff_fights_before: fa.fights_before - fb.fights_before,
    diff_wins_before: fa.wins_before - fb.wins_before,
    diff_win_rate: fa.win_rate - fb.win_rate,
    diff_age: fa.age - fb.age,
    diff_reach: fa.reach - fb.reach,
    diff_days_since_last: fa.days_since_last - fb.days_since_last,
  };
  let z = m.intercept;
  m.features.forEach((k, i) => {
    const x = (f[k] ?? 0) || 0;
    const scaled = (x - m.mean[i]) / m.scale[i];
    z += m.coef[i] * scaled;
  });
  return 1 / (1 + Math.exp(-z)); // proba que A gagne
}

/* ---------- Init ---------- */
async function init() {
  try {
    const [model, fighters] = await Promise.all([
      fetch("model.json").then((r) => r.json()),
      fetch("fighters.json").then((r) => r.json()),
    ]);
    state.model = model;
    state.fighters = fighters;
    state.list = Object.values(fighters)
      .filter((f) => f.name && f.name.trim())
      .sort((a, b) => a.name.localeCompare(b.name));
    el("model-badge").textContent =
      `precision ${(model.accuracy * 100).toFixed(0)}% · ${model.n_fighters} combattants`;
    setupPicker("a", "Charles Oliveira");
    setupPicker("b", "Ilia Topuria");
  } catch (e) {
    showError("Impossible de charger le modele.");
  }
}

function setupPicker(side, defaultName) {
  const select = el(`select-${side}`);
  const search = el(`search-${side}`);
  const avatar = el(`avatar-${side}`);

  const render = (query = "") => {
    const q = query.toLowerCase();
    select.innerHTML = "";
    state.list
      .filter((f) => f.name.toLowerCase().includes(q))
      .slice(0, 300)
      .forEach((f) => {
        const opt = document.createElement("option");
        opt.value = f.name;
        opt.textContent = f.weight_class ? `${f.name} · ${f.weight_class}` : f.name;
        select.appendChild(opt);
      });
  };
  const choose = (name) => {
    state[side] = name;
    avatar.dataset.name = name;
    setAvatar(avatar, name, side);
    refreshButton();
  };

  render();
  search.addEventListener("input", () => render(search.value));
  select.addEventListener("change", () => choose(select.value));

  if (state.fighters[defaultName]) { select.value = defaultName; choose(defaultName); }
  refreshButton();
}

function refreshButton() { el("predict-btn").disabled = !(state.a && state.b); }
function showError(msg) { const e = el("error"); e.textContent = msg; e.hidden = false; }
function clearError() { el("error").hidden = true; }

const pct = (v) => (v == null ? "—" : `${(v * 100).toFixed(0)}%`);
const numeric = (v) => parseFloat(String(v).replace(/[^0-9.]/g, "")) || 0;
const rnd = (v) => (v == null ? null : Math.round(v));

async function predict() {
  clearError();
  if (state.a === state.b) { showError("Choisis deux combattants differents."); return; }
  const fa = state.fighters[state.a], fb = state.fighters[state.b];
  const pa = predictProbaA(fa, fb);
  const pb = 1 - pa;
  const winner = pa >= 0.5 ? fa.name : fb.name;

  el("winner-name").textContent = winner;
  const wav = el("winner-avatar");
  wav.innerHTML = "";
  const wsrc = await fighterPhoto(winner);
  if (wsrc) wav.innerHTML = `<img src="${wsrc}" alt="${winner}">`;

  el("proba-a").style.width = `${(pa * 100).toFixed(0)}%`;
  el("proba-b").style.width = `${(pb * 100).toFixed(0)}%`;
  el("proba-a-name").textContent = `${fa.name} ${(pa * 100).toFixed(0)}%`;
  el("proba-b-name").textContent = `${(pb * 100).toFixed(0)}% ${fb.name}`;

  const rows = [
    ["Victoires", rnd(fa.wins_before), rnd(fb.wins_before), "max"],
    ["Combats", rnd(fa.fights_before), rnd(fb.fights_before), "none"],
    ["Taux de victoire", pct(fa.win_rate), pct(fb.win_rate), "rate"],
    ["Age", rnd(fa.age) ?? "—", rnd(fb.age) ?? "—", "minAge"],
    ["Allonge", fa.reach ? `${rnd(fa.reach)}"` : "—", fb.reach ? `${rnd(fb.reach)}"` : "—", "maxReach"],
  ];
  const lead = (kind, av, bv) => {
    if (kind === "max" || kind === "rate" || kind === "maxReach")
      return numeric(av) === numeric(bv) ? 0 : numeric(av) > numeric(bv) ? -1 : 1;
    if (kind === "minAge")
      return numeric(av) === numeric(bv) ? 0 : numeric(av) < numeric(bv) ? -1 : 1;
    return 0;
  };
  let html = `<tr><th>${fa.name}</th><th></th><th>${fb.name}</th></tr>`;
  rows.forEach(([label, av, bv, kind]) => {
    const l = lead(kind, av, bv);
    html += `<tr><td class="${l === -1 ? "lead" : ""}">${av}</td><td>${label}</td><td class="${l === 1 ? "lead" : ""}">${bv}</td></tr>`;
  });
  el("compare").innerHTML = html;

  el("result").hidden = false;
  el("result").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

el("predict-btn").addEventListener("click", predict);
init();
