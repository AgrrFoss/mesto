import Popup from './Popup.js';
//import {photoPopup, popupImage, popupTitle} from '../utils/constants.js';

/*Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open.
 В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке. */
export default class PopupWithImage extends Popup {
    constructor (popupSelector, link, name) {
        super (popupSelector);
        this._image = this._popup.querySelector('.popup__image'); //дополнить акутальными данными из Card
        this._title = this._popup.querySelector('.popup__image-name'); //дополнить акутальными данными из Card
        this._link = link;
        this._name = name;
    };

    openPopup () {
        this.setEventListeners();
        this._image.src = this._link//ссылка на изображение.
        this._image.alt = this._name//ссылка на изображение.
        this._title.textContent = this._name//подпись карточки.
        super.openPopup()
      };
};