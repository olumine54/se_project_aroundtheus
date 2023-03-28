export function handleEscUp(e) {
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closePopup(activeModal);
  }
}

export function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
}

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
}
export function closeModalOnRemoteClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close-button")
  ) {
    closePopup(evt.currentTarget);
  }
}
