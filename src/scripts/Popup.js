//import Card from "./Card.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._modalElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    //console.log(this._modalElement);
  }
  open() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    const ESC_KEYCODE = 27;
    //this._handleEscClose = (evt) => {
    //console.log(evt.which);
    if (evt.which === ESC_KEYCODE) {
      //const activeModal = document.querySelector(".modal_opened");
      this.close();
    }
    // };
  }
  setEventListeners() {
    this._modalElement.addEventListener("mousedown", (evt) => {
      this._closeModalOnRemoteClick(evt);
    });

    // modalCloseButton.addEventListener("click", () => {
    //   close(activeModal);
    // });
  }
  _closeModalOnRemoteClick(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("modal__close-button")
    ) {
      this.close();
    }
  }
}
