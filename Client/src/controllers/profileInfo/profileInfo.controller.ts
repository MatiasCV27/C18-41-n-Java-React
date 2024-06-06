import { ProfileInfoModel } from '@/models/profileInfo.model';
import { ProfileInfoService } from '@/services/profileInfo/profileInfo.service';

export class ProfileInfoController {
    private profileInfoService: ProfileInfoService = new ProfileInfoService();
    constructor() {}

    async getProfileInfo(username: string): Promise<ProfileInfoModel> {
        return this.profileInfoService.getProfileInfo(username);
    }
}
