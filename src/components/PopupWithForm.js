import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._form = this._modalElement.querySelector(".modal__form");
    // this._formInputs = this._popupElement.querySelectorAll(".modal__form-input");

    this._handleFormSubmit = handleFormSubmit;
  }

  open() {
    super.open();
  }

  _getInputValues() {
    const inputs = [
      ...this._modalElement.querySelectorAll(".modal__form-input"),
    ];
    const inputValues = {};
    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  close() {
    this._form.reset();
    super.close();
  }
}
