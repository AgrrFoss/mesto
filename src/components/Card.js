export  default class Card {
    constructor (data, cardTemplate, openCard, userId, likeCard, deleteCard){
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this.likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardTemplate = cardTemplate;
    this._handleViewImage = openCard;
    this._handleLikeImage = likeCard;
    this._handleDeleteCard = deleteCard;
    this._element = document
    .querySelector(this._cardTemplate)
    .content
    .querySelector('.element')
    .cloneNode(true);
    this._elementLike = this._element.querySelector('.element__like');
    this._elementLikeCounter = this._element.querySelector('.element__like-counter');
    }


    getCard () {
      
      this._setEventListeners();
      const _image = this._element.querySelector('.element__image');
      const _title = this._element.querySelector('.element__title');
      _image.src = this._link;
      _title.textContent = this._name;
      _image.alt = this._name;  
      this.addLikeCounter (this.likes)
      if (this._ownerId !== this._userId){
        this._element.removeChild(this._element.querySelector('.element__delete'))}
      if (this.isLiked() === true) {
        this._elementLike.classList.add("element__like_active");
      }
      return this._element;
    }
    /**функция меняет данные счетчика
     * @param {*} likes принимает на вход массив с лайкнувшими пользователями
     */
    addLikeCounter (likes) {
      this._elementLikeCounter.textContent = likes.length;
    }

    _setEventListeners () {
      this._element.querySelector('.element__delete')
      .addEventListener('click', () => {this._handleDeleteCard();
      });
     
      this._elementLike.addEventListener('click', () => {this._handleLikeImage(this);
      });
      this._element.querySelector('.element__image').addEventListener('click', () => {this._handleViewImage (this._link, this._name);
      });
      
    }


  isLiked() {
    return Boolean(Array.from(this.likes).find(item => item._id === this._userId));
    }

  changeLike () {
    this._elementLike.classList.toggle("element__like_active");
  }

  deleteCardFromDOM () {
    this._element.remove();
    this._element = null;
  }
}