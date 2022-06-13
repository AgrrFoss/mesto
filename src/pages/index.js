import Card from '../components/Card.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js'
import {initialCards, editForm, cardForm, buttonOpenAddPopup, buttonOpenProfileEdit, config} from '../utils/constants.js'
import './index.css'
import PopupWithImage from '../components/PopupWithImage.js';

/*
Токен: 5df93b18-5437-4244-a6a2-8b097c8cb05f
Идентификатор группы: cohort-43
*/
/**запрос информации о пользователе */
fetch('https://nomoreparties.co/v1/cohort-43/users/me', {
  method: 'GET',
  headers: {
    authorization: '5df93b18-5437-4244-a6a2-8b097c8cb05f'
  } 
})
.then(res => res.json())
.then((result) => {
  const userInfoOnline =  result;
  console.log(userInfoOnline);
  return userInfoOnline;
});

/** Запрос карточек */
fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
  method: 'GET',
  headers: {
    authorization: '5df93b18-5437-4244-a6a2-8b097c8cb05f'
  } 
})
.then(res => res.json())
.then((result) => {
  const cardsOnline =  result;
  console.log(cardsOnline);
  return cardsOnline;
});


//Валлидация формы добавления карточки
const validateCardForm = new FormValidator(cardForm, config);
validateCardForm.enableValidation();
// Валидация формы изменения профиля
const validateEditForm = new FormValidator(editForm, config);
validateEditForm.enableValidation();



const user = new UserInfo ({userNameSelector: '.profile__title', UserJobSelector: '.profile__desc'});

const profileForm = new PopupWithForm ('#popupEdit', (inputsData) => {
  user.setUserInfo ({userName: inputsData.name, userJob: inputsData.job});
  profileForm.closePopup ()
});

profileForm.setEventListeners();

function openEditForm () {
  const userInfoNow = user.getUserInfo()
  document.querySelector('#popupEdit #nameInput').value = userInfoNow.userName
  document.querySelector('#popupEdit #jobInput').value = userInfoNow.userJob;
  profileForm.openPopup()
}

const popupWithImage = new PopupWithImage('#photoPopup');
popupWithImage.setEventListeners();
console.log(popupWithImage)

/**Создание и наполнение section
 * Функция отвечает за создание карточки из объекта, переданного в data.
 * @param {*} data Получает объект из которого берется ссылка и подпись карточки.
 * создается экземпляр класса Card
 * @returns возвращает карточку методом getCard класса кард.
 */
function createCard (data) {
  const newCard = new Card (data, '#elementTemplate', (name, link) =>  popupWithImage.openPopup(name, link));
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
  section.addItem(createCard(placeObj));
  cardAdd.closePopup ()
});

function openCardForm () {
  validateCardForm.enableValidation();
  cardAdd.openPopup()
}

cardAdd.setEventListeners();



section.rendererItems();



  buttonOpenProfileEdit.addEventListener("click", () => openEditForm());
  buttonOpenAddPopup.addEventListener("click", () => openCardForm());
 