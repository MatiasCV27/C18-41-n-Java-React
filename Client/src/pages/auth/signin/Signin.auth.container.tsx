import { z } from 'zod';
import SigninView from './Signin.auth.view';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SigninContainer = () => {
    const FormSchema = z.object({
        username: z.string().min( 2, { message: 'Debe ingresar un usuario' }),
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
    };

    return <SigninView onSubmit={handleSignin} form={form} />;
};

export default SigninContainer;
