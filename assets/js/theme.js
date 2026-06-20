/* === Theme clair/sombre partage + reveal au scroll === */
(function () {
  const html = document.documentElement;
  const saved = localStorage.getItem("theme") || "light";

  function setIcons(t) {
    const moon = document.getElementById("iconMoon");
    const sun = document.getElementById("iconSun");
    if (moon) moon.style.display = (t === "light") ? "block" : "none";
    if (sun) sun.style.display = (t === "light") ? "none" : "block";
  }
  function apply(t) {
    html.setAttribute("data-theme", t);
    setIcons(t);
    localStorage.setItem("theme", t);
  }
  apply(saved);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeToggle");
    if (btn) btn.addEventListener("click", () =>
      apply(html.getAttribute("data-theme") === "light" ? "dark" : "light"));

    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

    // Barre de progression + bouton retour en haut (pages projet)
    if (!document.getElementById("scrollProgress")) {
      const bar = document.createElement("div");
      bar.className = "scroll-progress"; bar.id = "scrollProgress";
      document.body.appendChild(bar);
      const btn = document.createElement("button");
      btn.className = "to-top"; btn.setAttribute("aria-label", "Retour en haut");
      btn.innerHTML = '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';
      document.body.appendChild(btn);
      const upd = () => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
        btn.classList.toggle("show", h.scrollTop > 500);
      };
      window.addEventListener("scroll", upd, { passive: true });
      upd();
      btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  });
})();
