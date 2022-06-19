import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor (popupSelector) {
        super (popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners(sendRequest) {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        sendRequest() 
        this.closePopup();//Функция выполняемая при сабмите, полученная из Index
       });
      };
}