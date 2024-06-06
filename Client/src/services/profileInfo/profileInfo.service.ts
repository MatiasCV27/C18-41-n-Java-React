import { ProfileInfoModel } from "@/models/profileInfo.model";
import { ProfileInfoRepository } from "@/repositories/profileInfo/profileInfo.repository";

export class ProfileInfoService {

    private profileInfoRepository: ProfileInfoRepository = new ProfileInfoRepository()


    consstructor() {}

    async getProfileInfo(username: string): Promise<ProfileInfoModel> {
        return this.profileInfoRepository.getProfileInfo(username);
}

}