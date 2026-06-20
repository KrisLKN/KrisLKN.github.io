/* === Lightbox des galeries (ouverture en grand + navigation) === */
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const shots = Array.from(document.querySelectorAll(".shot img"));
    if (!shots.length) return;

    const ov = document.createElement("div");
    ov.className = "lb-overlay";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.innerHTML =
      '<button class="lb-btn lb-close" aria-label="Fermer">&times;</button>' +
      '<button class="lb-btn lb-nav lb-prev" aria-label="Precedent">&#8249;</button>' +
      '<figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
      '<button class="lb-btn lb-nav lb-next" aria-label="Suivant">&#8250;</button>' +
      '<div class="lb-count"></div>';
    document.body.appendChild(ov);

    const imgEl = ov.querySelector(".lb-img");
    const capEl = ov.querySelector(".lb-cap");
    const countEl = ov.querySelector(".lb-count");
    let idx = 0;

    const capOf = i => {
      const fc = shots[i].closest(".shot").querySelector("figcaption");
      return fc ? fc.textContent : "";
    };
    const show = i => {
      idx = (i + shots.length) % shots.length;
      imgEl.src = shots[idx].currentSrc || shots[idx].src;
      imgEl.alt = capOf(idx);
      capEl.textContent = capOf(idx);
      countEl.textContent = (idx + 1) + " / " + shots.length;
    };
    const open = i => { show(i); ov.classList.add("open"); document.body.style.overflow = "hidden"; };
    const close = () => { ov.classList.remove("open"); document.body.style.overflow = ""; };

    shots.forEach((im, i) => im.addEventListener("click", e => { e.preventDefault(); open(i); }));
    ov.querySelector(".lb-close").addEventListener("click", close);
    ov.querySelector(".lb-prev").addEventListener("click", e => { e.stopPropagation(); show(idx - 1); });
    ov.querySelector(".lb-next").addEventListener("click", e => { e.stopPropagation(); show(idx + 1); });
    ov.addEventListener("click", e => {
      if (e.target === ov || e.target.classList.contains("lb-fig")) close();
    });
    document.addEventListener("keydown", e => {
      if (!ov.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "ArrowRight") show(idx + 1);
    });
  });
})();
