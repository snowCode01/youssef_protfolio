const modal = document.getElementById("cert-modal");
const modalContent = document.getElementById("modal-content");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeBtn = document.getElementById("close-modal");
const mImg = document.getElementById("modal-img");
const mTitle = document.getElementById("modal-title");
const mDesc = document.getElementById("modal-desc");
const mTools = document.getElementById("modal-tools");

function closeModal() {
  if (!modal || !modalContent) return;
  modal.classList.replace("opacity-100", "opacity-0");
  modalContent.classList.replace("scale-100", "scale-95");
  setTimeout(() => {
    modal.classList.add("pointer-events-none");
  }, 300);
}

document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (!modal || !mTitle || !mDesc || !mImg || !mTools) return;

    mTitle.textContent = card.getAttribute("data-title");
    mDesc.textContent = card.getAttribute("data-desc");
    mImg.src = card.getAttribute("data-img");

    const toolsArray = JSON.parse(card.getAttribute("data-tools"));
    mTools.innerHTML = "";
    toolsArray.forEach((iconClass) => {
      const icon = document.createElement("i");
      icon.className = `${iconClass} colored hover:scale-110 transition-transform cursor-pointer drop-shadow-md`;
      mTools.appendChild(icon);
    });

    modal.classList.remove("pointer-events-none");
    modal.classList.replace("opacity-0", "opacity-100");
    modalContent.classList.replace("scale-95", "scale-100");
  });
});

closeBtn?.addEventListener("click", closeModal);
modalBackdrop?.addEventListener("click", closeModal);
