export const photoPopup = document.querySelector("#photoPopup");
export const popupImage = photoPopup.querySelector(".popup__image");
export const popupTitle = photoPopup.querySelector(".popup__image-name");
const popupEdit = document.querySelector("#popupEdit");
export const editForm = popupEdit.querySelector('.popup__form')
const popupAdd = document.querySelector("#popupAdd"); //Попап добавления картинки
export const cardForm = popupAdd.querySelector('.popup__form');
export const profile = document.querySelector(".profile");
export const buttonOpenProfileEdit = profile.querySelector(".profile__edit");
export const buttonOpenAddPopup = profile.querySelector(".profile__add-button");
export const avatar = profile.querySelector('.profile__ava');
export const avaForm = document.querySelector('#popupAva .popup__form')

export const config = {
     input: '.popup__input',
     submit: '.popup__submit',
     buttonUnactive: 'popup__submit_unactive',
     inputClassError: 'popup__input_type_error',
     errorClass: 'popup__input-error'
    };
    
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