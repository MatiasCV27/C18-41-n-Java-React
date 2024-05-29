import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from 'axios';
import { useAuthStore } from '@/stores/auth/auth.store';

export default class HttpClient {
    private http: AxiosInstance;

    constructor(baseURL: string) {
        this.http = axios.create({
            baseURL,
        });

        this.addTokenToRequestHeader();
    }

    private addTokenToRequestHeader() {
        this.http.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const token = useAuthStore.getState().token;
                console.log(token);

                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }

                return config;
            }
        );
    }
    async get(url: string, config: AxiosRequestConfig = {}) {
        return this.http.get(url, {
            ...config,
        });
    }
    async post(url: string, data: {}, config: AxiosRequestConfig = {}) {
        return this.http.post(url, data, {
            ...config,
        });
    }

    async put(url: string, data: {}, config: AxiosRequestConfig = {}) {
        return this.http.put(url, data, {
            ...config,
        });
    }

    async delete(url: string, config: AxiosRequestConfig = {}) {
        return this.http.delete(url, {
            ...config,
        });
    }

    async patch(url: string, data: {}, config: AxiosRequestConfig = {}) {
        return this.http.patch(url, data, {
            ...config,
        });
    }
}
