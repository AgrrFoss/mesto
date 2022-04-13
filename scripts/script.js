//...........................Код отвечает за изменение информации о пользователе..............................................
let profile = document.querySelector('.profile');
let openProfileEditButton = profile.querySelector('.profile__edit');
let editPopup = document.querySelector('#editPopup');
let closeEditPopupButton = editPopup.querySelector('.popup__close');
let name = profile.querySelector('.profile__title');
let job = profile.querySelector('.profile__desc');
let editForm = editPopup.querySelector('.popup__form')
let nameInput = editForm.querySelector('#nameInput');
let jobInput = editForm.querySelector('#jobInput');

////..........функции открытия и закрытия Попапов........
function closePopup (popupName) {
  popupName.classList.remove('popup_opened');
}
function openPopup(popupName) {
    popupName.classList.add('popup_opened');
}


//.....Открыть попап редактирования профиля......
function openEditPopup () {
    openPopup(editPopup);
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}
openProfileEditButton.addEventListener('click', openEditPopup);
//......Закрыть попап редактирования профиля........
closeEditPopupButton.addEventListener('click', () => closePopup(editPopup));
//....обработка данных формы..................
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(editPopup);
}
editForm.addEventListener('submit', formSubmitHandler);

//......................... Код для открытия и закрытия попапа добавления карточки.........................

let openAddButton = profile.querySelector('.profile__add-button');
let addPopup = document.querySelector('#addPopup'); //Попап добавления картинки
let closeAddPopupButton = addPopup.querySelector('.popup__close');
let addForm = addPopup.querySelector('.popup__form')
//.....Открыть попап......
openAddButton.addEventListener('click', () => openPopup (addPopup));
//.....Закрыть попап......
closeAddPopupButton.addEventListener('click', () => closePopup(addPopup));
//.........Написать функцию работы попапа...........
function formAddPlace (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    closePopup (addPopup);
}
addForm.addEventListener('submit', formAddPlace);

//............................Код попапа с фотографией.................................................
let photoPopup = document.querySelector('#photoPopup');
let closePhotoPopupButton = photoPopup.querySelector('.popup__close');

closePhotoPopupButton.addEventListener('click', () => closePopup(photoPopup));