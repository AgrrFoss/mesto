export  default class FormValidator {
    constructor (form, config) {
        this._formElement = form,
        this._config = config
        this._buttonElement = this._formElement.querySelector(this._config.submit);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.input));
      }

  
    disableSubmitButton () {
      this._buttonElement.classList.add(this._config.buttonUnactive);
      this._buttonElement.setAttribute('disabled', true);
    }

    _showInputError = (_inputElement, _errorMessage) => {
        const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(this._config.inputClassError);
        _errorElement.textContent = _errorMessage;
        _errorElement.classList.add(this._config.errorClass);
      }
      
    _hideInputError = (_inputElement) => {
        const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(this._config.inputClassError);
        _errorElement.classList.remove(this._config.errorClass);
        _errorElement.textContent = '';
      }

    _isValid = (_inputElement) => {
        if (!_inputElement.validity.valid) {
          this._showInputError(_inputElement, _inputElement.validationMessage);
        } else {
          this._hideInputError(_inputElement);
        }
      }

    _hasInvalidInput = () => {
        return this._inputList.some((_inputElement) => {
          return !_inputElement.validity.valid;
        });
       }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
          this.disableSubmitButton ();
        } else {
          this._buttonElement.removeAttribute('disabled', true);
          this._buttonElement.classList.remove(this._config.buttonUnactive);
        }
      }

    _setEventListeners () {
      //  const _inputList = Array.from(_formElement.querySelectorAll(this._config.input));
       // const _buttonElement = this._buttonElement //  this._formElement.querySelector(this._config.submit);
        this._toggleButtonState();
        this._inputList.forEach((_inputElement) => {
          _inputElement.addEventListener('input', () => {
          this._isValid(_inputElement);
        this._toggleButtonState();
    });
  });
    }
    
    enableValidation () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            });
            this._setEventListeners ();
    }

}