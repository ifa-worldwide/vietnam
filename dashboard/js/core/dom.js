// js/core/dom.js

export const $ = (selector, scope = document) =>
  scope.querySelector(selector);

export const $$ = (selector, scope = document) =>
  scope.querySelectorAll(selector);

export const on = (element, event, handler) =>
  element.addEventListener(event, handler);

export const addClass = (el, className) =>
  el.classList.add(className);

export const removeClass = (el, className) =>
  el.classList.remove(className);

export const toggleClass = (el, className) =>
  el.classList.toggle(className);
