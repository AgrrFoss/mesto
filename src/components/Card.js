export  default class Card {
    constructor (data, cardTemplate, openCard){
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._cardTemplate = cardTemplate;
    this._handleViewImage = openCard;
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
      const _image = this._element.querySelector('.element__image');
      const _title = this._element.querySelector('.element__title');
      const _likeCounter = this._element.querySelector('.element__like-counter')
      _image.src = this._link;
      _title.textContent = this._name;
      _image.alt = this._name;  
      _likeCounter.textContent = this._likes.length
      return this._element;
    }

    _setEventListeners () {
      this._element.querySelector('.element__delete')
      .addEventListener('click', () => {this._handleDeleteCard ();
      });
      this._element.querySelector('.element__like')
      .addEventListener('click', () => {this._handleLikeClick ();
      });
      this._element.querySelector('.element__image').addEventListener('click', () => {this._handleViewImage (this._link, this._name);
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
}