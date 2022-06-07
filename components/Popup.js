/**Старый код попапов.
import {photoPopup, popupImage, popupTitle} from '../utils/constants.js';

function openPopup(popupName) {
    document.addEventListener('keyup', closePopupEsc)
    popupName.classList.add("popup_opened");
  }
  
const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
      }
    }
  
function closePopup(popupName) {
    document.removeEventListener('keyup', closePopupEsc)
    popupName.classList.remove("popup_opened");
  }
export {photoPopup, popupImage, popupTitle, openPopup, closePopup};
*/


//.........Формирую класс..................

export default class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  openPopup () {
    document.addEventListener('keyup', this._handleEscClose);
    this._popup.classList.add("popup_opened");
  };

  closePopup () {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keyup', this._handleEscClose);
  };

  _handleEscClose (evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
      }
  };

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
    });
    this._popup.querySelector('.popup__close')
    .addEventListener("click", () => this.closePopup());
  };

}


/*...... Старая функция закрытия попапа
const setClosePopup = () => {
  popups.forEach(function (popup) {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
    })
  })
}*/