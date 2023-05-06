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
  // addCardForm,
  cardModalCloseButton,
  cardTitleInput,
  cardUrlInput,
  config,
} from "../utils/constant";

const editFormElement = profileEditModal.querySelector(".modal__form");
const addFormElement = cardEditModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addFormElement);

addFormValidator.enableValidation();

const cardPopup = new PopupWithForm({
  popupSelector: "#card-edit-modal",
  handleFormSubmit: handleCardFormSubmit,
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
      return renderCard(item, cardListEl);
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

function handleProfileSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  editPopup.close();
}

function handleImageClick(cardImageEl, cardTitleEl) {
  popupImage.open(cardImageEl, cardTitleEl);
}

// add new card button
function renderCard(cardData, cardListEl) {
  //console.log(cardData);
  const card = new Card(
    {
      name: cardData.name,
      link: cardData.link,
    },
    "#card-template",
    handleImageClick // replace handler
  );
  // const card = new Card({
  //   cardData,
  //   cardSelector: "#card-template",
  //   handleImageClick: { name, link },
  // });
  const cardElement = card.getCardElement(cardData);
  cardSection.addItem(cardElement);
  //cardListEl.prepend(cardElement); // <---- here we make a prepend
}

function handleCardFormSubmit(inputValues) {
  // HANDLE CODE BELOW, no arguments
  renderCard(inputValues);
  cardPopup.close();
  // addFormValidator.toggleButtonState();
}

addCardButton.addEventListener("click", () => {
  cardPopup.open();
  addFormValidator.toggleButtonState();
});

// addCardForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardListEl);
//   cardPopup.close();
//   addCardForm.reset();
// });

// const addCardForm = new PopupWithForm({
//   popupSelector: "#card-edit-modal",
//   handleFormSubmit: (data) => {
//     //cardSection.addItem(renderCard(data, cardListEl));
//   },
// });
// addCardForm.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                           This is a comment trial                          */
/* -------------------------------------------------------------------------- */
