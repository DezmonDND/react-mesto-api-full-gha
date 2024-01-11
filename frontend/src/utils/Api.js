export class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    // Обработать промис, если ОК, в строку, если ошибка - вывести в консоль ошибку
    _checkError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        const token = localStorage.getItem('jwt');
        return fetch('https://api.denedoseikin.nomoredomainsmonster.ru/users/me', {
            headers: {
                method: 'GET',
                authorization: `Bearer ${token}`,
            }
        })
            .then(this._checkError);
    }

    setUserInfo(inputValues) {
        const token = localStorage.getItem('jwt');
        return fetch('https://api.denedoseikin.nomoredomainsmonster.ru/users/me', {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: inputValues.name,
                about: inputValues.about
            })
        })
            .then((this._checkError));
    }

    getInitialCards() {
        const token = localStorage.getItem('jwt');
        return fetch('https://api.denedoseikin.nomoredomainsmonster.ru/cards', {
            headers: {
                method: 'GET',
                authorization: `Bearer ${token}`,
            }
        })
            .then(this._checkError);
    }

    sentNewCard(inputValues) {
        const token = localStorage.getItem('jwt');
        return fetch('https://api.denedoseikin.nomoredomainsmonster.ru/cards', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: inputValues.profileName,
                link: inputValues.profileAbout
            })
        })
            .then(this._checkError);
    }

    deleteCard(cardId) {
        const token = localStorage.getItem('jwt');
        return fetch(`https://api.denedoseikin.nomoredomainsmonster.ru/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(this._checkError);
    }

    addLike(cardId) {
        const token = localStorage.getItem('jwt');
        return fetch(`https://api.denedoseikin.nomoredomainsmonster.ru/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(this._checkError);
    }

    deleteLike(cardId) {
        const token = localStorage.getItem('jwt');
        return fetch(`https://api.denedoseikin.nomoredomainsmonster.ru/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
            .then(this._checkError);
    }

    updateAvatar(data) {
        const token = localStorage.getItem('jwt');
        return fetch('https://api.denedoseikin.nomoredomainsmonster.ru/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatarLink
            })
        })
            .then(this._checkError);
    }
}

export const api = new Api({
    url: 'https://api.denedoseikin.nomoredomainsmonster.ru',
});