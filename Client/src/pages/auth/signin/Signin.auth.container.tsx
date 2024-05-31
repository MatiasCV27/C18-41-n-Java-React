import { z } from 'zod';
import SigninView from './Signin.auth.view';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/stores/auth/auth.store';
import { useNavigate } from 'react-router-dom';

const SigninContainer = () => {
    const navigate = useNavigate();
    const signinUser = useAuthStore((state) => state.signinUser);

    const FormSchema = z.object({
        username: z.string().min(2, { message: 'Debe ingresar un usuario' }),
        password: z.string().min(8, {
            message: 'La contraseña debe tener al menos 8 caracteres',
        }),
    });

    type FormSchemaType = z.infer<typeof FormSchema>;
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const handleSignin: SubmitHandler<FormSchemaType> = async (data) => {
        const { username, password } = data;

        console.log(username, password);

        try {
            await signinUser(username, password);
            navigate('/inicio');
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoogleSignin = async () => {
        console.log('Signin with Google');

        // async function simulateGoogleAuthentication() {
        //     // Simulamos una conexión a la API de autenticación de Google
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             // Simulamos una respuesta exitosa de la API
        //             const accessToken = '1234567890';
        //             const response = { accessToken: accessToken };
        //             console.log(
        //                 'Respuesta exitosa de la API de autenticación de Google'
        //             );
        //             resolve(response);
        //         }, 3000);
        //     });
        // }

        // try {
        //     const credentials = await simulateGoogleAuthentication();
        //     console.log('Autenticación de Google exitosa', credentials);
        // } catch (error) {
        //     console.error('Error en la autenticación de Google:', error);
        // }
    };

    return (
        <SigninView
            onSubmit={handleSignin}
            form={form}
            onGoogleSignin={handleGoogleSignin}
        />
    );
};

export default SigninContainer;
