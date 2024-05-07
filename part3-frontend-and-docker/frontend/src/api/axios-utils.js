import axios from 'axios';

const client = axios.create({baseURL: "http://localhost:8081", timeout: 1000 * 60 * 2});

const request = async ({...options}) => {
    return client(options);
};

export default request;
