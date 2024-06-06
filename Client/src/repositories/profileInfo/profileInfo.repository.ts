import { ProfileInfoModel } from '@/models/profileInfo.model';
import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

export class ProfileInfoRepository {
    private httpClient: HttpClient = new HttpClient(`${apiURL}/api/v1/profile`);

    constructor() {}

    async getProfileInfo(username: string): Promise<ProfileInfoModel> {
        
        const getAllResponse = await this.httpClient.get(`/${username}`);
        return getAllResponse.data;
    }
}
