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

const profileEditButton = document.querySelector("#profile-edit-button");

const profileEditModal = document.querySelector("#profile-edit-modal");

const profileCloseButton = profileEditModal.querySelector(
  ".modal__close-button"
);

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
// preview moda
const previewModal = document.querySelector("#preview-image-modal");
const previewImage = document.querySelector(".modal__preview-image");
const previewCloseModal = previewModal.querySelector("#preview-close-button");
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

const editFormValidator = document.querySelector("#profile-edit-form");
// editFormValidator.enableValidation();

const addFormValidator = document.querySelector("#card-add-form");
// addFormValidator.enableValidation();

function handleEscUp(e) {
  if (e.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closePopup(activeModal);
  }
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscUp);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscUp);
}

function getCardElement(cardData) {
  // clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);
  // access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  //add delete button
  const deleteButton = cardElement.querySelector(".card__delete-button");
  //add event listener
  deleteButton.addEventListener("click", () => {
    deleteButton.classList.toggle("card__delete-button");
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewImage.src = cardData.link;
    previewImage.alt = cardData.name;
    previewFooter.textContent = cardData.name;
    openModal(previewModal);
  });

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardImageEl.src = cardData.link;

  cardImageEl.alt = cardData.name;

  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  toggleButtonState(editFormValidator);
  openModal(profileEditModal);
});

profileCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
});

previewCloseModal.addEventListener("click", (e) => {
  closePopup(previewModal);
});

initialCards.reverse().forEach((cardData) => renderCard(cardData, cardListEl));

// add new card button
function renderCard(cardData, cardListEl) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

function closeModalOnRemoteClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close-button")
  ) {
    closePopup(evt.target);
  }
}

profileEditModal.addEventListener("mousedown", closeModalOnRemoteClick);
cardEditModal.addEventListener("mousedown", closeModalOnRemoteClick);
previewModal.addEventListener("mousedown", closeModalOnRemoteClick);

addCardButton.addEventListener("click", () => {
  toggleButtonState(addFormValidator);
  openModal(cardEditModal);
  // cardEditModal.classList.add("modal_opened");
});

function handleMouseDown(evt) {
  if (evt.target.classList.contains("modal__opened")) {
    closePopup(evt.target);
  }
}

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closePopup(cardEditModal);
  addCardForm.reset();
});

cardModalCloseButton.addEventListener("click", () => {
  closePopup(cardEditModal);
});

/* -------------------------------------------------------------------------- */
/*                           This is a comment trial                          */
/* -------------------------------------------------------------------------- */
