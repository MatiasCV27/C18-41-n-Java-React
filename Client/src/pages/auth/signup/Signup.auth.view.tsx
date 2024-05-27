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
import GoogleIcon from '@/components/ui/google-icon';
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
        username: string;
    }) => void;
}

const SignupView: FC<Props> = ({ form, onSubmit }) => {
    return (
        <section className='relative'>
            <h1 className="text-3xl absolute top-6 left-6 font-bold mb-2 ml-2 tracking-wide bg-transparent">
                <span className="text-blue-500">Swap</span> It Up
            </h1>
            <div className="container container-lg w-full mx-auto flex justify-center items-center min-h-screen gap-x-6">
                <div className="flex flex-col min-w-full md:min-w-[600px] lg:flex-1 items-center justify-center">
                    <div className="mb-6 w-full flex flex-col gap-4">
                        <h2 className="text-4xl font-semibold max-w-md">
                            Regístrate
                        </h2>
                        <small className="text-gray-400 text-base font-normal">
                            No sabes por donde empezar?
                        </small>
                    </div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="max-w-4xl md:min-w-[350px] w-full"
                        >
                            <div className=" flex flex-col ">
                                <div className="grid md:grid-cols-2 md:gap-x-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="md:my-3 my-2">
                                                    <div className="relative">
                                                        <div className="absolute -top-3.5 left-3">
                                                            <FormLabel className="text-gray-700 bg-background text-sm font-normal block my-1">
                                                                Correo
                                                            </FormLabel>
                                                        </div>
                                                        <FormControl>
                                                            <Input
                                                                className="rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                                required
                                                                type="email"
                                                                placeholder="email@email.com"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage className="mt-1 ml-3 text-sm font-normal" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="md:my-3 my-2">
                                                    <div className="relative">
                                                        <div className="absolute -top-3.5 left-3">
                                                            <FormLabel className="text-gray-700 bg-background text-sm font-normal block my-1">
                                                                Nombre de
                                                                usuario
                                                            </FormLabel>
                                                        </div>
                                                        <FormControl>
                                                            <Input
                                                                className="rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                                required
                                                                type="text"
                                                                placeholder="Ingresa tu nombre de usuario"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage className="mt-1 ml-3 text-sm font-normal" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-x-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="md:my-3 my-2">
                                                    <div className="relative">
                                                        <div className="absolute -top-3.5 left-3">
                                                            <FormLabel className="text-gray-700 bg-background text-sm font-normal block my-1">
                                                                Nombre
                                                            </FormLabel>
                                                        </div>
                                                        <FormControl>
                                                            <Input
                                                                className="rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                                required
                                                                type="text"
                                                                placeholder="Ingresa tu nombre"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage className="mt-1 ml-3 text-sm font-normal" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="md:my-3 my-2">
                                                    <div className="relative">
                                                        <div className="absolute -top-3.5 left-3">
                                                            <FormLabel className="text-gray-700 bg-background text-sm font-normal block my-1">
                                                                Apellido
                                                            </FormLabel>
                                                        </div>
                                                        <FormControl>
                                                            <Input
                                                                className="rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                                required
                                                                type="text"
                                                                placeholder="Ingresa tu apellido"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                    </div>
                                                    <FormMessage className="mt-1 ml-3 text-sm font-normal" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="md:my-3 my-2">
                                                <div className="relative">
                                                    <div className="absolute -top-3.5 left-3">
                                                        <FormLabel className="text-gray-700 bg-background text-sm font-normal block my-1">
                                                            Contraseña
                                                        </FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <Input
                                                            className="rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                            required
                                                            type="password"
                                                            placeholder="Ingresa tu contraseña"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage className="mt-1 ml-3 text-sm font-normal" />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="md:my-3 my-2">
                                                <div className="relative">
                                                    <div className="absolute -top-3.5 left-3">
                                                        <FormLabel className="text-gray-700 bg-background text-sm font-normal block my-1">
                                                            Confirmar contraseña
                                                        </FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <Input
                                                            className="rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                            required
                                                            type="password"
                                                            placeholder="Ingresa tu contraseña"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage className="mt-1 ml-3 text-sm font-normal" />
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
                            <p className="text-base mt-2 text-center">
                                ¿Ya tienes una cuenta? {''}
                                <Link className="text-blue-500" to="/signin">
                                    Inicia sesión
                                </Link>
                            </p>
                            <div className="flex items-center justify-center gap-4 my-5">
                                <span className="h-[2px] w-full bg-gray-200 my-1" />
                                <p className="text-gray-400 text-xs text-nowrap">
                                    O inicia sesión con:
                                </p>
                                <span className="h-[2px] w-full bg-gray-200 my-1" />
                            </div>
                            <Button
                                type="button"
                                className="w-full border-accent  text-base  h-14 bg-background text-black hover:bg-accent-foreground hover:text-white"
                                variant={'outline'}
                            >
                                <GoogleIcon />
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="flex-1 hidden min-h-[700px] rounded-3xl overflow-hidden lg:flex items-center bg-zinc-200 justify-center my-10">
                    <img
                        className="h-3/5 w-3/5 object-cover"
                        src="src/assets/signup.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default SignupView;
