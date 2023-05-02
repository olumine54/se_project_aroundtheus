//import { handleEscUp, closePopup, openModal } from "./Utils.js";

class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  getCardElement() {
    this._cardElement = this._getView();

    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardTitleEl.textContent = this._name;

    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
  _setEventListeners() {
    // like button
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    // handle click on image --> open the modal
    this._cardImageEl.addEventListener("click", () => {
      this._handleCardClick(this._cardImageEl, this._cardTitleEl);
    });

    // delete button
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteIcon();
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteIcon() {
    this._cardElement.remove();
    this.cardElement = null;
  }
  // _handlePreviewImage() {
  //   const imageWindow = document.querySelector("#preview-image-modal");
  //   const imageElement = imageWindow.querySelector(".modal__preview-image");
  //   const imageFooter = imageWindow.querySelector(".modal__preview-footer");
  //   //this._cardImageEl.src = this._link;
  //   imageElement.src = this._link;
  //   imageFooter.textContent = this._name;
  //   imageElement.alt = this._name;

  //   // openModal(imageWindow);
  // }

  _getView() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
}

export default Card;
