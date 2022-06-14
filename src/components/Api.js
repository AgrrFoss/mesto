export default class Api {
    constructor (url, token) {
        this._url = url;
        this._token = token;
        this._headers = {
            authorization: this._token,
            'Content-Type': 'application/json'
        }
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
        .catch ((err) => {
            console.log(err)
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
        .catch ((err) => {
            console.log(err)
        })
    }
}