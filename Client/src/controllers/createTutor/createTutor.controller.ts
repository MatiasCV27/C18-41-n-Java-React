import { CreateTutorService } from '@/services/createTutor/createTutor.service';

export class CreateTutorController {
    private createTutorService: CreateTutorService = new CreateTutorService();
    constructor() {}

    async postCreateTutor() {
        return this.createTutorService.postCreateTutor();
    }

}