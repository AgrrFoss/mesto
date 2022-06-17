export  default class Card {
    constructor (data, cardTemplate, openCard, likeCard){
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._userId = 'b9b7acc38d7000eebabc5bed'
    this._ownerId = data.owner._id;
    this._cardTemplate = cardTemplate;
    this._handleViewImage = openCard;
    this._handleLikeImage = likeCard;
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
      //const _likeCounter = this._element.querySelector('.element__like-counter')
      _image.src = this._link;
      _title.textContent = this._name;
      _image.alt = this._name;  
      this.addLikeCounter (this._likes)
      //_likeCounter.textContent = this._likes.length;
      if (this._ownerId !== this._userId){
        this._element.removeChild(this._element.querySelector('.element__delete'))}
      if (this.isLiked() === true) {
        this._element.querySelector('.element__like').classList.add("element__like_active");
      }
      return this._element;
    }

    addLikeCounter (likes) {
      const _likeCounter = this._element.querySelector('.element__like-counter');
      _likeCounter.textContent = likes.length;
    }

    _setEventListeners () {
      this._element.querySelector('.element__delete')
      .addEventListener('click', () => {this._handleDeleteCard ();
      });
      this._element.querySelector('.element__like')
      .addEventListener('click', () => {this.handleLikeClick ();
      });
      this._element.querySelector('.element__image').addEventListener('click', () => {this._handleViewImage (this._link, this._name);
      });
      
    }


  isLiked() {
    return Boolean(Array.from(this._likes).find(item => item._id === this._userId));
    }

  handleLikeClick () {
    this._element.querySelector('.element__like')
    .classList.toggle("element__like_active");
    console.log(this.isLiked())
    this._handleLikeImage(this._id,  this.isLiked());
  }

_handleDeleteCard () {
    this._element.remove();
    this._element = null;
  }
}