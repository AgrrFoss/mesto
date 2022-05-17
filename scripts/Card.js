class Card {
    constructor (data, cardTemplate){
    this._link = data.link;
    console.log(this._link);
    this._name = data.name;
    console.log(data.name);
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
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        
        return this._element;
    }
}