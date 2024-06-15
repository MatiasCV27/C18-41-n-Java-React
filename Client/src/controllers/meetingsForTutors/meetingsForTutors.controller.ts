import { MeetingsForTutorsService } from '@/services/meetingsForTutors/meetingsForTutors.service';

export class MeetingsForTutorsController {
    private meetingsForTutorsService: MeetingsForTutorsService =
        new MeetingsForTutorsService();

    constructor() {}

    async getPendingMeetings(username: string): Promise<any> {
        return await this.meetingsForTutorsService.getPendingMeetings(username);
    }

    async getUpcomingMeetings(username: string): Promise<any> {
        return await this.meetingsForTutorsService.getUpcomingMeetings(
            username
        );
    }

    async getMeetingHistory(username: string): Promise<any> {
        return await this.meetingsForTutorsService.getMeetingHistory(username);
    }
}
