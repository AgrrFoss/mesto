import Card from '../components/Card.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js'
import {initialCards, editForm, cardForm, buttonOpenAddPopup, buttonOpenProfileEdit, config, avatar, avaForm} from '../utils/constants.js'
import './index.css'
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';

//Валлидация формы добавления карточки
const validateCardForm = new FormValidator(cardForm, config);
validateCardForm.enableValidation();
// Валидация формы изменения профиля
const validateEditForm = new FormValidator(editForm, config);
validateEditForm.enableValidation();

const validateAvaForm = new FormValidator(avaForm, config);
validateAvaForm.enableValidation();



const api = new Api ('https://mesto.nomoreparties.co/v1/cohort-43', '5df93b18-5437-4244-a6a2-8b097c8cb05f')

const user = new UserInfo ({userNameSelector: '.profile__title', UserJobSelector: '.profile__desc'});


api.getUserInfo('/users/me')
  .then((result) => {
    console.log(result)
    user.setUserInfo ({userName: result.name, userJob: result.about, userAva: result.avatar});
  });

 const profileForm = new PopupWithForm ('#popupEdit', (inputsData) => {
  const userObj = {
    name: inputsData.name,
    about: inputsData.job
  };
  console.log(userObj)
  api.postUserInfo ('/users/me', userObj)
 // user.setUserInfo ({userName: inputsData.name, userJob: inputsData.job});
  profileForm.closePopup ()
});

profileForm.setEventListeners();

const avatarForm = new PopupWithForm ('#popupAva', (inputsData) => {
  const newAva = {
    avatar: inputsData.avaLink
  }
  console.log(newAva)
  api.postUserInfo ('/users/me/avatar', newAva)
})

avatarForm.setEventListeners();

function openEditForm () {
  const userInfoNow = user.getUserInfo()
  document.querySelector('#popupEdit #nameInput').value = userInfoNow.userName
  document.querySelector('#popupEdit #jobInput').value = userInfoNow.userJob;
  profileForm.openPopup()
}

const popupWithImage = new PopupWithImage('#photoPopup');
popupWithImage.setEventListeners();

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

api.getCard ('/cards')
    .then((result) => {
      console.log(result[2])
      const section1 = new Section ({items: result, renderer: (data) => {
        section1.addItem(createCard(data));
      }
      },
      '.elements'
      );
      section1.rendererItems()
    })




const cardAdd = new PopupWithForm ('#popupAdd', (data) => {
  const placeObj = {
    name: data.placeName,
    link: data.link
  };
  api.postCard ('/cards', placeObj);
  cardAdd.closePopup ()
});

function openCardForm () {
  validateCardForm.enableValidation();
  cardAdd.openPopup()
}

cardAdd.setEventListeners();


avatar.addEventListener('click', () => avatarForm.openPopup())
buttonOpenProfileEdit.addEventListener("click", () => openEditForm());
buttonOpenAddPopup.addEventListener("click", () => openCardForm());
 