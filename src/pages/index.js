import Card from '../components/Card.js'
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js'
import {initialCards, editForm, inputName, inputJob, cardForm, buttonOpenAddPopup, buttonOpenProfileEdit, config, avatar, avaEdit, avaForm} from '../utils/constants.js'
import './index.css'
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

let userId;

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
const user = new UserInfo ({userNameSelector: '.profile__title', UserJobSelector: '.profile__desc', userAva: '.profile__ava'});


 const profileForm = new PopupWithForm ('#popupEdit', (inputsData) => {
  profileForm.veiwLoad('Сохранение...')
  const userObj = {
    name: inputsData.name,
    about: inputsData.job
  };
  api.postUserInfo ('/users/me', userObj)
  .then((result) => {

    user.setUserInfo ({userName: result.name, userJob: result.about, userAva: result.avatar, userId: result._id});
    profileForm.closePopup ();
  })
  .catch ((err) => {
    console.log(err)
})
  .finally(() => {
    profileForm.veiwLoad('Сохранить')
  })
  
});

profileForm.setEventListeners();

const avatarForm = new PopupWithForm ('#popupAva', (inputsData) => {
  avatarForm.veiwLoad('Сохранение...')
  const newAva = {
    avatar: inputsData.avaLink
  }
  api.postUserInfo ('/users/me/avatar', newAva)
  .then ((result) => {
    console.log(result)
    user.setUserInfo({userName: result.name, userJob: result.about, userAva: result.avatar, userId: result._id});
    avatarForm.closePopup();
  })
  .catch ((err) => {
    console.log(err)
})
  .finally(() => {
    avatarForm.veiwLoad('Сохранить')
  })
})
avatarForm.setEventListeners();

function openEditForm () {
  const userInfoNow = user.getUserInfo()
  inputName.value = userInfoNow.userName
  inputJob.value = userInfoNow.userJob;
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
      thisCard.changeLike ()
    })
    .catch(err => console.log(err))
}

const popupWithConfirmation = new PopupWithConfirmation ('#popupDelete');
popupWithConfirmation.setEventListeners()



/**Создание и наполнение section
 * Функция отвечает за создание карточки из объекта, переданного в data.
 * @param {*} data Получает объект из которого берется ссылка и подпись карточки.
 * создается экземпляр класса Card
 * @returns возвращает карточку методом getCard класса кард.
 */
function createCard (data) {
  const newCard = new Card (data, '#elementTemplate', (name, link) =>  popupWithImage.openPopup(name, link), userId,  sendLikeCard,
  () => {
    popupWithConfirmation.openPopup();
    popupWithConfirmation.setSubmitFn(() => {
      api.deleteCard(data._id)
       .then (() => {
        newCard.deleteCardFromDOM();
        popupWithConfirmation.closePopup();
       })
       .catch ((err) => {
        console.log(err)
    })
    })
  });
  return newCard.getCard();
}

const section = new Section ('.elements');




Promise.all([api.getUserInfo(), api.getCard ()])
  .then((res) => {
    const [userInfo, cards] = res;
    // заполнение данных пользователя
    userId =userInfo._id
    user.setUserInfo ({userName: userInfo.name, userJob: userInfo.about, userAva: userInfo.avatar, userId: userInfo._id});
    // отрисовка карточек
    section.rendererItems({items: cards, renderer: (data) => {
      section.addItem(createCard(data));
    }
    });
  })
  .catch(err => {
    console.log(err)
  });


const cardAdd = new PopupWithForm ('#popupAdd', (data) => {
  cardAdd.veiwLoad('Сохранение...')
  const placeObj = {
    name: data.placeName,
    link: data.link
  };
  api.postCard ('/cards', placeObj)
    .then((result) => {
      const newCard = createCard(result);
      section.addNewCard(newCard);
      cardAdd.closePopup ()
    })
    .catch ((err) => {
      console.log(err)
  })
    .finally(() => {
      cardAdd.veiwLoad('Создать')
    })
  
});

function openCardForm () {
  validateCardForm.disableSubmitButton();
  cardAdd.openPopup()
}

function openAvaForm () {
  validateAvaForm.disableSubmitButton();
  avatarForm.openPopup()
}

cardAdd.setEventListeners();


avaEdit.addEventListener('click', () => openAvaForm())
buttonOpenProfileEdit.addEventListener("click", () => openEditForm());
buttonOpenAddPopup.addEventListener("click", () => openCardForm());
 