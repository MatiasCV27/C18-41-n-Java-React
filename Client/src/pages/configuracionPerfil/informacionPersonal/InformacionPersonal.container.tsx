import * as z from 'zod';
import InformacionPersonalView from './InformacionPersonal.view';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { ProfileInfoModel } from '@/models/profileInfo.model';
import { ProfileInfoController } from '@/controllers/profileInfo/profileInfo.controller';
import { useAuthStore } from '@/stores/auth/auth.store';

const FormSchema = z.object({
    name: z.string(),
    lastname: z.string(),
    gender: z.string(),
    country: z.string(),
    lenguage: z.string(),
    industry: z.string(),
    aboutMe: z.string(),
    timeZone: z.string(),
});
type FormSchemaType = z.infer<typeof FormSchema>;
const InformacionPersonalContainer = () => {
    const profileInfoController = new ProfileInfoController();

    const username = useAuthStore((state) => state.user?.username);

    const [profileInfo, setProfileInfo] = useState<ProfileInfoModel>(
        new Object() as ProfileInfoModel
    );
    const [inputStates, setInputStates] = useState<{ [key: string]: boolean }>({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
        input5: true,
        input6: true,
        input7: true,
        input8: true,
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            lastname: '',
            gender: '',
            country: '',
            lenguage: '',
            industry: '',
            aboutMe:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio aliquam nostrum corrupti rerum consequuntur repudiandae nemo, officiis tempore nobis veniam cupiditate vitae perspiciatis similique. Eligendi architecto iste incidunt earum.',
            timeZone: '',
        },
    });

    useEffect(() => {
        getProfileInfo(username);
    }, []);

    useEffect(() => {
        form.reset(profileInfo);
    }, [profileInfo]);

    //TODO: corregir porque lanza error cuando llegan valores null de la api, puede ser en el getProfileInfo
   

    const getProfileInfo = async (username?: string) => {
        if (!username) {
            console.log('no hay username');
            return;
        }
        const response = await profileInfoController.getProfileInfo(username);
        console.log('getProfile', response);
        setProfileInfo(response);
    };

    console.log('profileInfo', profileInfo);

    const handleToggleInput = (input: string) => {
        setInputStates((prevInputStates) => ({
            ...prevInputStates,
            [input]: !prevInputStates[input],
        }));
    };

    function onSubmit(values: FormSchemaType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <>
            <InformacionPersonalView
                form={form}
                onSubmit={onSubmit}
                inputStates={inputStates}
                handleToggleInput={handleToggleInput}
                
            />
        </>
    );
};

export type { FormSchemaType };
export default InformacionPersonalContainer;
