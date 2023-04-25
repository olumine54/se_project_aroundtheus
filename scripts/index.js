import Card from "./Card.js";

import FormValidator from "./FormValidator.js";

import { openModal, closePopup, closeModalOnRemoteClick } from "./Utils.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

const initialCards = [
  {
    name: "Yosimite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago fi Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// const cardData = {
//   name: "Yosimite Valley",
//   link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
// };

// const card = new Card(cardData, "#card-template");
// card.getCardElement();

const profileEditButton = document.querySelector("#profile-edit-button");

const profileEditModal = document.querySelector("#profile-edit-modal");

// const profileCloseButton = profileEditModal.querySelector(
//   ".modal__close-button"
// );

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
// preview moda
const previewModal = document.querySelector("#preview-image-modal");
//console.log(previewModal);
const previewImage = document.querySelector(".modal__preview-image");
// const previewCloseModal = previewModal.querySelector("#preview-close-button");
const previewFooter = document.querySelector(".modal__preview-footer");

const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addCardButton = document.querySelector(".profile__add-button");
const cardEditModal = document.querySelector("#card-edit-modal");
const addCardForm = cardEditModal.querySelector(".modal__form");
const cardModalCloseButton = cardEditModal.querySelector(
  ".modal__close-button"
);

const cardTitleInput = addCardForm.querySelector("#card-title-input");
const cardUrlInput = addCardForm.querySelector("#card-url-input");

/* -------------------------------------------------------------------------- */
/*                                 validation                                 */
/* -------------------------------------------------------------------------- */

const config = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__form-input_error",
  errorClass: "modal__error_visible",
};

const editFormElement = profileEditModal.querySelector(".modal__form");
const addFormElement = cardEditModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addFormElement);

addFormValidator.enableValidation();
const editPopup = new PopupWithForm({
  PopupSelector: ".profileEditModal",
  handleProfileSubmit,
});

const popupImage = new PopupWithImage("#preview-image-modal");
popupImage.setEventListeners();

// function renderCard({ item }) {
//   new Card(item, "#card__template", handleImageClick).getView();
//}

const cardSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        "#card__template",
        handleImageClick
      ).getView();
      cardSection.addItem(card);
    },
  },
  config.cardSectionClass
);

cardSection.renderItems();
// const profileEditFormElement = profileEditModal.querySelector(
//   "#profile-modal-form"
// );
// const addCardEditFormElement = cardEditModal.querySelector(".modal__form");
const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__description",
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  editPopup.open(profileEditModal);
  userInfo.setUserInfo({ name, job });
  editFormValidator.toggleButtonState();
});

function handleProfileSubmit() {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

// profileEditForm.addEventListener("submit", (e) => {

// });

initialCards.reverse().forEach((cardData) => renderCard(cardData, cardListEl));

// add new card button
function renderCard(cardData, cardListEl) {
  const card = new Card(cardData, "#card-template");
  const cardElement = card.getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

profileEditModal.addEventListener("mousedown", closeModalOnRemoteClick);
cardEditModal.addEventListener("mousedown", closeModalOnRemoteClick);
previewModal.addEventListener("mousedown", closeModalOnRemoteClick);

addCardButton.addEventListener("click", () => {
  //toggleButtonState(addFormValidator);
  openModal(cardEditModal);
  addFormValidator.toggleButtonState();
  // cardEditModal.classList.add("modal_opened");
});

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(cardEditModal);
  addCardForm.reset();
});

// const section = new Section({ items, renderer: () => {} }, ".cards__list");

// section.renderItems();

// const getErInfo = userInfo.getUserInfo();

// const newModal = new PopupWithForm("#profile-edit-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();

/* -------------------------------------------------------------------------- */
/*                           This is a comment trial                          */
/* -------------------------------------------------------------------------- */
