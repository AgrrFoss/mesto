//Открытие и закрытие окна

let openPopupButton = document.querySelector('.profile__edit');
let closePopupButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
function openPopup () {
    popup.classList.add('popup_opened');
}
openPopupButton.addEventListener('click', openPopup);
function closePopup () {
    popup.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);



// Находим форму в DOM
let form = document.querySelector('.popup__content')
// Находим поля формы в DOM
let nameInput = form.querySelector('#nameInput');
let jobInput = form.querySelector('#jobInput');
let profile = document.querySelector('.profile');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
   // Получите значение полей jobInput и nameInput из свойства value
   // Выберите элементы, куда должны быть вставлены значения полей
  let name = profile.querySelector('.profile__title');
  let job = profile.querySelector('.profile__desc');
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup ()
    
}
form.addEventListener('submit', formSubmitHandler);