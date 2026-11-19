/* Renders the page from content.js. You normally never need to edit this file. */
(function () {
  "use strict";

  var D = window.PORTFOLIO || {};
  var root = document.documentElement;
  root.classList.add("js");

  function $(id) { return document.getElementById(id); }
  function has(list) { return Array.isArray(list) && list.length > 0; }
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Only allow web links, email links, in-page anchors and files that sit next to the page.
  function link(value) {
    var u = String(value || "").trim();
    return /^(https?:\/\/|mailto:|#)/i.test(u) || /^[\w .%\/-]+$/.test(u) ? u : "#";
  }
  function initials(name) {
    return String(name || "")
      .split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (w) { return w.charAt(0).toUpperCase(); }).join("");
  }
  function tags(list) {
    if (!has(list)) return "";
    return '<div class="tags">' + list.map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("") + "</div>";
  }
  function hideSection(id) {
    var el = $(id);
    if (el) el.hidden = true;
  }

  var stroke = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  var ICON = {
    arrow: "<svg " + stroke + '><path d="M7 17 17 7M8 7h9v9"/></svg>',
    mail: "<svg " + stroke + '><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7.5 8.5 6 8.5-6"/></svg>',
    download: "<svg " + stroke + '><path d="M12 4v11m0 0-4-4m4 4 4-4M5 19.5h14"/></svg>',
    trophy: "<svg " + stroke + '><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/></svg>',
    cap: "<svg " + stroke + '><path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z"/><path d="M6.5 11.2V16c1.6 1.4 3.4 2 5.5 2s3.9-.6 5.5-2v-4.8M21.5 9v5"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-.95 1.82-1.95 3.75-1.95 4 0 4.74 2.5 4.74 5.76v5.59h-4v-4.96c0-1.18-.02-2.7-1.72-2.7-1.72 0-1.98 1.28-1.98 2.61v5.05h-4v-11Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>'
  };

  var L = D.links || {};
  var mailto = L.email ? "mailto:" + L.email : "";

  /* ---------- Hero ---------- */
  (function hero() {
    var h = D.hero || {};
    var html = "";
    if (h.status) html += '<p class="status"><i></i>' + esc(h.status) + "</p>";
    html += "<h1>" + esc(h.greeting || "Hi, I'm") + ' <span class="hl">' + esc(D.firstName || D.name) + "</span>," +
      '<span class="role">' + esc(h.roleLine) + "</span></h1>";
    if (h.tagline) html += '<p class="tagline">' + esc(h.tagline) + "</p>";
    if (h.intro) html += '<p class="intro">' + esc(h.intro) + "</p>";

    html += '<div class="cta">' +
      '<a class="btn btn-primary" href="#contact">Get in Touch ' + ICON.arrow + "</a>" +
      (has(D.projects) ? '<a class="btn btn-ghost" href="#work">View My Work</a>' : "") +
      (D.resume ? '<a class="btn btn-ghost" href="' + esc(link(D.resume)) + '" download>Download Résumé ' + ICON.download + "</a>" : "") +
      "</div>";

    var socials = "";
    if (L.linkedin) socials += '<a href="' + esc(link(L.linkedin)) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICON.linkedin + "</a>";
    if (L.github) socials += '<a href="' + esc(link(L.github)) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICON.github + "</a>";
    if (mailto) socials += '<a href="' + esc(mailto) + '" aria-label="Email">' + ICON.mail + "</a>";
    if (socials) html += '<div class="socials">' + socials + "</div>";
    $("heroText").innerHTML = html;

    var portrait = document.createElement("div");
    portrait.className = "portrait";
    var frame = document.createElement("div");
    frame.className = "portrait-frame";
    function placeholder() {
      frame.innerHTML = '<div class="portrait-empty"><b>' + esc(initials(D.name)) + "</b><span>add " + esc(D.photo || "photo.jpg") + "</span></div>";
    }
    if (D.photo) {
      var img = new Image();
      img.alt = "Portrait of " + (D.name || "");
      img.onerror = placeholder;
      img.src = link(D.photo);
      frame.appendChild(img);
    } else {
      placeholder();
    }
    portrait.appendChild(frame);
    (h.badges || []).slice(0, 2).forEach(function (b, i) {
      var el = document.createElement("div");
      el.className = "float float-" + (i + 1);
      el.innerHTML = "<b>" + esc(b.value) + "</b><span>" + esc(b.label) + "</span>";
      portrait.appendChild(el);
    });
    $("heroVisual").appendChild(portrait);
  })();

  /* ---------- Ticker ---------- */
  (function ticker() {
    if (!has(D.ticker)) return hideSection("ticker");
    var items = D.ticker.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
    $("ticker").innerHTML = '<div class="ticker-track">' + items + items + "</div>";
  })();

  /* ---------- About ---------- */
  (function about() {
    var a = D.about;
    if (!a) return hideSection("about");
    var main = '<article class="card about-main reveal"><h3>Background</h3>' +
      (a.background || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    if (has(a.facts)) {
      main += '<dl class="facts">' + a.facts.map(function (f) {
        return "<div><dt>" + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div>";
      }).join("") + "</dl>";
    }
    main += "</article>";
    var side = '<div class="about-side">' + (a.cards || []).map(function (c) {
      return '<article class="card note reveal"><h3>' + esc(c.title) + "</h3><p>" + esc(c.text) + "</p></article>";
    }).join("") + "</div>";
    $("aboutGrid").innerHTML = main + side;
  })();

  /* ---------- Experience ---------- */
  (function experience() {
    if (!has(D.experience)) return hideSection("experience");
    var seen = [];
    $("xpList").innerHTML = D.experience.map(function (x) {
      if (seen.indexOf(x.company) === -1) seen.push(x.company);
      var alt = seen.indexOf(x.company) % 2 === 1 ? " alt" : "";
      return '<article class="xp reveal">' +
        '<div class="xp-side">' +
          '<div class="xp-logo' + alt + '" aria-hidden="true">' + esc(String(x.company || "").charAt(0)) + "</div>" +
          "<div>" +
            '<div class="xp-co">' + esc(x.company) + "</div>" +
            (x.location ? '<div class="xp-loc">' + esc(x.location) + "</div>" : "") +
            '<span class="xp-dates">' + esc(x.dates) + "</span>" +
          "</div>" +
        "</div>" +
        '<div class="card xp-card">' +
          "<h3>" + esc(x.role) + "</h3>" +
          (x.summary ? '<p class="xp-summary">' + esc(x.summary) + "</p>" : "") +
          (has(x.bullets) ? "<ul>" + x.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "") +
          tags(x.tags) +
        "</div>" +
      "</article>";
    }).join("");
  })();

  /* ---------- Stats ---------- */
  (function stats() {
    if (!has(D.stats)) return hideSection("impact");
    $("stats").innerHTML = D.stats.map(function (s) {
      return '<div class="card stat reveal"><b>' + esc(s.value) + "</b><h3>" + esc(s.label) + "</h3>" +
        (s.note ? "<p>" + esc(s.note) + "</p>" : "") + "</div>";
    }).join("");
  })();

  /* ---------- Projects ---------- */
  (function projects() {
    if (!has(D.projects) && !has(D.moreProjects)) return hideSection("work");

    $("projects").innerHTML = (D.projects || []).map(function (p, i) {
      var tabList = p.tabs || [];
      var deep = "";
      if (tabList.length) {
        deep = '<div class="proj-deep">' +
          '<div class="tabs" role="tablist" aria-label="' + esc(p.title) + '">' +
          tabList.map(function (t, j) {
            return '<button class="tab" role="tab" type="button" id="p' + i + "t" + j + '" aria-controls="p' + i + "c" + j +
              '" aria-selected="' + (j === 0) + '" tabindex="' + (j === 0 ? 0 : -1) + '">' +
              '<span class="n">0' + (j + 1) + "</span>" + esc(t.name) + "</button>";
          }).join("") + "</div>" +
          tabList.map(function (t, j) {
            return '<div class="panel" role="tabpanel" id="p' + i + "c" + j + '" aria-labelledby="p' + i + "t" + j + '"' +
              (j === 0 ? "" : " hidden") + "><h4>" + esc(t.title) + "</h4><p>" + esc(t.text) + "</p></div>";
          }).join("") +
          "</div>";
      }
      var links = "";
      if (p.url) links += '<a class="btn btn-ghost" href="' + esc(link(p.url)) + '" target="_blank" rel="noopener">View ' + ICON.arrow + "</a>";
      if (p.code) links += '<a class="btn btn-ghost" href="' + esc(link(p.code)) + '" target="_blank" rel="noopener">Code ' + ICON.github + "</a>";
      return '<article class="proj reveal">' +
        '<div class="proj-info">' +
          (has(p.labels) ? '<div class="labels">' + p.labels.map(function (l) { return '<span class="label">' + esc(l) + "</span>"; }).join("") + "</div>" : "") +
          "<h3>" + esc(p.title) + "</h3>" +
          (p.subtitle ? '<p class="proj-sub">' + esc(p.subtitle) + "</p>" : "") +
          (p.description ? '<p class="proj-desc">' + esc(p.description) + "</p>" : "") +
          tags(p.tech) +
          (p.org ? '<p class="proj-org">Built at ' + esc(p.org) + "</p>" : "") +
          (links ? '<div class="cta">' + links + "</div>" : "") +
        "</div>" + deep +
      "</article>";
    }).join("");

    // Tab behaviour: click, plus left/right arrow keys.
    Array.prototype.forEach.call(document.querySelectorAll(".tabs"), function (list) {
      var tabs = Array.prototype.slice.call(list.querySelectorAll(".tab"));
      function select(tab, focus) {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute("aria-selected", on);
          t.tabIndex = on ? 0 : -1;
          $(t.getAttribute("aria-controls")).hidden = !on;
        });
        if (focus) tab.focus();
      }
      tabs.forEach(function (tab, idx) {
        tab.addEventListener("click", function () { select(tab, false); });
        tab.addEventListener("keydown", function (e) {
          var next = e.key === "ArrowRight" ? idx + 1 : e.key === "ArrowLeft" ? idx - 1 : null;
          if (next === null) return;
          e.preventDefault();
          select(tabs[(next + tabs.length) % tabs.length], true);
        });
      });
    });

    if (!has(D.moreProjects)) return hideSection("moreWrap");
    $("moreProjects").innerHTML = D.moreProjects.map(function (m) {
      var inner = (m.org ? '<span class="org">' + esc(m.org) + "</span>" : "") +
        "<h4>" + esc(m.title) + "</h4><p>" + esc(m.text) + "</p>" + tags(m.tech);
      return '<article class="card mini reveal">' + inner + "</article>";
    }).join("");
  })();

  /* ---------- Skills ---------- */
  (function skills() {
    if (!has(D.skills)) return hideSection("skills");
    $("skillsGrid").innerHTML = D.skills.map(function (s) {
      return '<article class="card skill reveal"><h3>' + esc(s.group) + "</h3>" + tags(s.items) + "</article>";
    }).join("");
  })();

  /* ---------- Awards & education ---------- */
  (function recognition() {
    if (!has(D.awards) && !has(D.education)) return hideSection("recognition");
    $("awards").innerHTML = (D.awards || []).map(function (a) {
      return '<article class="card award reveal"><div class="icon-badge">' + ICON.trophy + "</div>" +
        "<h3>" + esc(a.title) + "</h3>" +
        (a.org ? '<div class="org">' + esc(a.org) + "</div>" : "") +
        (a.text ? "<p>" + esc(a.text) + "</p>" : "") + "</article>";
    }).join("");
    $("education").innerHTML = (D.education || []).map(function (e) {
      return '<article class="card edu-card reveal"><div class="icon-badge">' + ICON.cap + "</div>" +
        '<div class="grow"><h3>' + esc(e.degree) + '</h3><div class="school">' + esc(e.school) + "</div></div>" +
        '<div class="edu-meta">' + (e.note ? "<b>" + esc(e.note) + "</b>" : "") + "<span>" + esc(e.dates) + "</span></div>" +
        "</article>";
    }).join("");
  })();

  /* ---------- Testimonials ---------- */
  (function testimonials() {
    if (!has(D.testimonials)) return hideSection("testimonials");
    $("quotes").innerHTML = D.testimonials.map(function (t) {
      return '<figure class="card quote reveal" style="margin:0"><blockquote>' + esc(t.quote) + "</blockquote>" +
        '<figcaption class="quote-by"><i>' + esc(initials(t.name)) + "</i><div><b>" + esc(t.name) + "</b><span>" + esc(t.title) + "</span></div></figcaption></figure>";
    }).join("");
  })();

  /* ---------- Contact & footer ---------- */
  (function contact() {
    var c = D.contact || {};
    var buttons = "";
    if (mailto) buttons += '<a class="btn btn-primary" href="' + esc(mailto) + '">Email Me ' + ICON.mail + "</a>";
    if (L.linkedin) buttons += '<a class="btn btn-ghost" href="' + esc(link(L.linkedin)) + '" target="_blank" rel="noopener">LinkedIn ' + ICON.linkedin + "</a>";
    if (L.github) buttons += '<a class="btn btn-ghost" href="' + esc(link(L.github)) + '" target="_blank" rel="noopener">GitHub ' + ICON.github + "</a>";
    $("contactBox").innerHTML = "<h2>" + esc(c.heading || "Let's Connect") + "</h2>" +
      (c.text ? "<p>" + esc(c.text) + "</p>" : "") +
      '<div class="cta">' + buttons + "</div>" +
      (L.email ? '<div class="mail"><a href="' + esc(mailto) + '">' + esc(L.email) + "</a></div>" : "");
    $("footer").innerHTML = "© " + new Date().getFullYear() + " " + esc(D.name) + ". Designed and built with care.";
  })();

  /* ---------- Nav ---------- */
  (function nav() {
    var navEl = $("nav");
    var linksEl = $("navLinks");
    var toggle = $("navToggle");
    $("brand").innerHTML = '<span class="brand-mark">' + esc(initials(D.name)) + "</span>" + esc(D.name);

    var sections = Array.prototype.slice.call(document.querySelectorAll("section[data-nav]"))
      .filter(function (s) { return !s.hidden; });
    linksEl.innerHTML = '<a href="#home" data-for="home">Home</a>' + sections.map(function (s) {
      return '<a href="#' + s.id + '" data-for="' + s.id + '">' + esc(s.getAttribute("data-nav")) + "</a>";
    }).join("");

    function setOpen(open) {
      navEl.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    toggle.addEventListener("click", function () { setOpen(!navEl.classList.contains("open")); });
    linksEl.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

    function onScroll() { navEl.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (!("IntersectionObserver" in window)) return;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(linksEl.children, function (a) {
          a.classList.toggle("active", a.getAttribute("data-for") === entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    spy.observe($("home"));
    sections.forEach(function (s) { spy.observe(s); });
  })();

  /* ---------- Reveal on scroll ---------- */
  (function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  })();
})();
