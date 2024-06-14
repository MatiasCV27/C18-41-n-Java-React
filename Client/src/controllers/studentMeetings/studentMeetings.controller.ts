import { StudentMeetingsService } from '@/services/studentMeetings/StudentMeetings.service';

class StudentMeetingsController {
    private studentMeetingsService: StudentMeetingsService;

    constructor() {
        this.studentMeetingsService = new StudentMeetingsService();
    }

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

// Creamos una única instancia del controlador
const controller = new StudentMeetingsController();

// Exportamos cada método utilizando la instancia única del controlador
export const getUpcomingMeetings = async (username: string): Promise<any> => {
    return controller.getUpcomingMeetings(username);
};

export const getPendingMeetings = async (username: string): Promise<any> => {
    return controller.getPendingMeetings(username);
};

export const getMeetingHistories = async (username: string): Promise<any> => {
    return controller.getMeetingHistories(username);
};
