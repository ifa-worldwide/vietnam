const langList = document.getElementById("languageList");
const langOverlay = document.getElementById("langOverlay");
const redditModal = document.getElementById("redditModal");
const redditBtn = document.getElementById("redditBtn");
const closeBtn = document.querySelector(".close-btn");
const languageBox = document.querySelector(".language-box");

/* ================= LANGUAGE ================= */

languageBox.addEventListener("click", toggleLanguage);
langOverlay.addEventListener("click", closeLanguage);

document.addEventListener("click", function(e){
  if(!languageBox.contains(e.target)){
    closeLanguage();
  }
});

function toggleLanguage(){
  if(window.innerWidth <= 768){
    openMobileLang();
  }else{
    openDesktopLang();
  }
}

function openDesktopLang(){
  if(langList.style.display === "flex"){
    closeLanguage();
  }else{
    langList.style.display = "flex";
    langOverlay.style.display = "block";
  }
}

function openMobileLang(){
  langOverlay.style.display = "block";
  langList.classList.add("show");
}

function closeLanguage(){
  langOverlay.style.display = "none";

  if(window.innerWidth <= 768){
    langList.classList.remove("show");
  }else{
    langList.style.display = "none";
  }
}

function changeLang(lang){
  const path = window.location.pathname;
  const parts = path.split("/").filter(Boolean);

  if(parts.length >= 1){
    parts[0] = lang;
  }

  const newPath = "/" + parts.join("/");
  window.location.href = newPath;
}

/* ================= REDDIT MODAL ================= */

redditBtn.addEventListener("click", () => {
  redditModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  redditModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === redditModal){
    redditModal.style.display = "none";
  }
});
