import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor (popupSelector) {
        super (popupSelector);
    }

    setEventListeners(funcSubmit) {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        funcSubmit() //Функция выполняемая при сабмите, полученная из Index
       });
      };
}