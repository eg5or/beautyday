import * as axios from 'axios';

const instance = axios.create({
    /*baseURL: 'http://92.63.100.121:5000/api/',*/
    /*baseURL: 'http://92.63.100.121:5002/api/',*/
    baseURL: 'http://localhost:5000/api/',
});

export const authAPI = {
    loginToAdminPage(login, password) {
        return instance.post('auth/login', {login, password})
    },

    checkAuth(id, token) {
        return instance.post(`auth/me`, {id}, {
            headers: {
                'Authorization': token
            }
        })
    },

    changePassword(id, newPassword) {
        return instance.post(`auth/changepwd`, {id, newPassword})
    },

    authorized(id) {
        return instance.get(`auth/authorized/${id}`).then(response => response.data)
    }
}