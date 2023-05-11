class Card {
  constructor(
    data,
    userId,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.ownerId;
    this._likes = data.likes;
    this.userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this.handleDeleteClick = handleDeleteClick;
    this.handleLikeClick = handleLikeClick;
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

  _getView() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
}

export default Card;
