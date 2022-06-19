export default class Section2 {

    constructor (containerSelector) {
        this._container = document.querySelector(containerSelector);
    }

    rendererItems({items, renderer}) {
        items.forEach(item => {
            renderer(item);
        });
        
    }

     /** Cодержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  */
      addItem(card) {
        this._container.append(card)
    }
    addNewCard(card) {
        this._container.prepend(card)
    }
}