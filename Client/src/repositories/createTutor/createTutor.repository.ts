import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

export class CreateTutorRepository {
    private httpClient: HttpClient = new HttpClient(`${apiURL}/api/v1/tutor`);

    constructor() {}

    async postCreateTutor() {
        const postCreateResponse = await this.httpClient.post(`/create`, '');
        return postCreateResponse.data;
    }

}
