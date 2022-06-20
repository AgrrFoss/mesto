export default class Api {
    constructor (url, token) {
        this._url = url;
        this._token = token;
        this._headers = {
            authorization: this._token,
            'Content-Type': 'application/json'
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getUserInfo (userUrl) {
        return fetch(`${this._url}${userUrl}`, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    postUserInfo(userUrl, userObj) {
        return fetch(`${this._url}${userUrl}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(userObj)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        
    }

    getCard (cardsUrl) {
        return fetch(`${this._url}${cardsUrl}`, {
            method: 'GET',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    postCard(cardsUrl, cardObj) {
        return fetch(`${this._url}${cardsUrl}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(cardObj)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
    }
    /** отправляет запрос, касающийся лайка карточки
     * @param {*} cardId первый параметр: id карточки
     * @param {*} like второй параметр: функция определяющая поставлен ли лайк на карточке
     * @returns 
     */
    likeCard(cardId, like) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: like ? 'DELETE' : 'PUT',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
    }
    
}