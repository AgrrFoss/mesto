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
const elements = document.querySelector(".elements"); //Находим куда добавлять элементы
const elementTemplate = document.querySelector("#elementTemplate"); //Находим шаблон элемента
const photoPopup = document.querySelector("#photoPopup");
const buttonClosePhotoPopup = photoPopup.querySelector(".popup__close");
const buttonOpenAddPopup = profile.querySelector(".profile__add-button");
const popupAdd = document.querySelector("#popupAdd"); //Попап добавления картинки
const buttonCloseAddPopup = popupAdd.querySelector(".popup__close");
const formAdd = popupAdd.querySelector(".popup__form"); //Форма ПопАпа добавления карточки
const placeNameInput = formAdd.querySelector("#placeNameInput").value; //Ввод названия места
const placeLinkInput = formAdd.querySelector("#placeLinkInput").value;

////..........функции открытия и закрытия Попапов........
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
}
//.....Открыть попап редактирования профиля......
function openEditPopup() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupEdit);
}
//....обработка данных формы..................
function editProfileInfo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupEdit);
}
function getCard(item) {
  console.log(item);
  const elementPlace = elementTemplate.content.cloneNode(true); //Клонируем элемент с содержимым из шаблона
  console.log(elementPlace);
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
function addPlaceForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. //Ввод ссылки на фото
  const card = getCard({ link: placeLinkInput, name: placeNameInput });
  elements.prepend(card);
  closePopup(popupAdd);
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
