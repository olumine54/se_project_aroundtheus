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


// const editProfileCloseButton = profileEditModal.querySelector("modal__close_button");
// const openModalButton = document.querySelector("#open-modal-button");

// editProfileCloseButton.addEventListener("click", () => {
//     profileEditModal.classList.remove("modal_opened");
// });

// openModalButton.addEventListener("click", () => {
//     profileEditModal.classList.add("modal_open");
// })

const profileEditButton = document.querySelector("#profile-edit-button");

const profileEditModal = document.querySelector("#profile-edit-modal");

const profileCloseButton = document.querySelector("#profile-close-button");

 profileCloseButton.addEventListener("click", () => {
 profileEditModal.classList.remove("modal_opened")
 })

 profileEditButton.addEventListener("click", () => {
    console.log("testing");
    profileEditModal.classList.add("modal_opened")
 })