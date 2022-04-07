let profile = document.querySelector('.profile');
let openPopupButton = profile.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close');
let name = profile.querySelector('.profile__title');
let job = profile.querySelector('.profile__desc');
let form = popup.querySelector('.popup__content')
let nameInput = form.querySelector('#nameInput');
let jobInput = form.querySelector('#jobInput');


function openPopup () {
    popup.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}
openPopupButton.addEventListener('click', openPopup);


function closePopup () {
    popup.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
   // Получите значение полей jobInput и nameInput из свойства value
   // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup ()
    
}
form.addEventListener('submit', formSubmitHandler);