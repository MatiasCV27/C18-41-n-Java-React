import { ExplorerController } from '@/controllers/explorar/explorer.controller';

const explorerController = new ExplorerController();

export const getAllTutors = async () => {
    const response = await explorerController.getTutors();
    return response;
};
