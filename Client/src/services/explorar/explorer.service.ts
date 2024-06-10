import { ExplorerRepository } from '@/repositories/explorar/explorer.repository';

export class ExplorerService {
    private explorerRepository: ExplorerRepository = new ExplorerRepository();

    constructor() {}

    async getTutors(): Promise<any> {
        return await this.explorerRepository.getTutors();
    }

    async getTutorsByFilter(filter: any): Promise<any> {
        return await this.explorerRepository.getTutorsByFilter(filter);
    }
}
