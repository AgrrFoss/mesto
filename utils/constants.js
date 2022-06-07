export const photoPopup = document.querySelector("#photoPopup");
export const popupImage = photoPopup.querySelector(".popup__image");
export const popupTitle = photoPopup.querySelector(".popup__image-name");
const popupEdit = document.querySelector("#popupEdit");
export const editForm = popupEdit.querySelector('.popup__form')
const popupAdd = document.querySelector("#popupAdd"); //Попап добавления картинки
export const cardForm = popupAdd.querySelector('.popup__form');
export const profile = document.querySelector(".profile");
// export const name = profile.querySelector(".profile__title");
// export const job = profile.querySelector(".profile__desc");


export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];