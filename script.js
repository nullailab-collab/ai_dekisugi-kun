const LINE_URL = "";

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const lineLink = document.querySelector("#line-link");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (lineLink) {
  if (LINE_URL) {
    lineLink.href = LINE_URL;
  } else {
    lineLink.href = "javascript:void(0)";
    lineLink.addEventListener("click", () => {
      alert("公開前に script.js の LINE_URL に問い合わせ用LINEのURLを設定してください。");
    });
  }
}
