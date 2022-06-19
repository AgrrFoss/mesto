import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  /** Класс создает попап с формой
   * @param {*} popupSelector Передать в конструктор Селектор popup
   * @param {*} submitHandler Функция описывающая Submit
   */
    constructor (popupSelector, submitHandler) {
        super (popupSelector);
      this._form = this._popup.querySelector('.popup__form');
      this._submitButton = this._form.querySelector('.popup__submit')
      this._submitHandler = submitHandler; 
      this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    };
  /**приватный метод. Собирает данные всех полей формы*/
    _getInputValues () {
      const inputsData= this._inputList.reduce((acc, input) => {
        acc[input.name] = input.value;
        return acc;
      }, {});
      return inputsData;
    };

    veiwLoad(text) {
      this._submitButton.textContent = text      
    }

    /** Добавляет не только закрыте попапа, но и обработчик кнопки submit*/
    setEventListeners() {
      super.setEventListeners()
      this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
     });
    };

    /**Перезаписывает родительский метод close, так как при закрытии
    попапа форма должна ещё и сбрасываться.*/
    closePopup () {
      super.closePopup ()
      this._form.reset();
    };
};