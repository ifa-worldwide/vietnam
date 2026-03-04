// js/main.js

import { initLanguage } from "./modules/language.js";
import { initModal } from "./modules/modal.js";

document.addEventListener("DOMContentLoaded", () => {

  initLanguage();

  initModal("redditModal", "redditBtn");

});
