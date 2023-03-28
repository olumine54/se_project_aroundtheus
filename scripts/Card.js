import {
  handleEscUp,
  closePopup,
  openModal,
  closeModalOnRemoteClick,
} from "./Utils.js";

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  getCardElement() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardTitleEl.textContent = this._title;

    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._title;

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
      this._handlePreviewImage();
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
  _handlePreviewImage() {
    this._previewimage.src = this._link;
    this._previewImageTitle.textContent = this._title;
    this._previewImage.alt = this._title;

    openModal(document.querySelector("#preview-Image-modal"));
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }
}
