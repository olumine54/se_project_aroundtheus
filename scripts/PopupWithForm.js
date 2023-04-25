import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._form = this._popup.querySelector(".modal__form");
    this._modalForm = this.modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const inputValues =
      this._modalForm.querySelectorAll(".modal__input").values;
    return inputValues;
  }
  open() {
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListene(submit, (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    this._modalForm.reset();
    super.close();
  }
}
