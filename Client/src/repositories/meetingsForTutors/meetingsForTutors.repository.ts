import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

export class MeetingsForTutorsRepository {
    private httpClient: HttpClient = new HttpClient(
        `${apiURL}/api/v1/meeting/tutor`
    );

    constructor() {}

    async getPendingMeetings(username: string) {
        const getAllResponse = await this.httpClient.get(
            `/pending/${username}`
        );

        return getAllResponse.data;
    }
}
