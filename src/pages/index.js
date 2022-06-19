import Card from '../components/Card.js'
import Section from '../components/Section.js';
import Section2 from '../components/Section2.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js'
import {initialCards, editForm, cardForm, buttonOpenAddPopup, buttonOpenProfileEdit, config, avatar, avaForm} from '../utils/constants.js'
import './index.css'
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

//Валлидация формы добавления карточки
const validateCardForm = new FormValidator(cardForm, config);
validateCardForm.enableValidation();
// Валидация формы изменения профиля
const validateEditForm = new FormValidator(editForm, config);
validateEditForm.enableValidation();
// Валидация формы изменения Аватарки
const validateAvaForm = new FormValidator(avaForm, config);
validateAvaForm.enableValidation();

const api = new Api ('https://mesto.nomoreparties.co/v1/cohort-43', '5df93b18-5437-4244-a6a2-8b097c8cb05f')
const user = new UserInfo ({userNameSelector: '.profile__title', UserJobSelector: '.profile__desc'});

api.getUserInfo('/users/me')
  .then((result) => {
    user.setUserInfo ({userName: result.name, userJob: result.about, userAva: result.avatar});
  });

 const profileForm = new PopupWithForm ('#popupEdit', (inputsData) => {
  const userObj = {
    name: inputsData.name,
    about: inputsData.job
  };
  api.postUserInfo ('/users/me', userObj)
  .then((result) => {
    user.setUserInfo ({userName: result.name, userJob: result.about, userAva: result.avatar});
  });
  profileForm.closePopup ()
});
profileForm.setEventListeners();

const avatarForm = new PopupWithForm ('#popupAva', (inputsData) => {
  const newAva = {
    avatar: inputsData.avaLink
  }
  api.postUserInfo ('/users/me/avatar', newAva)
  .then ((result) => {
    avatar.src = result.avatar
    avatarForm.closePopup();
  });
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

function sendLikeCard (thisCard) {
  api.likeCard(thisCard._id, thisCard.isLiked())
    .then((result) => {
      console.log(result.likes)
      thisCard.addLikeCounter(result.likes)
      thisCard.likes = result.likes;
    })
}



const popupWithConfirmation = new PopupWithConfirmation ('#popupDelete')
console.log(popupWithConfirmation)
/*
function deleteCard(thisCard) {
  popupWithConfirmation.openPopup();
  popupWithConfirmation.setEventListeners((thisCard) => {
    api.deleteCard(thisCard._id)
    
  })
}

*/

// .................................допилилваем функцию удаления.........................................

/**Создание и наполнение section
 * Функция отвечает за создание карточки из объекта, переданного в data.
 * @param {*} data Получает объект из которого берется ссылка и подпись карточки.
 * создается экземпляр класса Card
 * @returns возвращает карточку методом getCard класса кард.
 */
function createCard (data) {
  const newCard = new Card (data, '#elementTemplate', (name, link) =>  popupWithImage.openPopup(name, link),  sendLikeCard, (cardId) => {
    popupWithConfirmation.openPopup();
    popupWithConfirmation.setEventListeners((cardId) => {
      api.deleteCard(cardId)
    })
  });
  return newCard.getCard();
}

const section2 = new Section2 ('.elements');

api.getCard ('/cards')
    .then((result) => {
      section2.rendererItems({items: result, renderer: (data) => {
        section2.addItem(createCard(data));
      }
      });
    });

/* Старый код рендеринга карточек

api.getCard ('/cards')
    .then((result) => {
      console.log(result)
      const section = new Section ({items: result, renderer: (data) => {
        section.addItem(createCard(data));
      }
      },
      '.elements'
      );
      section.rendererItems()
    })
*/



const cardAdd = new PopupWithForm ('#popupAdd', (data) => {
  const placeObj = {
    name: data.placeName,
    link: data.link
  };
  api.postCard ('/cards', placeObj)
    .then((result) => {
      const newCard = createCard(result);
      console.log(newCard)
      //.............НАйти тут ошибку не позволяющую выложить карточку.............................
      console.log(section2)
      console.log(section2.addItem)
      console.log(section2.addItem(newCard))

      section2.addItem(newCard);
    })
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
 