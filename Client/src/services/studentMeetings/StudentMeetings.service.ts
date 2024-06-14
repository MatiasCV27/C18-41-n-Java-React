import { StudentMeetingsRepository } from '@/repositories/StudentMeetings/StudentMeetings.repository';

export class StudentMeetingsService {

    private studentMeetingsRepository: StudentMeetingsRepository = new StudentMeetingsRepository();

    constructor() {}

    async getUpcomingMeetings(username: string): Promise<any> {
        try {
            return await this.studentMeetingsRepository.getUpcomingMeetings(username);
        } catch (error) {
            console.error('Error al obtener las reuniones próximas:', error);
            return null;
        }
    }

    async getPendingMeetings(username: string): Promise<any> {
        try {
            return await this.studentMeetingsRepository.getPendingMeetings(username);
        } catch (error) {
            console.error('Error al obtener las reuniones pendientes:', error);
            return null;
        }
    }

    async getMeetingHistories(username: string): Promise<any> {
        try {
            return await this.studentMeetingsRepository.getMeetingHistories(username);
        } catch (error) {
            console.error('Error al obtener el historial de reuniones:', error);
            return null;
        }
    }
}
