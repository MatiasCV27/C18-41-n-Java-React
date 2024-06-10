import HttpClient from '@/utils/HttpClient/HttpClient.utils';
import queryString from 'query-string';

const apiURL = import.meta.env.VITE_API_URL;

export class ExplorerRepository {
    private httpClient: HttpClient = new HttpClient(`${apiURL}/api/v1/tutor/`);

    constructor() {}

    async getTutors(): Promise<any> {
        const getAllResponse = await this.httpClient.get('tutor-filter');
        return getAllResponse.data;
    }

    async getTutorsByFilter(filter: any): Promise<any> {
        const parsed = queryString.stringify(filter);

        const getAllResponse = await this.httpClient.get(
            `tutor-filter?${parsed}`
        );
        return getAllResponse.data;
    }
}
