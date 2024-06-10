import { ExplorerController } from '@/controllers/explorar/explorer.controller';

interface Filter {
    skills?: string;
    industry?: string;
}

const explorerController = new ExplorerController();
export const getTutorsByFilter = async (filter: Filter) => {
    const response = await explorerController.getTutorsByFilter(filter);

    console.log('desde filter', { response });
};
