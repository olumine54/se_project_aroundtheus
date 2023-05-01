import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._form = this._modalElement.querySelector(".modal__form");
    // this._modalForm = this.modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  open() {
    super.open();
  }

  _getInputValues() {
    const inputValues =
      this._modalElement.querySelectorAll(".modal__input").values;
    inputValues.forEach((input) => {
      inputValues[input.name] = input.value;
      //console.log(input.value)
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    this._form.reset();
    super.close();
  }
}
