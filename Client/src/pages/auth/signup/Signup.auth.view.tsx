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
                        className="max-w-md md:min-w-[350px] w-full"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="md:my-5 my-3">
                                        <FormLabel className="text-gray-700 text-xs font-semibold block my-1">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                required
                                                type="email"
                                                placeholder="email@email.com"
                                                {...field}
                                            />
                                        </FormControl>
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
                                            <FormLabel className="text-gray-700 text-xs font-semibold block my-1">
                                                Nombre
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    required
                                                    type="text"
                                                    placeholder="Ingresa tu nombre"
                                                    {...field}
                                                />
                                            </FormControl>
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
                                            <FormLabel className="text-gray-700 text-xs font-semibold block my-1">
                                                Apellido
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    required
                                                    type="text"
                                                    placeholder="Ingresa tu apellido"
                                                    {...field}
                                                />
                                            </FormControl>
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
                                            <FormLabel className="text-gray-700 text-xs font-semibold block my-1">
                                                Contraseña
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    required
                                                    type="password"
                                                    placeholder="Ingresa tu contraseña"
                                                    {...field}
                                                />
                                            </FormControl>
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
                                            <FormLabel className="text-gray-700 text-xs font-semibold block my-1">
                                                Confirmar contraseña
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    required
                                                    type="password"
                                                    placeholder="Ingresa tu contraseña"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            variant="default"
                            className="w-full"
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
