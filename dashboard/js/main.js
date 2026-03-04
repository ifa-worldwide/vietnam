import { initLanguage } from "./modules/language.js";
import { initModal } from "./modules/modal.js";

document.addEventListener("DOMContentLoaded", () => {

  console.log("JS Loaded");

  initLanguage();
  initModal("redditModal", "redditBtn");

});
