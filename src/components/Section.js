export default class Section {
 /**
  * 
  * @param {*} param0 Свойство items — это массив данных,
 которые нужно добавить на страницу при инициализации класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных
  на странице.
  * @param {*} containerSelector селектор контейнера, в который нужно добавлять созданные элементы.
  */
    constructor ({items, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = items;
        this._renderer = renderer
    };
/**
 *  Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
 */
    rendererItems() {
        this._items.forEach(item => {
            this._renderer(item);
        });
        
    }
    
    // renderCard(placeObj) {
    //     this._renderer(placeObj)
    // }
 /**
  * Cодержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  */
    addItem(card) {
        this._container.append(card)
    }
}


 
// У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.