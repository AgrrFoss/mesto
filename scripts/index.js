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
const elements = document.querySelector(".elements"); //елемент не в единственном числе, это блок куда добавляются элементы, потому и назывл его
//"Элементы". поnому что туда добавялются элементы из темплейта. Если я ошибаюсь, то какое имя ему нужно задать, чтобы не сбивать при этом с толку
const elementTemplate = document.querySelector("#elementTemplate"); //**Найден в _getElement**Находим шаблон элемента
const photoPopup = document.querySelector("#photoPopup");
const buttonClosePhotoPopup = photoPopup.querySelector(".popup__close");
const buttonOpenAddPopup = profile.querySelector(".profile__add-button");
const popupAdd = document.querySelector("#popupAdd"); //Попап добавления картинки
const buttonCloseAddPopup = popupAdd.querySelector(".popup__close");
const formAdd = popupAdd.querySelector(".popup__form"); //Форма ПопАпа добавления карточки
const placeNameInput = formAdd.querySelector("#placeNameInput"); //Ввод названия места
const placeLinkInput = formAdd.querySelector("#placeLinkInput");

const popups = document.querySelectorAll('.popup');
const setClosePopup = () => {
  popups.forEach(function (popup) {
    popup.addEventListener('click', (evt) => {
      console.log(evt);
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

/*
function getCard(item) {
  const elementPlace = elementTemplate.content.cloneNode(true); //Клонируем элемент с содержимым из шаблона
  const imagePlace = elementPlace.querySelector(".element__image");
  imagePlace.src = item.link;
  const namePlace = elementPlace.querySelector(".element__title");
  namePlace.textContent = item.name;
  const buttonDelete = elementPlace.querySelector(".element__delete");
  const buttonLike = elementPlace.querySelector(".element__like");

  buttonDelete.addEventListener("click", deleteCard);
  buttonLike.addEventListener("click", likeCard);
  imagePlace.addEventListener("click", viewImage);

  return elementPlace;
}

function render() {
  const cards = initialCards.map(getCard);
  elements.prepend(...cards);
}
*/
function render() {
  initialCards.forEach((item) => {
    const card = new Card(item, '#elementTemplate');
    const cards = card.getCard();
    elements.prepend(cards);
  })
}
/*
messageList.forEach((item) => {
  // передаём селектор темплейта при создании
    const card = new Card(item, '.card-template_type_default');
    const cardElement = card.generateCard();

    document.body.append(cardElement);
}); 

*/

function addPlaceForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. //Ввод ссылки на фото
  const card = getCard({ link: placeLinkInput.value, name: placeNameInput.value });
  const buttonSubmit = formAdd.querySelector('.popup__submit');
  elements.prepend(card);
  closePopup(popupAdd);
  formAdd.reset();
  disableSubmitButton (buttonSubmit);
}

function viewImage(evt) {
  openPopup(photoPopup);
  const card = evt.target.parentElement;
  const popupImage = photoPopup.querySelector(".popup__image");
  const popupTitle = photoPopup.querySelector(".popup__image-name");
  popupImage.src = card.querySelector(".element__image").src;
  popupTitle.textContent = card.querySelector(".element__title").textContent;
}
function deleteCard(evt) {
  const card = evt.target.closest(".element");
  card.remove();
}
function likeCard(evt) {
  const like = evt.target;
  like.classList.toggle("element__like_active");
}
render();

formEdit.addEventListener("submit", editProfileInfo);
formAdd.addEventListener("submit", addPlaceForm);
buttonClosePhotoPopup.addEventListener("click", () => closePopup(photoPopup));
buttonOpenProfileEdit.addEventListener("click", openEditPopup);
buttonCloseEditPopup.addEventListener("click", () => closePopup(popupEdit));
buttonOpenAddPopup.addEventListener("click", () => openPopup(popupAdd));
buttonCloseAddPopup.addEventListener("click", () => closePopup(popupAdd));