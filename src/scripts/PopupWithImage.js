import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._modalElement = document.querySelector(popupSelector);
  }
  open() {
    super.open();
    this._modalElement.src = cardImageEl.src;
    this._modalElement.name = cardImageEl.alt;
    this._modalElement.name = cardTitleEl.textContent;
  }
  close() {
    super.close();
  }

  // openModal() {
  //   this._popupElement.classList.add("modal_opened");

  //   document.addEventListener("keyup", handleEscUp);
  //   modal.addEventListener("mousedown", handleMouseDown);
  // }
}
