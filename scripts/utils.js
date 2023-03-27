function handleEscUp(e) {
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closePopup(activeModal);
  }
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
}
