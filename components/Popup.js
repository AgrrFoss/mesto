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
      console.log(evt)
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.closePopup();
      }
    });
  };
}