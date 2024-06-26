import { MeetingsForTutorsRepository } from '@/repositories/meetingsForTutors/meetingsForTutors.repository';

export class MeetingsForTutorsService {
    private meetingsForTutorsRepository: MeetingsForTutorsRepository =
        new MeetingsForTutorsRepository();

    constructor() {}

    async getPendingMeetings(username: string): Promise<any> {
        return await this.meetingsForTutorsRepository.getPendingMeetings(
            username
        );
    }

    async getUpcomingMeetings(username: string): Promise<any> {
        return await this.meetingsForTutorsRepository.getUpcomingMeetings(
            username
        );
    }

    async getMeetingHistory(username: string): Promise<any> {
        return await this.meetingsForTutorsRepository.getMeetingHistory(
            username
        );
    }
}
