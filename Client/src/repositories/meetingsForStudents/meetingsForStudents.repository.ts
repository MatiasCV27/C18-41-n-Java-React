import { MeetingRequestDto } from '@/dtos/meetingRequest.dto';
import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

export class MeetingsForStudentsRepository {
    private httpClient: HttpClient = new HttpClient(
        `${apiURL}/api/v1/meeting`
    );

    constructor() {}

    async sendMeetingRequest(
        meetingRequest: MeetingRequestDto,
        idTutor: string
    ) {
        const response = await this.httpClient.post(
            `/student/send-request/${idTutor}`,
            meetingRequest
        );
        return response.data;
    }
}
