import Card from "./Card.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._modalElement = document.querySelector(popupSelector);
  }
  _open() {
    modal.classList.add("modal_opened");
    document.addEventListener("keydown", handleEscClose);
  }
  _close() {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", handleEscClose);
  }
  _handleEscClose() {
    const ESC_KEYCODE = 27;
    this._handleEscClose = (evt) => {
      if (evt.which === ESC_KEYCODE) {
        const activeModal = document.querySelector(".modal_opened");
        close(activeModal);
      }
    };
  }
  setEventListeners() {
    modalCloseButton.addEventListener("click", () => {
      close(activeModal);
    });
  }
  closeModalOnRemoteClick(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("modal__close")
    ) {
      closeModal(evt.target);
    }
  }
}
