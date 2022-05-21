//...........................Код отвечает за изменение информации о пользователе..............................................
const profile = document.querySelector(".profile");
const buttonOpenProfileEdit = profile.querySelector(".profile__edit");
const popupEdit = document.querySelector("#popupEdit");
const buttonCloseEditPopup = popupEdit.querySelector(".popup__close");
const name = profile.querySelector(".profile__title");
const job = profile.querySelector(".profile__desc");
const formEdit = popupEdit.querySelector(".popup__form");
const nameInput = formEdit.querySelector("#nameInput");
const jobInput = formEdit.querySelector("#jobInput");
const elements = document.querySelector(".elements"); //елемент не в единственном числе, это блок куда добавляются элементы, потому и назвал его
//"Элементы". поnому что туда добавялются элементы из темплейта. Если я ошибаюсь, то какое имя ему нужно задать, чтобы не сбивать при этом с толку
const buttonClosePhotoPopup = photoPopup.querySelector(".popup__close");
const buttonOpenAddPopup = profile.querySelector(".profile__add-button");
const popupAdd = document.querySelector("#popupAdd"); //Попап добавления картинки
const buttonCloseAddPopup = popupAdd.querySelector(".popup__close");
const formAdd = popupAdd.querySelector(".popup__form"); //Форма ПопАпа добавления карточки
const placeNameInput = formAdd.querySelector("#placeNameInput"); //Ввод названия места
const placeLinkInput = formAdd.querySelector("#placeLinkInput");

const popups = document.querySelectorAll('.popup');


const config = {
  input: '.popup__input',
  submit: '.popup__submit',
  buttonUnactive: 'popup__submit_unactive',
  inputClassError: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

const cardForm = popupAdd.querySelector('.popup__form');
const validateCardForm = new FormValidator(cardForm, config);
validateCardForm.enableValidation();

const editForm = popupEdit.querySelector('.popup__form');
const validateEditForm = new FormValidator(editForm, config);
validateEditForm.enableValidation();

const setClosePopup = () => {
  popups.forEach(function (popup) {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
    })
  })
}
setClosePopup ();
//....................Функция закрытия попапа по нажатию на Esc........................
const closePopupEsc = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
    }
  }

////..........функции открытия и закрытия Попапов........
function closePopup(popupName) {
  document.removeEventListener('keyup', closePopupEsc)
  popupName.classList.remove("popup_opened");
}
function openPopup(popupName) {
  document.addEventListener('keyup', closePopupEsc)
  popupName.classList.add("popup_opened");
}
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


function render() {
  initialCards.forEach((item) => {
    const card = new Card(item, '#elementTemplate');
    const cards = card.getCard();
    elements.append(cards);
  })
}


function addPlaceForm(evt) {
  evt.preventDefault(); 
  const placeObj = {
    link: placeLinkInput.value,
    name: placeNameInput.value
  }  
  const card = new Card(placeObj, '#elementTemplate').getCard();
  const buttonSubmit = formAdd.querySelector('.popup__submit');
  elements.prepend(card);
  closePopup(popupAdd);
  formAdd.reset();
  buttonSubmit.classList.add('popup__submit_unactive');
  buttonSubmit.setAttribute('disabled', true);
  //disableSubmitButton (buttonSubmit);
}

render();

formEdit.addEventListener("submit", editProfileInfo);
formAdd.addEventListener("submit", addPlaceForm);
buttonClosePhotoPopup.addEventListener("click", () => closePopup(photoPopup));
buttonOpenProfileEdit.addEventListener("click", openEditPopup);
buttonCloseEditPopup.addEventListener("click", () => closePopup(popupEdit));
buttonOpenAddPopup.addEventListener("click", () => openPopup(popupAdd));
buttonCloseAddPopup.addEventListener("click", () => closePopup(popupAdd));