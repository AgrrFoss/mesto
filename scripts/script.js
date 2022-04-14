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


//....................................Массив объектов для карточек............................................
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
//....................................Код для наполнения страницы карточками.........................
let elements = document.querySelector('.elements');//Находим куда добавлять элементы
let elementTemplate = document.querySelector('#elementTemplate');//Находим шаблон элемента
let elementPlace// = elementTemplate.content.cloneNode(true);//Клонируем элемент с содержимым

function render () {
    const cards = initialCards.map(getCard);
    elements.prepend(...cards);
}
function getCard(item) {
    console.log(item);
    elementPlace = elementTemplate.content.cloneNode(true);//Клонируем элемент с содержимым из шаблона
    console.log(elementPlace);
    const imagePlace = elementPlace.querySelector('.element__image');
    imagePlace.src = item.link;
    const namePlace = elementPlace.querySelector('.element__title');
    namePlace.textContent = item.name;
    const deleteButton = elementPlace.querySelector('.element__delete')
    const likeButton = elementPlace.querySelector('.element__like');

    deleteButton.addEventListener('click', deleteCard);
    likeButton.addEventListener('click', likeCard)

    return elementPlace;
}
function deleteCard (evt) {
const card = evt.target.closest('.element');
card.remove();
}
function likeCard (evt) {
  const like = evt.target;
  like.classList.toggle('element__like_active');
}

render();

//......................... Код для попапа добавления карточки.........................

let openAddButton = profile.querySelector('.profile__add-button');
let addPopup = document.querySelector('#addPopup');//Попап добавления картинки
let closeAddPopupButton = addPopup.querySelector('.popup__close');
let addForm = addPopup.querySelector('.popup__form');//Форма ПопАпа добавления карточки
//.....Открыть попап......
openAddButton.addEventListener('click', () => openPopup (addPopup));
//.....Закрыть попап......
closeAddPopupButton.addEventListener('click', () => closePopup(addPopup));
//.........Написать функцию работы попапа...........
function formAddPlace (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    elementPlace = elementTemplate.content.cloneNode(true);//Клонируем элемент с содержимым
    console.log(elementPlace);
    let placeNameInput = addForm.querySelector('#placeNameInput').value;//Ввод названия места
    let placeLinkInput = addForm.querySelector('#placeLinkInput').value;//Ввод ссылки на фото
    const card = getCard({link: placeLinkInput, name: placeNameInput});
    elements.prepend(card); 
    closePopup (addPopup);
}

addForm.addEventListener('submit', formAddPlace);

//............................Код попапа с фотографией.................................................
let photoPopup = document.querySelector('#photoPopup');
let closePhotoPopupButton = photoPopup.querySelector('.popup__close');

closePhotoPopupButton.addEventListener('click', () => closePopup(photoPopup));