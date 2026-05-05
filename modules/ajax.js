class Ajax {
    get(url, callback) {
        return this._request(url, { method: 'GET' }, callback);
    }

    post(url, data, callback) {
        return this._request(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data ?? null),
            },
            callback,
        );
    }

    patch(url, data, callback) {
        return this._request(
            url,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data ?? null),
            },
            callback,
        );
    }

    delete(url, callback) {
        return this._request(url, { method: 'DELETE' }, callback);
    }

    async _request(url, options, callback) {
        try {
            const response = await fetch(url, options);
            const status = response.status;

            const text = await response.text();
            if (!text) {
                callback(null, status);
                return;
            }

            try {
                const data = JSON.parse(text);
                callback(data, status);
            } catch (e) {
                console.error('Ошибка парсинга JSON:', e);
                callback(null, status);
            }
        } catch (e) {
            console.error('Ошибка запроса:', e);
            // Совместимость со старым XHR-поведением: при сетевой ошибке status "0"
            callback(null, 0);
        }
    }
}

export const ajax = new Ajax();