import { useForm } from 'react-hook-form';
import SignupView from './Signup.auth.view';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const SignupContainer = () => {
    const FormSchema = z.object({
        email: z.string().email(),
        name: z.string().min(2).max(100),
        lastName: z.string().min(2),
        password: z.string(),
        confirmPassword: z.string(),
    });

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

    const handleSignup = (data: {
        email: string;
        name: string;
        lastName: string;
        password: string;
        confirmPassword: string;
    }) => {
        console.log(data);
    };

    return (
        <>
            <SignupView form={form} onSubmit={handleSignup} />
        </>
    );
};

export default SignupContainer;
