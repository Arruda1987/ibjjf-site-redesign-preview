(function () {
  var btn = document.querySelector(".nav-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", document.body.classList.contains("nav-open") ? "true" : "false");
    });
  }
  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    var tabs = root.querySelectorAll("[data-tab]");
    var panels = root.querySelectorAll("[data-panel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        var id = tab.getAttribute("data-tab");
        tabs.forEach(function (t) { t.classList.toggle("is-on", t === tab); t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
        panels.forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== id; });
      });
    });
  });
})();
