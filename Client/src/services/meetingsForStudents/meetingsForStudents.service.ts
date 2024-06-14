import { MeetingRequestDto } from '@/dtos/meetingRequest.dto';
import { MeetingsForStudentsRepository } from '@/repositories/meetingsForStudents/meetingsForStudents.repository';

export class MeetingsForStudentsService {
    private meetingsForStudentsRepository: MeetingsForStudentsRepository =
        new MeetingsForStudentsRepository();

    constructor() {}

    async sendMeetingRequest(
        meetingRequest: MeetingRequestDto,
        idTutor: string
    ): Promise<any> {
        return await this.meetingsForStudentsRepository.sendMeetingRequest(
            meetingRequest,
            idTutor
        );
    }
}
