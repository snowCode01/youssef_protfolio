const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => {
      b.classList.remove(
        "bg-white",
        "dark:bg-brand-500",
        "text-brand-600",
        "dark:text-white",
        "shadow-sm",
        "font-bold"
      );
      b.classList.add("text-slate-600", "dark:text-slate-400", "font-semibold");
    });

    btn.classList.add(
      "bg-white",
      "dark:bg-brand-500",
      "text-brand-600",
      "dark:text-white",
      "shadow-sm",
      "font-bold"
    );
    btn.classList.remove("text-slate-600", "dark:text-slate-400", "font-semibold");

    const target = btn.getAttribute("data-target");
    tabContents.forEach((content) => {
      if (content.id === target) {
        content.classList.remove("hidden");
        content.style.animation = "none";
        content.offsetHeight;
        content.style.animation = "fadeInUp 0.5s ease-out forwards";
      } else {
        content.classList.add("hidden");
      }
    });
  });
});

const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeBtn = document.getElementById("close-modal");
const mImg = document.getElementById("modal-img");
const mTitle = document.getElementById("modal-title");
const mDesc = document.getElementById("modal-desc");
const mTech = document.getElementById("modal-tech");
const mLink = document.getElementById("modal-link");
const mLinkContainer = document.getElementById("modal-link-container");

function closeModal() {
  if (!modal || !modalContent) return;
  modal.classList.replace("opacity-100", "opacity-0");
  modalContent.classList.replace("scale-100", "scale-95");
  setTimeout(() => {
    modal.classList.add("pointer-events-none");
  }, 300);
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (!modal || !mTitle || !mDesc || !mImg || !mTech) return;

    mTitle.textContent = card.getAttribute("data-title");
    mDesc.textContent = card.getAttribute("data-desc");
    mImg.src = card.getAttribute("data-img");

    const url = card.getAttribute("data-url");
    if (mLink && mLinkContainer) {
      if (url && url !== "#") {
        mLink.href = url;
        mLinkContainer.classList.remove("hidden");
      } else {
        mLinkContainer.classList.add("hidden");
      }
    }

    const techAttr = card.getAttribute("data-tech");
    mTech.innerHTML = "";
    if (techAttr) {
      const techArray = JSON.parse(techAttr);
      techArray.forEach((iconClass) => {
        const icon = document.createElement("i");
        icon.className = `${iconClass} colored hover:scale-110 transition-transform cursor-pointer drop-shadow-sm`;
        mTech.appendChild(icon);
      });
    }

    modal.classList.remove("pointer-events-none");
    modal.classList.replace("opacity-0", "opacity-100");
    modalContent.classList.replace("scale-95", "scale-100");
  });
});

closeBtn?.addEventListener("click", closeModal);
modalBackdrop?.addEventListener("click", closeModal);
