// js/modules/modal.js

import { $, on, addClass, removeClass } from "../core/dom.js";

export function initModal(modalId, triggerId) {

  const modal = $("#" + modalId);
  const trigger = $("#" + triggerId);
  const closeBtn = $(".close-btn", modal);

  if (!modal || !trigger) return;

  const open = () => addClass(modal, "active");
  const close = () => removeClass(modal, "active");

  on(trigger, "click", open);

  if (closeBtn) {
    on(closeBtn, "click", close);
  }

  on(modal, "click", (e) => {
    if (e.target === modal) close();
  });
}
