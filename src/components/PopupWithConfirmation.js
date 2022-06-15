import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor () {

    }

    setEventListeners(funcName) {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
       // funcName; Функция выполняемая при сабмите, полученная из Index
       });
      };
}