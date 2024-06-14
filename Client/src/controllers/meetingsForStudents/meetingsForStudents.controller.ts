import { MeetingRequestDto } from '@/dtos/meetingRequest.dto';
import { MeetingsForStudentsService } from '@/services/meetingsForStudents/meetingsForStudents.service';

export class MeetingsForStudentesController {
    private meetingsForStudentesService: MeetingsForStudentsService =
        new MeetingsForStudentsService();

    constructor() {}

    async sendMeetingRequest(
        meetingRequest: MeetingRequestDto,
        idTutor: string
    ): Promise<any> {
        return await this.meetingsForStudentesService.sendMeetingRequest(
            meetingRequest,
            idTutor
        );
    }
}
