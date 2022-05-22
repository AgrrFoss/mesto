import {photoPopup, openPopup} from './index.js'
export  default class Card {
    constructor (data, cardTemplate){
    this._link = data.link;
    this._name = data.name;
    this._cardTemplate = cardTemplate;
    }

    _getTemplate () {
        const elementPlace = document
                            .querySelector(this._cardTemplate)
                            .content
                            .querySelector('.element')
                            .cloneNode(true);
        return elementPlace;
    }
  
    getCard () {
      this._element = this._getTemplate ();
      this._setEventListeners();
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__image').alt = this._name;  
      return this._element;
    }

    _setEventListeners () {
      this._element.querySelector('.element__delete')
      .addEventListener('click', () => {this._handleDeleteCard ();
      });
      this._element.querySelector('.element__like')
      .addEventListener('click', () => {this._handleLikeClick ();
      });
      this._element.querySelector('.element__image').addEventListener('click', () => {this._handleViewImage ();
      });
      
    }

    _handleLikeClick () {
      this._element.querySelector('.element__like')
      .classList.toggle("element__like_active");
    }

    _handleDeleteCard () {
      this._element.remove();
      this._element = null;
    }
    
    _handleViewImage () {
      const popupImage = photoPopup.querySelector(".popup__image");
      const popupTitle = photoPopup.querySelector(".popup__image-name");
      popupImage.src = this._link;
      popupImage.alt = this._name;
      popupTitle.textContent = this._name;
      openPopup(photoPopup);
    }
}