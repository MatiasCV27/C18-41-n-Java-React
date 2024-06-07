import { ProfilePersonalInformationDto } from '@/dtos/profilePersonalInformation.dto';
import { ProfileInfoModel } from '@/models/profileInfo.model';
import { ProfileInfoService } from '@/services/profileInfo/profileInfo.service';

export class ProfileInfoController {
    private profileInfoService: ProfileInfoService = new ProfileInfoService();
    constructor() {}

    async getProfileInfo(username: string): Promise<ProfileInfoModel> {
        return this.profileInfoService.getProfileInfo(username);
    }

    async updateProfileInfo(
        id: string,
        profileInfo: ProfilePersonalInformationDto
    ): Promise<ProfileInfoModel> {
        return this.profileInfoService.updateProfileInfo(id, profileInfo);
    }
}
