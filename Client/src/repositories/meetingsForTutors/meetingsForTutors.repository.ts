import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

export class MeetingsForTutorsRepository {
    private httpClient: HttpClient = new HttpClient(
        `${apiURL}/api/v1/meeting/tutor`
    );

    constructor() {}

    async getPendingMeetings(username: string) {
        const getAllResponse = await this.httpClient.get(
            `/pendings/${username}`
        );

        return getAllResponse.data;
    }

    async getUpcomingMeetings(username: string) {
        const getAllResponse = await this.httpClient.get(
            `/upcomings/${username}`
        );

        return getAllResponse.data;
    }

    async getMeetingHistory(username: string) {
        const getAllResponse = await this.httpClient.get(
            `/histories/${username}`
        );

        return getAllResponse.data;
    }
}
