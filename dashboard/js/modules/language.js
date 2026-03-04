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
    langList.classList.contains("active") ||
    langList.classList.contains("show")
      ? close()
      : open();
  };

  const changeLang = (lang) => {
    const parts = window.location.pathname
      .split("/")
      .filter(Boolean);

    if (parts.length >= 1) {
      parts[0] = lang;
    }

    window.location.href = "/" + parts.join("/");
  };

  // Events
  on(languageBox, "click", toggle);
  on(overlay, "click", close);

  document.addEventListener("click", (e) => {
    if (!languageBox.contains(e.target)) {
      close();
    }
  });

  // Expose changeLang cho HTML nếu cần
  window.changeLang = changeLang;
}
