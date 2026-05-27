const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const navIconBars = document.getElementById("nav-icon-bars");
const navIconClose = document.getElementById("nav-icon-close");

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add("hidden");
  navToggle?.setAttribute("aria-expanded", "false");
  navIconBars?.classList.remove("hidden");
  navIconClose?.classList.add("hidden");
}

function openMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("hidden");
  navToggle?.setAttribute("aria-expanded", "true");
  navIconBars?.classList.add("hidden");
  navIconClose?.classList.remove("hidden");
}

if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu();
    }
  });
}
