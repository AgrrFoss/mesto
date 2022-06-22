import Popup from './Popup.js';

/*Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open.
 В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке. */
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super (popupSelector);
        this._image = this._popup.querySelector('.popup__image'); //дополнить акутальными данными из Card
        this._title = this._popup.querySelector('.popup__image-name'); //дополнить акутальными данными из Card
    };

    openPopup (link, name) {
        this._image.src = link//ссылка на изображение.
        this._image.alt = name//ссылка на изображение.
        this._title.textContent = name//подпись карточки.
        super.openPopup()
      };
};