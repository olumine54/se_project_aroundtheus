import "../pages/index.css";
import Card from "../components/Card.js";

import FormValidator from "../components/formValidator.js";

//import { openModal, closePopup, closeModalOnRemoteClick } from "./Utils.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  initialCards,
  profileEditButton,
  profileEditModal,
  profileTitle,
  profileDescription,
  profileDescriptionInput,
  profileTitleInput,
  profileEditForm,
  previewModal,
  previewImage,
  previewFooter,
  cardListEl,
  cardTemplate,
  addCardButton,
  cardEditModal,
  addCardForm,
  cardModalCloseButton,
  cardTitleInput,
  cardUrlInput,
  config,
} from "../utils/Constant";

const editFormElement = profileEditModal.querySelector(".modal__form");
const addFormElement = cardEditModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addFormElement);

addFormValidator.enableValidation();
const cardPopup = new PopupWithForm({
  popupSelector: "#card-edit-modal",
  handleFormSubmit: handleAddCardButton,
});
cardPopup.setEventListeners();
const editPopup = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: handleProfileSubmit,
});

editPopup.setEventListeners();
const popupImage = new PopupWithImage("#preview-image-modal");
popupImage.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      // const card = new Card(item, "#card-template", handleImageClick);
      renderCard(item, cardListEl);
    },
  },
  config.cardSectionClass
);

cardSection.renderItems();

const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__description",
});

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileDescriptionInput.value = userData.job;

  editPopup.open();

  editFormValidator.toggleButtonState();
});

function handleProfileSubmit() {
  //e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  editPopup.close();
}

// profileEditForm.addEventListener("submit", () => {
//   //e.preventDefault();
//   profileTitle.textContent = profileTitleInput.value;
//   profileDescription.textContent = profileDescriptionInput.value;
//   editPopup.close();
// });

function handleImageClick(cardImageEl, cardTitleEl) {
  popupImage.open(cardImageEl, cardTitleEl);
}

// initialCards.reverse().forEach((cardData) => renderCard(cardData, cardListEl));

// add new card button
function renderCard(cardData, cardListEl) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const cardElement = card.getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

function handleAddCardButton() {
  cardPopup.open(cardEditModal);
  addFormValidator.toggleButtonState();
}

addCardButton.addEventListener("click", () => {
  cardPopup.open(cardEditModal);
  addFormValidator.toggleButtonState();
});

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  cardPopup.close(cardEditModal);
  addCardForm.reset();
});

/* -------------------------------------------------------------------------- */
/*                           This is a comment trial                          */
/* -------------------------------------------------------------------------- */
