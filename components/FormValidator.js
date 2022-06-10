import {config} from '../pages/index'

export  default class FormValidator {
    constructor (form, config) {
        this._formElement = form,
        this._config = config
    }

    disableSubmitButton (_buttonElement) {
        _buttonElement.classList.add(this._config.buttonUnactive);
        _buttonElement.setAttribute('disabled', true);
    }

    _showInputError = (_formElement, _inputElement, _errorMessage) => {
        const _errorElement = _formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(this._config.inputClassError);
        _errorElement.textContent = _errorMessage;
        _errorElement.classList.add(this._config.errorClass);
      }
      
    _hideInputError = (_formElement, _inputElement) => {
        const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(this._config.inputClassError);
        _errorElement.classList.remove(this._config.errorClass);
        _errorElement.textContent = '';
      }

    _isValid = (_formElement, _inputElement) => {
        if (!_inputElement.validity.valid) {
          this._showInputError(_formElement, _inputElement, _inputElement.validationMessage);
        } else {
          this._hideInputError(_formElement, _inputElement);
        }
      }

    _hasInvalidInput = (_inputList) => {
        return _inputList.some((_inputElement) => {
          return !_inputElement.validity.valid;
        });
       }

    _toggleButtonState = (_inputList, _buttonElement) => {
        if (this._hasInvalidInput(_inputList)) {
          this.disableSubmitButton (_buttonElement);
        } else {
          _buttonElement.removeAttribute('disabled', true);
          _buttonElement.classList.remove(config.buttonUnactive);
        }
      }

    _setEventListeners (_formElement) {
        const _inputList = Array.from(_formElement.querySelectorAll(this._config.input));
        const _buttonElement = this._formElement.querySelector(this._config.submit);
        this._toggleButtonState(_inputList, _buttonElement);
        _inputList.forEach((_inputElement) => {
          _inputElement.addEventListener('input', () => {
          this._isValid(_formElement, _inputElement);
        this._toggleButtonState(_inputList, _buttonElement);
    });
  });
    }
    
    enableValidation () {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            });
            this._setEventListeners (this._formElement);
    }

}