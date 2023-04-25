import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    super.open();
    this._popupElement.src = cardImageEl.src;
    this._popupElement.name = cardImageEl.alt;
    this._popupElement.name = cardTitleEl.textContent;
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
