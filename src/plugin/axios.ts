import Axios from "axios";

let axios = Axios.create({
    baseURL: 'http://3.37.9.131:4000/api',
    timeout: 1000 * 60 * 3,
    headers: {'Content-Type': 'application/json'},
});

export const getApiClient = () => {
    if (!axios) {
        let axios = Axios.create({
            baseURL: 'http://3.37.9.131:4000/api',
            timeout: 1000 * 60 * 3,
            headers: {'Content-Type': 'application/json'},
        });
    }

    return axios;
};