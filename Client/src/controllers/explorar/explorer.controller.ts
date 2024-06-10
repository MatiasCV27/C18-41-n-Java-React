import { ExplorerService } from '@/services/explorar/explorer.service';

export class ExplorerController {
    private explorerService: ExplorerService = new ExplorerService();

    constructor() {}

    async getTutors(): Promise<any> {
        return await this.explorerService.getTutors();
    }

    async getTutorsByFilter(filter: any): Promise<any> {
        return await this.explorerService.getTutorsByFilter(filter);
    }
}
