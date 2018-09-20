import { fetch } from '../utils/fetch';

const api = {
    user: {
        login() {
            return fetch({
                url: '/account/user/info'
            })
        },
    }
}

module.exports = {
    api: api
}