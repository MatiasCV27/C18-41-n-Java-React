import { SubmitHandler, useForm } from 'react-hook-form';
import SignupView from './Signup.auth.view';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AuthController } from '@/controllers/auth/auth.controller';
import { useNavigate } from 'react-router-dom';

const authController = new AuthController();

const SignupContainer = () => {
    const navigate = useNavigate();
    const FormSchema = z
        .object({
            email: z.string().email({ message: 'Email invalido' }),
            username: z
                .string()
                .min(2, {
                    message:
                        'El nombre de usuario debe tener al menos 2 caracteres',
                })
                .max(25, {
                    message:
                        'El nombre de usuario debe tener un maximo de 25 caracteres',
                }),
            name: z
                .string()
                .min(2, {
                    message: 'El nombre debe tener al menos 2 caracteres',
                })
                .max(60, {
                    message: 'El nombre debe tener un maximo de 60 caracteres',
                }),
            lastName: z
                .string()
                .min(2, {
                    message: 'El apellido debe tener al menos 2 caracteres',
                })
                .max(60, {
                    message:
                        'El apellido debe tener un maximo de 60 caracteres',
                }),
            password: z.string().min(8, {
                message: 'La contraseña debe tener al menos 8 caracteres',
            }),
            confirmPassword: z.string(),
            terms: z.boolean(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Las contraseñas no coinciden',
            path: ['confirmPassword'],
        });

    type FormSchemaType = z.infer<typeof FormSchema>;

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            name: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            username: '',
            terms: false,
        },
    });

    const handleSignup: SubmitHandler<FormSchemaType> = async (data) => {
        const { email, name, lastName, password, username, terms } = data;
        const signnupDto = {
            email,
            name,
            lastName,
            password,
            username,
            terms,
        };

        try {
            console.log(signnupDto);
            // const response = await authController.signUp(signnupDto);
            // if (response.data.status) {
            //     console.log(`Usuario creado exitosamente ${username}`);
            //     navigate('/signin');
            // } else {
            //     console.log(`Error al crear el usuario ${username}`);
            // }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <SignupView form={form} onSubmit={handleSignup} />
        </>
    );
};

export default SignupContainer;
