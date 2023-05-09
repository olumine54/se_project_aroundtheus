// class Api {
//   constructor(options) {
//     this.baseUrl = "https://around.nomoreparties.co/v1/group-12/cards";
//     this.headers = {
//       authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
//     };
//   }

//   getInitialCards() {
//     return fetch(`${this._baseUrl}/cards`, {
//       headers: this.headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }

//   getUserInfo() {
//     return fetch(`${this._baseUrl}/cards`, {
//       headers: this.headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }

//   profileEdit(name, about) {
//     return fetch(`${this._baseUrl}/cards`, {\
//         method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         name,
//         about,
//       }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }
//   addCard(name, link) {
//     return fetch(`${this._baseUrl}/cards`, {
//         methode: "POST",
//       headers: this.headers,
//       body: JSON.stringify({
//         name,
//         link,
//       })
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }
//   deleteCard(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}`, {
//         method: "DELETE",
//       headers: this.headers,
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }
//   addLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//         method: "PUT",
//       headers: this.headers,
//       body: JSON.stringify({
//         cardId,
//       })
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }
//   removeLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//         method: "DELETE",
//       headers: this.headers,
//       body: JSON.stringify({
//         cardId,
//       })
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }
//   updatePreview(previewUrl) {
//     return fetch(`${this._baseUrl}/user/me/preview`, {
//         method: "PATCH",
//       headers: this.headers,
//       body: JSON.stringify({
//         previewUrl,
//       }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(`Error: ${res.status}`);
//       })
//       .catch((err) => {
//         console.log(err); // log the error to the console
//       });
//   }

//   // other methods for working with the API
// }

// const api = new Api({
//   baseUrl: "ttps://around.nomoreparties.co/v1/group-12/cards",
//   headers: {
//     authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
//     "Content-Type": "application/json",
//   },
// });
