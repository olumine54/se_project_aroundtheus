export default class FormValidator {
  constructoer(setting, formEl) {
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
    this._form = formEl;
  }
  _showInputError(inputEl) {
    // const { inputErrorClass } = options;
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    // const { inputErrorClass } = options;
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputEl, options) {
    if (!inputEl.validity.valid) {
      return showInputError(formEl, inputEl, options);
    }
    hideInputError(formEl, inputEl, options);
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  _disableButton(submitButton) {
    submitButton.classList.add(this._inactiveButtonClass);
    submitButton.disabled = true;
  }

  _enableButton(submitButton) {
    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.disabled = false;
  }

  toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
    if (this._hasInvalidInput(inputEls)) {
      this._disableButton(submitButton, { inactiveButtonClass });
    } else {
      this._enableButton(submitButton, { inactiveButtonClass });
    }
  }

  _setEventListener() {
    this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(formEl, inputEl, options);
        this._toggleButtonState(inputEls, submitButton, options);
      });

      // here you add the `reset` handler
      formEl.addEventListener("reset", () => {
        this._disableButton(submitButton, options);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListener(formEl, options);
  }
}
