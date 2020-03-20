import axios from 'axios';

axios.interceptors.response.use((success) => {
    return success.data
}, (fail) => {
    return Promise.reject(fail.response)
})

const __baseURL = 'http://192.168.15.2:9090';
let __token = '';

const Axios = () => {
    return {

        __headers() {
            return { headers: { 'Authorization': `Bearer ${__token}` } }
        },

        async get(resource) {
            return await axios.get(`${__baseURL}${resource}`, this.__headers());
        },

        async post(resource, data) {
            return await axios.post(`${__baseURL}${resource}`, data, this.__headers());
        },

        async patch(resource, data) {
            return await axios.patch(`${__baseURL}${resource}`, data, this.__headers());
        },

        async delete(resource) {
            return await axios.delete(`${__baseURL}${resource}`, this.__headers());
        },

        async put(resource) {
            return await axios.put(`${__baseURL}${resource}`, this.__headers());
        },

        setToken(token) {
            __token = token;
        },

        getToken() {
            return __token
        }
    }
};

export default Axios();

