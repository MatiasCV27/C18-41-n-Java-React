import { ProfileInfoModel } from '@/models/profileInfo.model';
import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useAuthStore } from '../auth/auth.store';
import { ProfileInfoController } from '@/controllers/profileInfo/profileInfo.controller';


const profileInfoController = new ProfileInfoController

const profileInfoFromApi = async () => {
    const username = useAuthStore.getState().user?.username;
    if (!username) {
        console.log('no hay username');
        return;
    }
    const profileInfo = await profileInfoController.getProfileInfo(username);
    return profileInfo;
}


interface profileConfigState {
    userProfileInfo: ProfileInfoModel;
    addNewInfo: (newInfo: ProfileInfoModel) => void;
}

const storeApi: StateCreator<profileConfigState> = (set) => ({
    userProfileInfo: {
        ...profileInfoFromApi()
    },

    addNewInfo: (newInfo: ProfileInfoModel) => {
        console.log(newInfo);
        set((state) => ({
            userProfileInfo: { ...state.userProfileInfo, ...newInfo },
        }));
    },
});

export const useProfileConfigStore = create<profileConfigState>()(
    devtools(storeApi , { name: 'profile-config-storage' })
);
