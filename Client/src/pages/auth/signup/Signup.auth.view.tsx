import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from '@/components/ui';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    form: any;
    onSubmit: (data: {
        email: string;
        name: string;
        lastName: string;
        password: string;
        confirmPassword: string;
    }) => void;
}

const SignupView: FC<Props> = ({ form, onSubmit }) => {
    return (
        <section>
            <div className="container container-lg w-full mx-auto flex justify-center items-center min-h-screen">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="max-w-xl md:min-w-[350px] w-full"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="md:my-5 my-3">
                                        <div className="relative">
                                            <div className="absolute -top-3.5 left-3">
                                                <FormLabel className="text-gray-700 text-sm font-medium block my-1">
                                                    Email
                                                </FormLabel>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    className="rounded-xl h-14 text-base font-medium"
                                                    required
                                                    type="email"
                                                    placeholder="email@email.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="md:my-5 my-3">
                                            <div className="relative">
                                                <div className="absolute -top-3.5 left-3">
                                                    <FormLabel className="text-gray-700 text-sm font-medium block my-1">
                                                        Nombre
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        className="rounded-xl h-14 text-base font-medium"
                                                        required
                                                        type="text"
                                                        placeholder="Ingresa tu nombre"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="md:my-5 my-3">
                                            <div className="relative">
                                                <div className="absolute -top-3.5 left-3">
                                                    <FormLabel className="text-gray-700 text-sm font-medium block my-1">
                                                        Apellido
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        className="rounded-xl h-14 text-base font-medium"
                                                        required
                                                        type="text"
                                                        placeholder="Ingresa tu apellido"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="md:my-5 my-3">
                                            <div className="relative">
                                                <div className="absolute -top-3.5 left-3">
                                                    <FormLabel className="text-gray-700 text-sm font-medium block my-1">
                                                        Contraseña
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        className="rounded-xl h-14 text-base font-medium"
                                                        required
                                                        type="password"
                                                        placeholder="Ingresa tu contraseña"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="md:my-5 my-3">
                                            <div className="relative">
                                                <div className="absolute -top-3.5 left-3">
                                                    <FormLabel className="text-gray-700 text-sm font-medium block my-1">
                                                        Confirmar contraseña
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <Input
                                                        className="rounded-xl h-14 text-base font-medium"   
                                                        required
                                                        type="password"
                                                        placeholder="Ingresa tu contraseña"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="default"
                            className="w-full mt-4 drop-shadow-lg rounded-xl h-16 bg-accent text-base text-black hover:bg-accent-foreground hover:text-white"
                        >
                            Registrarse
                        </Button>
                        <div className="flex items-center justify-center gap-4 my-5">
                            <span className="h-[2px] w-full bg-gray-200 my-1" />
                            <p className="text-gray-400 text-xs">O</p>
                            <span className="h-[2px] w-full bg-gray-200 my-1" />
                        </div>
                        <Button
                            type="button"
                            className="w-full"
                            variant={'outline'}
                        >
                            Continua con Google
                        </Button>
                        <p className="text-xs mt-10 text-center">
                            Ya tienes una cuenta?{' '}
                            <Link className="text-blue-500" to="/signin">
                                Inicia Sesion
                            </Link>
                        </p>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default SignupView;
