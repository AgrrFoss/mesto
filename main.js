(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._cardTemplate=n,this._handleViewImage=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"getCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".element__image"),t=this._element.querySelector(".element__title");return e.src=this._link,t.textContent=this._name,e.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleDeleteCard()})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleViewImage(e._link,e._name)}))}},{key:"_handleLikeClick",value:function(){this._element.querySelector(".element__like").classList.toggle("element__like_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,r;return t=e,(r=[{key:"rendererItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){document.addEventListener("keyup",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){console.log(t),(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.closePopup()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._submitHandler=t,n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){return this._inputList.reduce((function(e,t){return e[t.name]=t.value,e}),{})}},{key:"setEventListeners",value:function(){var e=this;a(f(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"closePopup",value:function(){a(f(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i),d=document.querySelector("#photoPopup"),_=(d.querySelector(".popup__image"),d.querySelector(".popup__image-name"),document.querySelector("#popupEdit").querySelector(".popup__form")),m=document.querySelector("#popupAdd").querySelector(".popup__form"),h=document.querySelector(".profile"),v=h.querySelector(".profile__edit"),b=h.querySelector(".profile__add-button"),g={input:".popup__input",submit:".popup__submit",buttonUnactive:"popup__submit_unactive",inputClassError:"popup__input_type_error",errorClass:"popup__input-error"};function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.userNameSelector,r=t.UserJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=h.querySelector(n),this._userJob=h.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.userJob;this._userName.textContent=t,this._userJob.textContent=n}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"_showInputError",(function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r._config.inputClassError),o.textContent=n,o.classList.add(r._config.errorClass)})),S(this,"_hideInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._config.inputClassError),n.classList.remove(r._config.errorClass),n.textContent=""})),S(this,"_isValid",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),S(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),S(this,"_toggleButtonState",(function(e,t){r._hasInvalidInput(e)?r.disableSubmitButton(t):(t.removeAttribute("disabled",!0),t.classList.remove(r._config.buttonUnactive))})),this._formElement=t,this._config=n}var t,n;return t=e,(n=[{key:"disableSubmitButton",value:function(e){console.log(this._config),e.classList.add(this._config.buttonUnactive),e.setAttribute("disabled",!0)}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._config.input)),r=this._formElement.querySelector(this._config.submit);this._toggleButtonState(n,r),n.forEach((function(o){o.addEventListener("input",(function(){t._isValid(e,o),t._toggleButtonState(n,r)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners(this._formElement)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function I(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._title=t._popup.querySelector(".popup__image-name"),t}return t=u,(n=[{key:"openPopup",value:function(e,t){console.log(t,e),this._image.src=e,this._image.alt=t,this._title.textContent=t,L(x(u.prototype),"openPopup",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i),T=new O(m,g);T.enableValidation(),new O(_,g).enableValidation();var N=new w({userNameSelector:".profile__title",UserJobSelector:".profile__desc"}),V=new y("#popupEdit",(function(e){N.setUserInfo({userName:e.name,userJob:e.job}),V.closePopup()}));V.setEventListeners();var B=new R("#photoPopup");function J(e){return new t(e,"#elementTemplate",(function(e,t){return B.openPopup(e,t)})).getCard()}B.setEventListeners(),console.log(B);var U=new r({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){U.addItem(J(e))}},".elements"),A=new y("#popupAdd",(function(e){var t={name:e.placeName,link:e.link};U.addItem(J(t)),A.closePopup()}));A.setEventListeners(),U.rendererItems(),v.addEventListener("click",(function(){return e=N.getUserInfo(),document.querySelector("#popupEdit #nameInput").value=e.userName,document.querySelector("#popupEdit #jobInput").value=e.userJob,void V.openPopup();var e})),b.addEventListener("click",(function(){return T.enableValidation(),void A.openPopup()}))})();