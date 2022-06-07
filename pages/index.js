import Card from '../components/Card.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import FormValidator from '../components/FormValidator.js'
// import {photoPopup, openPopup, closePopup} from '../components/Popup.js'
import {initialCards, editForm, cardForm, profile} from '../utils/constants.js'

UserInfo
//...........................Код отвечает за изменение информации о пользователе..............................................

 const buttonOpenProfileEdit = profile.querySelector(".profile__edit");
// //const popupEdit = document.querySelector("#popupEdit");
// const buttonCloseEditPopup = popupEdit.querySelector(".popup__close");
// const name = profile.querySelector(".profile__title");
// const job = profile.querySelector(".profile__desc");
// const formEdit = popupEdit.querySelector(".popup__form");
// const nameInput = formEdit.querySelector("#nameInput");
// const jobInput = formEdit.querySelector("#jobInput");
// const elements = document.querySelector(".elements"); //елемент не в единственном числе, это блок куда добавляются элементы, потому и назвал его
// //"Элементы". поnому что туда добавялются элементы из темплейта. Если я ошибаюсь, то какое имя ему нужно задать, чтобы не сбивать при этом с толку
// const buttonClosePhotoPopup = photoPopup.querySelector(".popup__close");
const buttonOpenAddPopup = profile.querySelector(".profile__add-button");
// //const popupAdd = document.querySelector("#popupAdd"); //Попап добавления картинки
// const buttonCloseAddPopup = popupAdd.querySelector(".popup__close");
// //const formAdd = popupAdd.querySelector(".popup__form"); //Форма ПопАпа добавления карточки
// //const placeNameInput = formAdd.querySelector("#placeNameInput"); //Ввод названия места
// //const placeLinkInput = formAdd.querySelector("#placeLinkInput");
// //const buttonSubmit = formAdd.querySelector('.popup__submit');
// const popups = document.querySelectorAll('.popup');

//объект с данными форм, необходимый для их валидации
const config = {
  input: '.popup__input',
  submit: '.popup__submit',
  buttonUnactive: 'popup__submit_unactive',
  inputClassError: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}


//Валлидация формы добавления карточки
//const cardForm = popupAdd.querySelector('.popup__form');
const validateCardForm = new FormValidator(cardForm, config);
validateCardForm.enableValidation();
// Валидация формы изменения профиля
//const editForm = popupEdit.querySelector('.popup__form');
const validateEditForm = new FormValidator(editForm, config);
validateEditForm.enableValidation();



const user = new UserInfo ({userNameSelector: '.profile__title', UserJobSelector: '.profile__desc'});
console.log(user)
console.log(user._userName.textContent)
console.log(user._userJob.textContent)
console.log(user.getUserInfo())

const profileForm = new PopupWithForm ('#popupEdit', (inputsData) => {
  user.setUserInfo ({userName: inputsData.name, userJob: inputsData.job})
  console.log(user.setUserInfo())
});


/*
//.....Открыть попап редактирования профиля......
function openEditPopup() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupEdit);
}
//....обработка данных формы редактирования данных профиля..................
function editProfileInfo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupEdit);
}
*/


/**Создание и наполнение section
 * Функция отвечает за создание карточки из объекта, переданного в data.
 * @param {*} data Получает объект из которого берется ссылка и подпись карточки.
 * создается экземпляр класса Card
 * @returns возвращает карточку методом getCard класса кард.
 */
function createCard (data) {
  const newCard = new Card (data, '#elementTemplate');
  return newCard.getCard();
}
/**
 * Создает новую секцию из класса Section.
 * Передает ему объект в котором:
 * --Массив объектов, из которых нужно создать карточки
 * --колбэк, объясняющий, что делать с массивом
 * Вторым параметром передает Селектор, позволяющий найти саму секцию, куда добавлять карточки.
 * Методом addItem добавляет созданные карточки в контейнер.
 */
const section = new Section ({items: initialCards, renderer: (data) => {
  section.addItem(createCard(data));
}
},
'.elements'
);



const cardAdd = new PopupWithForm ('#popupAdd', (data) => {
  const placeObj = {
    name: data.placeName,
    link: data.link
  };
  section.addItem(createCard(placeObj))
});


section.rendererItems();


/**Старый код рендера Карточек
function makeCards (data, selector) {
  return new Card(data, selector).getCard();
}

function render() {
  initialCards.forEach((item) => {
    elements.append(makeCards (item, '#elementTemplate'));
  })
}
*/





/**Старая функция обработки формы добавления карточки
function addPlaceForm(evt) {
  evt.preventDefault(); 
  const placeObj = {
    link: placeLinkInput.value,
    name: placeNameInput.value
  }  
  elements.prepend(makeCards (placeObj, '#elementTemplate'));
  closePopup(popupAdd);
  formAdd.reset();
  validateCardForm.disableSubmitButton(buttonSubmit);
}
*/

 //render();
 //profileForm.setEventListeners();
// cardAdd.setEventListeners();

//formEdit.addEventListener("submit", editProfileInfo);
//formAdd.addEventListener("submit", addPlaceForm);
//buttonClosePhotoPopup.addEventListener("click", () => closePopup(photoPopup));
  buttonOpenProfileEdit.addEventListener("click", () => profileForm.openPopup());
//buttonCloseEditPopup.addEventListener("click", () => closePopup(popupEdit));
  buttonOpenAddPopup.addEventListener("click", () => cardAdd.openPopup());
//buttonCloseAddPopup.addEventListener("click", () => closePopup(popupAdd));
export {config};