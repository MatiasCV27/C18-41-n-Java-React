import { CreateTutorRepository } from "@/repositories/createTutor/createTutor.repository";

export class CreateTutorService {

    private createTutorRepository: CreateTutorRepository = new CreateTutorRepository();


    consstructor() {}

    async postCreateTutor() {
        return this.createTutorRepository.postCreateTutor();
    }

}