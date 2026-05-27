const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.classList.add("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    const activeTheme = root.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", activeTheme);
  });
}

const loader = document.getElementById("pageLoader");
const pageLinks = document.querySelectorAll("a.nav-link[href]");

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");
    if (!target || target.startsWith("#")) {
      return;
    }

    if (target === window.location.pathname.split("/").pop()) {
      return;
    }

    event.preventDefault();

    if (loader) {
      loader.classList.remove("opacity-0", "pointer-events-none");
      loader.classList.add("opacity-100");
    }

    setTimeout(() => {
      window.location.href = target;
    }, 2000);
  });
});

const tabs = document.querySelectorAll(".project-tab");
const tabContent = document.querySelectorAll(".project-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    const target = tab.getAttribute("data-target");
    tabContent.forEach((content) => {
      if (content.id === target) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
});
