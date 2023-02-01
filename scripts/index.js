let initialCards = [
    yosimteCard = {
        name: "Yosimite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    lakeLouiseCard = {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    baldMountainCard = {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    latemarCard = {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    
    },
    vanoiseParkCard = {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    lagoCard = {
        name: "Lago fi Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
];

const profileEditButton = document.querySelector("#profile-edit-button");

const profileEditModal = document.querySelector("#profile-edit-modal");

const profileCloseButton = profileEditModal.querySelector(".modal__close-button");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
    "#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

function closePopop(){
    profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
 // clone the template element with all its content and store it in a cardElement variable
const cardElement = cardTemplate.cloneNode(true);
// access the card title and image and store them in variables
const cardImageEl = cardElement.querySelector(".card__image");
const cardTitleEl = cardElement.querySelector(".card__title");
// set the path to the image to the link field of the object
cardImageEl.src = cardData.link;
// set the image alt text to the name field of the object
cardImageEl.textContent = cardData.name;
// set the card title to the name field of the object, too
cardTitleEl.textContent = cardData.name;
// return the ready HTML element with the filled-in data
return cardElement
}

 profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal_opened");
 });

 profileCloseButton.addEventListener("click", () => {
    closePopop();
 });

 profileEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopop();
 })

initialCards.forEach((cardData) => {
const cardElement = getCardElement(cardData);
    cardListEl.append(cardElement);
})
