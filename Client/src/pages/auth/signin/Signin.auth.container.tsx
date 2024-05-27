import { z } from 'zod';
import SigninView from './Signin.auth.view';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SigninContainer = () => {
    const FormSchema = z.object({
        email: z.string().email({ message: 'Email invalido' }),
        password: z.string().min(8, {
            message: 'La contraseña debe tener al menos 8 caracteres',
        }),
    });

    type FormSchemaType = z.infer<typeof FormSchema>;
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const handleSignin: SubmitHandler<FormSchemaType> = async (data) => {
        const { email, password } = data;
        console.log(email, password);
    };

    return <SigninView onSubmit={handleSignin} form={form} />;
};

export default SigninContainer;
