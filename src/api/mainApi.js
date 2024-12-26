class MainApi {
    // для обхода ошибки по CORS использовала расширение в браузере

    constructor() {
        this._url = 'https://maxifoxy-testfront-8f7d.twc1.net/';
        this._headers = {
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getData() {
        return fetch(this._url, {
            headers: this._headers,
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }
}

const shopApi = new MainApi();

export default shopApi;