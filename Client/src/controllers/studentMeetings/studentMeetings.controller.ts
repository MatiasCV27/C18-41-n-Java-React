import { StudentMeetingsService } from '@/services/studentMeetings/StudentMeetings.service';

class StudentMeetingsController {
    private studentMeetingsService: StudentMeetingsService = new StudentMeetingsService();

    constructor() {}

    async getUpcomingMeetings(username: string): Promise<any> {
        return this.studentMeetingsService.getUpcomingMeetings(username);
    }

    async getPendingMeetings(username: string): Promise<any> {
        return this.studentMeetingsService.getPendingMeetings(username);
    }

    async getMeetingHistories(username: string): Promise<any> {
        return this.studentMeetingsService.getMeetingHistories(username);
    }
}

// Exporta cada método por separado
export const getUpcomingMeetings = async (username: string): Promise<any> => {
    const controller = new StudentMeetingsController();
    return controller.getUpcomingMeetings(username);
};

export const getPendingMeetings = async (username: string): Promise<any> => {
    const controller = new StudentMeetingsController();
    return controller.getPendingMeetings(username);
};

export const getMeetingHistories = async (username: string): Promise<any> => {
    const controller = new StudentMeetingsController();
    return controller.getMeetingHistories(username);
};
