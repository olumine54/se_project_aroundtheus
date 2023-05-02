export const initialCards = [
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

export const profileEditButton = document.querySelector("#profile-edit-button");

export const profileEditModal = document.querySelector("#profile-edit-modal");

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
// preview moda
export const previewModal = document.querySelector("#preview-image-modal");
//console.log(previewModal);
export const previewImage = document.querySelector(".modal__preview-image");
// const previewCloseModal = previewModal.querySelector("#preview-close-button");
export const previewFooter = document.querySelector(".modal__preview-footer");

export const profileEditForm = profileEditModal.querySelector(".modal__form");

export const cardListEl = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const addCardButton = document.querySelector(".profile__add-button");
export const cardEditModal = document.querySelector("#card-edit-modal");
export const addCardForm = cardEditModal.querySelector(".modal__form");
export const cardModalCloseButton = cardEditModal.querySelector(
  ".modal__close-button"
);

export const cardTitleInput = addCardForm.querySelector("#card-title-input");
export const cardUrlInput = addCardForm.querySelector("#card-url-input");

export const config = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_disabled",
  inputErrorClass: "modal__form-input_error",
  errorClass: "modal__error_visible",
};
