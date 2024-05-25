import { SubmitHandler, useForm } from 'react-hook-form';
import SignupView from './Signup.auth.view';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AuthController } from '@/controllers/auth/auth.controller';
import { useNavigate } from 'react-router-dom';

const authController = new AuthController();

const SignupContainer = () => {
    const navigate = useNavigate();
    const FormSchema = z.object({
        email: z.string().email(),
        name: z.string().min(2).max(100),
        lastName: z.string().min(2),
        password: z.string(),
        confirmPassword: z.string(),
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
        },
    });

    const handleSignup: SubmitHandler<FormSchemaType> = async (data) => {
        const { email, name, lastName, password } = data;
        const signnupDto = {
            email,
            name,
            lastName,
            password,
        };

        try {
            const response = await authController.signUp(signnupDto);
            if (response.data.status) {
                console.log(`Usuario creado exitosamente ${email}`);
                navigate('/signin');
            } else {
                console.log(`Error al crear el usuario ${email}`);
            }
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
