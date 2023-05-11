import "../pages/index.css";
import Card from "../components/Card.js";
import Api from "../components/Api.js";

import FormValidator from "../components/formValidator.js";

import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
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
  avatarModal,
  deleteCard,
  avatarModalForm,
  cardModalCloseButton,
  cardTitleInput,
  cardUrlInput,
  config,
} from "../utils/Constant";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "d1911efe-be4d-4479-96d1-f9beb5934f71",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then((cards) => {
  return cards;
});

const editFormElement = profileEditModal.querySelector(".modal__form");
const addFormElement = cardEditModal.querySelector(".modal__form");

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(config, addFormElement);

addFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(config, avatarModal);
avatarFormValidator.enableValidation();

const cardPopup = new PopupWithForm({
  popupSelector: "#card-edit-modal",
  handleFormSubmit: handleCardFormSubmit,
});

cardPopup.setEventListeners();

const editAvatar = new PopupWithForm({
  popupSelector: "#avatar-modal",
  handleFormSubmit: handleAvatarFormSubmit,
});
editAvatar.setEventListeners();

const editPopup = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: handleProfileSubmit,
});

editPopup.setEventListeners();
const popupImage = new PopupWithImage("#preview-image-modal");
popupImage.setEventListeners();

const deleteCardModal = new PopupWithConfirmation("#delete-card");

deleteCardModal.setEventListeners();

// const cardSection = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       // const card = new Card(item, "#card-template", handleImageClick);
//       return renderCard(item, cardListEl);
//     },
//   },
//   config.cardSectionClass
// );

// cardSection.renderItems();

const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__description",
  avatar: "#avatar-modal",
});

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.name;
  profileDescriptionInput.value = userData.job;

  editPopup.open();

  editFormValidator.toggleButtonState();
});

function handleAvatarFormSubmit(data) {
  editAvatar.renderLoading(true);

  api
    .updateAvatar(data.previewUrl)
    .then(() => {
      userInfo.setAvatar(data.previewUrl);
      editAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      //loadImage(data.imageURL);
      editAvatar.renderLoading(false, "Save");
    });
}

function handleProfileSubmit(inputValues) {
  editPopup.renderLoading(true);

  api
    .profileEdit({ name: inputValues.title, about: inputValues.job })
    .then((data) => {
      console.log(data);
      userInfo.setUserInfo({ title: data.name, job: data.about });
      editPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editPopup.renderLoading(false, "Save");
    });
}

function handleImageClick(cardImageEl, cardTitleEl) {
  popupImage.open(cardImageEl, cardTitleEl);
}

// add new card button
function renderCard(cardData, cardListEl) {
  const card = new Card(
    {
      name: cardData.name,
      link: cardData.link,
    },
    userId,
    "#card-template", // it should be userID
    handleImageClick // must be selector
  );
  const cardElement = card.getCardElement(cardData);
  cardSection.addItem(cardElement);
}

function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    "#card-template",
    (cardName, cardLink) => {
      popupImage.open(cardName, cardLink);
    },

    (cardId) => {
      deleteCardModal.open();
      deleteCardModal.setSubmitAction(() => {
        deleteCardModal.renderLoading(true);
        api.deleteCard(cardId).then(() => {
          card.deleteCard();
          deleteCardModal.renderLoading(false);
          deleteCardModal.close();
        });
      });
    },

    (cardId) => {
      if (card.isLiked()) {
        api
          .removeLikes(cardId)
          .then((data) => {
            card.updateLikes(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .addLikes(cardId)
          .then((data) => {
            card.updateLikes(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );
  return card.getCardElement();
}

let cardSection;
let userId;
api.getApiInfo().then(([userData]) => {
  userId = userData._id;
  userInfo.setUserInfo({ title: userData.name, job: userData.about });
  userInfo.setAvatarInfo({ avatar: userData.avatar });
  cardSection = new Section(
    {
      items: initialCards,
      renderer: (Cards) => {
        cardSection.addItem(createCard(Cards));
      },
    },
    ".cards__list"
  );
  cardSection.renderItems();
});

function handleCardFormSubmit(inputValues) {
  cardPopup.renderLoading(true);

  api
    .addCard({ name: inputValues.name, link: inputValues.link })
    .then(() => {
      // const addCard = createCard(cardData);
      cardPopup.close();
      //cardSection.addItem(addCard.getView());
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardPopup.renderLoading(false, "Create");
    });
  renderCard(inputValues);
}

addCardButton.addEventListener("click", () => {
  cardPopup.open();
  addFormValidator.toggleButtonState();
});

/* -------------------------------------------------------------------------- */
/*                           This is a comment trial                          */
/* -------------------------------------------------------------------------- */
