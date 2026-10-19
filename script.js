/* SCRIPT.JS — membaca data.js dan membuat isi website otomatis.
   Pemula tidak perlu mengedit file ini. */
(function () {
  "use strict";
  const d = siteData;
  const PLACEHOLDER = "assets/projects/placeholder.svg";
  const $ = (id) => document.getElementById(id);

  // Mencegah karakter khusus merusak HTML
  const esc = (t) => String(t == null ? "" : t).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const list = (v) => (Array.isArray(v) ? v : []);
  const safeUrl = (u) => (/^(https?:|mailto:)/i.test(u) ? u : "");

  function fixImages(root) {
    root.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", () => { img.src = img.dataset.fallback; }, { once: true });
    });
  }

  function renderAll() {
    document.title = d.pageTitle || d.name;
    $("brand").textContent = d.brand;

    const navHtml = list(d.nav).map((n) => `<li><a href="#${esc(n.target)}">${esc(n.label)}</a></li>`).join("");
    $("navLinks").innerHTML = navHtml;
    $("footerNav").innerHTML = navHtml;

    $("heroGreeting").textContent = d.hero.greeting;
    $("heroTitle").textContent = d.hero.title;
    $("heroRole").textContent = d.role;
    $("heroDesc").textContent = d.hero.description;
    $("heroBtn1").textContent = d.hero.primaryButton;
    $("heroBtn2").textContent = d.hero.secondaryButton;

    $("aboutTitle").textContent = d.about.title;
    const photo = $("aboutPhoto");
    photo.src = d.about.photo; photo.alt = d.about.photoAlt || d.name;
    photo.dataset.fallback = "assets/profile/profile.svg";
    $("aboutText").innerHTML = list(d.about.paragraphs).map((p) => `<p>${esc(p)}</p>`).join("");
    $("aboutFocus").innerHTML = list(d.about.focus).map((f) => `<li>${esc(f)}</li>`).join("");

    $("skillsTitle").textContent = d.skills.title;
    $("skillsGrid").innerHTML = list(d.skills.items).map((s) => `
      <article class="card skill-card reveal">
        <div class="skill-icon" aria-hidden="true">${esc(s.icon)}</div>
        <h3>${esc(s.name)}</h3><p>${esc(s.description)}</p>
      </article>`).join("");

    $("projectsTitle").textContent = d.projects.title;
    const items = list(d.projects.items);
    $("projectsGrid").innerHTML = items.map((p, i) => `
      <article class="card project-card reveal">
        <div class="img-wrap"><img class="project-img" src="${esc(p.image)}" data-fallback="${PLACEHOLDER}" alt="Screenshot of ${esc(p.title)}" width="640" height="360" loading="lazy"></div>
        <div class="project-body">
          <span class="category">${esc(p.category)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <ul class="tags"><li>${esc(p.engine)}</li><li>${esc(p.language)}</li></ul>
          <button class="btn btn-ghost" type="button" data-project="${i}">View Details</button>
        </div>
      </article>`).join("");

    const cc = d.certificates || { title: "Certificates", items: [] };
    $("certsTitle").textContent = cc.title;
    const certs = list(cc.items);
    $("certsGrid").innerHTML = certs.length ? certs.map((c, i) => `
      <article class="card cert-card reveal">
        <img class="cert-img" src="${esc(c.image)}" data-fallback="assets/certificates/placeholder.svg" alt="Certificate: ${esc(c.title)}" width="640" height="480" loading="lazy">
        <div class="cert-body">
          <h3>${esc(c.title)}</h3>
          <p>${esc(c.issuer)}${c.date ? " • " + esc(c.date) : ""}</p>
          <button class="btn btn-ghost" type="button" data-cert="${i}">View Certificate</button>
        </div>
      </article>`).join("") : `<p class="empty-note reveal">${esc(cc.emptyText || "")}</p>`;

    $("processTitle").textContent = d.process.title;
    $("processSteps").innerHTML = list(d.process.steps).map((s) => `
      <li class="reveal"><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></li>`).join("");

    $("contactTitle").textContent = d.contact.title;
    $("contactText").textContent = d.contact.text;
    $("contactLinks").innerHTML = list(d.contact.links).map((l) => {
      let url = l.url;
      if (l.isEmail && l.value) url = "mailto:" + l.value;
      url = safeUrl(url);
      if (!url) return `<span class="btn btn-ghost disabled" title="Isi di data.js">${esc(l.label)}: Not set yet</span>`;
      return `<a class="btn btn-ghost" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`;
    }).join("");

    $("footerText").textContent = `© ${d.footer.year} ${d.footer.text}`;
    fixImages(document);
  }

  // Modal detail proyek
  function setupModal() {
    const modal = $("modal");
    const items = list(d.projects.items);
    document.addEventListener("click", (e) => {
      const cbtn = e.target.closest("[data-cert]");
      if (cbtn) {
        const c = list(d.certificates && d.certificates.items)[cbtn.dataset.cert];
        const cu = safeUrl(c.credentialUrl);
        $("modalBody").innerHTML = `
          <div class="modal-content">
            <img class="contain" src="${esc(c.image)}" data-fallback="assets/certificates/placeholder.svg" alt="Certificate: ${esc(c.title)}">
            <h3 id="modalTitle">${esc(c.title)}</h3>
            <p>${esc(c.issuer)}${c.date ? " • " + esc(c.date) : ""}</p>
            ${c.description ? `<p>${esc(c.description)}</p>` : ""}
            ${cu ? `<div class="btn-row"><a class="btn btn-primary" href="${esc(cu)}" target="_blank" rel="noopener noreferrer">Verify Credential</a></div>` : ""}
          </div>`;
        fixImages(modal);
        modal.showModal();
        return;
      }
      const btn = e.target.closest("[data-project]");
      if (!btn) return;
      const p = items[btn.dataset.project];
      const demo = safeUrl(p.demoUrl), src = safeUrl(p.sourceUrl);
      const link = (url, label) => url
        ? `<a class="btn btn-primary" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : `<span class="btn btn-ghost disabled">${label} (not available yet)</span>`;
      $("modalBody").innerHTML = `
        <div class="modal-content">
          <img src="${esc(p.image)}" data-fallback="${PLACEHOLDER}" alt="Screenshot of ${esc(p.title)}">
          <span class="category">${esc(p.category)}</span>
          <h3 id="modalTitle">${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <ul class="tags"><li>${esc(p.engine)}</li><li>${esc(p.language)}</li></ul>
          <ul class="feat">${list(p.features).map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          <div class="btn-row">${link(demo, "Play Game")}${link(src, "Source Code")}</div>
        </div>`;
      fixImages(modal);
      modal.showModal();
    });
    $("modalClose").addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  }

  function setupNav() {
    const nav = $("navbar"), links = $("navLinks"), btn = $("menuBtn"), top = $("toTop");
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 10);
      top.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Highlight menu aktif
    if ("IntersectionObserver" in window) {
      const anchors = links.querySelectorAll("a");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) anchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        });
      }, { rootMargin: "-50% 0px -50% 0px" });
      document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    }
  }

  function setupReveal() {
    const els = document.querySelectorAll(".reveal, .section-title, .about-grid, .contact-box");
    els.forEach((el) => el.classList.add("reveal"));
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  renderAll(); setupModal(); setupNav(); setupReveal();
})();
