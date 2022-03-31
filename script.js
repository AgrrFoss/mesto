//Открытие и закрытие окна

let openPopupButton = document.querySelector('.profile__edit');
let closePopupButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
function openClosePopup () {
    popup.classList.toggle('popup_opened');
}
openPopupButton.addEventListener('click', openClosePopup);
closePopupButton.addEventListener('click', openClosePopup);



// Находим форму в DOM
let form = document.querySelector('.popup__content')
// Находим поля формы в DOM
let nameInput = form.querySelector('#nameInput');
let jobInput = form.querySelector('#jobInput');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
   // Получите значение полей jobInput и nameInput из свойства value
  let newNameInput = nameInput.value;
  let newJobInput = jobInput.value;
   // Выберите элементы, куда должны быть вставлены значения полей
  let name = document.querySelector('.profile__title');
  let job = document.querySelector('.profile__desc');
    // Вставьте новые значения с помощью textContent
    name.textContent = newNameInput;
    job.textContent = newJobInput;
    openClosePopup ()
}
form.addEventListener('submit', formSubmitHandler);