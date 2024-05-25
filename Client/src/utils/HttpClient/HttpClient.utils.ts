import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class HttpClient {
    private http: AxiosInstance;
    private token: string | null = null;
    constructor(baseURL: string) {
        this.http = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    setToken(token: string) {
        this.token = token;
    }

    getAuthHeader() {
        return this.token ? { Authorization: `Bearer ${this.token}` } : {};
    }

    async get(url: string, config: AxiosRequestConfig = {}) {
        return this.http.get(url, {
            ...config,
            headers: {
                ...this.getAuthHeader(),
                ...config.headers,
            },
        });
    }
    async post(url: string, data: {}, config: AxiosRequestConfig = {}) {
        return this.http.post(url, data, {
            ...config,
            headers: {
                ...this.getAuthHeader(),
                ...config.headers,
            },
        });
    }

    async put(url: string, data: {}, config: AxiosRequestConfig = {}) {
        return this.http.put(url, data, {
            ...config,
            headers: {
                ...this.getAuthHeader(),
                ...config.headers,
            },
        });
    }

    async delete(url: string, config: AxiosRequestConfig = {}) {
        return this.http.delete(url, {
            ...config,
            headers: {
                ...this.getAuthHeader(),
                ...config.headers,
            },
        });
    }

    async patch(url: string, data: {}, config: AxiosRequestConfig = {}) {
        return this.http.patch(url, data, {
            ...config,
            headers: {
                ...this.getAuthHeader(),
                ...config.headers,
            },
        });
    }
}
