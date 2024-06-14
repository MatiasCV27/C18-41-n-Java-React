import { MeetingsForTutorsService } from '@/services/meetingsForTutors/meetingsForTutors.service';

export class MeetingsForTutorsController {
    private meetingsForTutorsService: MeetingsForTutorsService =
        new MeetingsForTutorsService();

    constructor() {}

    async getPendingMeetings(username: string): Promise<any> {
        return await this.meetingsForTutorsService.getPendingMeetings(username);
    }
}
