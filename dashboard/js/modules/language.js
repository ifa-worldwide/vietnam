// js/modules/language.js

import { $, on, addClass, removeClass } from "../core/dom.js";

export function initLanguage() {

  const languageBox = $(".language-box");
  const langList = $("#languageList");
  const overlay = $("#langOverlay");

  if (!languageBox || !langList || !overlay) return;

  const isMobile = () => window.innerWidth <= 768;

  const open = () => {
    addClass(overlay, "active");

    if (isMobile()) {
      addClass(langList, "show");
    } else {
      addClass(langList, "active");
    }
  };

  const close = () => {
    removeClass(overlay, "active");
    removeClass(langList, "show");
    removeClass(langList, "active");
  };

  const toggle = (e) => {
    e.stopPropagation();

    if (
      langList.classList.contains("active") ||
      langList.classList.contains("show")
    ) {
      close();
    } else {
      open();
    }
  };

  const changeLang = (lang) => {
    const parts = window.location.pathname
      .split("/")
      .filter(Boolean);

    if (parts.length === 0) {
      window.location.href = "/" + lang + "/";
      return;
    }

    parts[0] = lang;
    window.location.href = "/" + parts.join("/");
  };

  /* ===== Language Links ===== */

  const langLinks = langList.querySelectorAll("a[data-lang]");

  langLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      changeLang(lang);
    });
  });

  /* ===== Events ===== */

  on(languageBox, "click", toggle);
  on(overlay, "click", close);

  document.addEventListener("click", (e) => {
    if (!languageBox.contains(e.target)) {
      close();
    }
  });

}
