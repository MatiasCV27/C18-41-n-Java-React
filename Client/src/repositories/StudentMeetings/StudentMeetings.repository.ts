import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

export class StudentMeetingsRepository {
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient(apiURL);
    }

    async getUpcomingMeetings(username: string): Promise<any> {
        try {
            const getAllResponse = await this.httpClient.get(`/api/v1/meeting/student/upcomings/${username}`);
            console.log(getAllResponse.data);
            return getAllResponse.data;
        } catch (error) {
            console.error('Error al obtener las proximas reuniones', error);
            throw error;
        }
    }

    async getPendingMeetings(username: string): Promise<any> {
        try {
            const getAllResponse = await this.httpClient.get(`/api/v1/meeting/student/pendings/${username}`);
            console.log(getAllResponse.data);
            return getAllResponse.data;
        } catch (error) {
            console.error('Error al obtener las reuniones pendientes:', error);
            return null;
        }
    }

    async getMeetingHistories(username: string): Promise<any> {
        try {
            const getAllResponse = await this.httpClient.get(`/api/v1/meeting/student/histories/${username}`);
            console.log(getAllResponse.data);
            return getAllResponse.data;
        } catch (error) {
            console.error('Error al obtener el historial de reuniones:', error);
            return null;
        }
    }
}
