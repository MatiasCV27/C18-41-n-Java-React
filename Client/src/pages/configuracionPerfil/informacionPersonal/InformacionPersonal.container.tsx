import * as z from 'zod';
import InformacionPersonalView from './InformacionPersonal.view';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { ProfileInfoModel } from '@/models/profileInfo.model';
import { ProfileInfoController } from '@/controllers/profileInfo/profileInfo.controller';
import { useAuthStore } from '@/stores/auth/auth.store';
import { useProfileConfigStore } from '@/stores/configuracionPerfil/perfilConfig.store';

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
    const id = useAuthStore((state) => state.user?.id);
    const userProfileInfo = useProfileConfigStore(
        (state) => state.userProfileInfo
    );
    const addNewInfo = useProfileConfigStore((state) => state.addNewInfo);

    // const [profileInfo, setProfileInfo] = useState<ProfileInfoModel>(
    //     new Object() as ProfileInfoModel
    // );

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
            aboutMe: '',
            timeZone: '',
        },
    });

    /* TODO: Este codigo se puede mejorar ya que se repite tanto en en el perfil
    de mentor como en este componente, al refactorizar llevar las funciones que
    se repiten a un solo lugar, puede ser en utils */

    //al iniciar el componente, se obtiene la informacion del perfil
    useEffect(() => {
        getProfileInfo(username);
    }, [username]);

    // llena el formulario con la informacion del perfil

    /*FIXME: No funciona correctamente despues de hacer submit hace 
    hace multiples render cuando se modifican los inputs
    */
    useEffect(() => {
        form.reset(userProfileInfo);
    }, [userProfileInfo]);

    //actualiza la informacion del perfil con los datos del formulario

    const updateProfileInformation = useCallback(
        async (id: string, values: FormSchemaType) => {
            console.log('ID:', id);
            if (!id) {
                console.log('no hay id');
                return;
            }
            addNewInfo(values);

            const response = await profileInfoController.updateProfileInfo(id, {
                ...userProfileInfo,
                ...values,
            });

            // console.log('response:', response);
            return response;
        },
        []
    );

    const getProfileInfo = useCallback(
        async (username?: string) => {
            if (!username) {
                console.log('no hay username');
                return;
            }
            const response = await profileInfoController.getProfileInfo(
                username
            );
            const {
                name,
                lastname,
                gender,
                country,
                lenguage,
                industry,
                aboutMe,
                timeZone,
                skills,
                experience,
                email,
                link_linkedin,
                link_portfolio,
                image,
            } = response as ProfileInfoModel;

            console.log('response:', response);
            //Esto previene algun comportamiento inesperado si algun valor es undefined o null

            const newProfileInfo: ProfileInfoModel = {
                name: name ?? '',
                lastname: lastname ?? '',
                gender: gender ?? '',
                country: country ?? '',
                lenguage: lenguage ?? '',
                industry: industry ?? '',
                aboutMe: aboutMe ?? '',
                timeZone: timeZone ?? '',
                skills: skills ?? '',
                experience: experience ?? '',
                email: email ?? '',
                link_linkedin: link_linkedin ?? '',
                link_portfolio: link_portfolio ?? '',
                image: image ?? [],
            };
            addNewInfo(newProfileInfo);

            form.reset(newProfileInfo);
        },
        [username]
    );


    console.log('profileInfo', userProfileInfo);

    const handleToggleInput = (input: string) => {
        setInputStates((prevInputStates) => ({
            ...prevInputStates,
            [input]: !prevInputStates[input],
        }));
    };

    async function onSubmit(values: FormSchemaType) {
        try {
            if (!id) {
                console.log('no hay id');
                return;
            }
            setInputStates((prevInputStates) => ({
                ...prevInputStates,
                input1: true,
                input2: true,
                input3: true,
                input4: true,
                input5: true,
                input6: true,
                input7: true,
                input8: true,
            }));
            await updateProfileInformation(id, values);

            form.reset(values);
            console.log('desde OnSubmit values:', values);
        } catch (error) {
            console.error(error);
        }
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
