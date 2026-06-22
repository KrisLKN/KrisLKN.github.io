/* config.js — applique config.json (pilote par l'admin) au site public.
   Affiche/masque des sections, le badge "alternance", et une banniere d'annonce.
   Si config.json est absent ou invalide : tout reste visible (etat par defaut). */
(function () {
  // Sections pilotables : cle de config -> id de section + lien de nav associe
  const MAP = {
    video: "video", skills: "skills", projects: "projects",
    experience: "experience", reco: "reco", cv: "cv", contact: "contact",
  };

  function hideSection(id) {
    const sec = document.getElementById(id);
    if (sec) sec.style.display = "none";
    const link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (link) { const li = link.closest("li"); (li || link).style.display = "none"; }
  }

  function announce(text) {
    if (!text) return;
    const bar = document.createElement("div");
    bar.id = "announce-bar";
    bar.textContent = text;
    bar.style.cssText =
      "position:relative;z-index:90;margin-top:64px;padding:12px 20px;text-align:center;" +
      "background:var(--accent);color:#fff;font-weight:600;font-size:0.92rem;font-family:'Hanken Grotesk',sans-serif;";
    document.body.insertBefore(bar, document.body.firstChild.nextSibling);
  }

  function apply(cfg) {
    const show = (cfg && cfg.show) || {};
    Object.keys(MAP).forEach((key) => {
      if (show[key] === false) hideSection(MAP[key]);
    });
    if (show.alternanceBadge === false) {
      const tag = document.querySelector(".hero-tag");
      if (tag) tag.style.display = "none";
    }
    if (cfg && cfg.announcement && cfg.announcement.enabled && cfg.announcement.text) {
      announce(cfg.announcement.text);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    fetch("config.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((cfg) => { if (cfg) apply(cfg); })
      .catch(() => {});
  });
})();
