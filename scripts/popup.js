const photoPopup = document.querySelector("#photoPopup");
const popupImage = photoPopup.querySelector(".popup__image");
const popupTitle = photoPopup.querySelector(".popup__image-name");

function openPopup(popupName) {
    document.addEventListener('keyup', closePopupEsc)
    popupName.classList.add("popup_opened");
  }
  
const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
      }
    }
  
function closePopup(popupName) {
    document.removeEventListener('keyup', closePopupEsc)
    popupName.classList.remove("popup_opened");
  }
export {photoPopup, popupImage, popupTitle, openPopup, closePopup};
