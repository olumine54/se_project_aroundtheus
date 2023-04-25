import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(cardSelector) {
    super(cardSelector);
  }

  openModal() {
    this._popupElement.classList.add("modal_opened");

    document.addEventListener("keyup", handleEscUp);
    modal.addEventListener("mousedown", handleMouseDown);
  }
}
