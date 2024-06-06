import { FC } from 'react';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { FormSchemaType } from './InformacionPersonal.container';
import TimeZoneSelectContainer from '@/components/TimeZoneSelect/TimeZoneSelect.container';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { ProfileInfoModel } from '@/models/profileInfo.model';

interface Props {
    form: UseFormReturn<FormSchemaType>;
    onSubmit: (data: FormSchemaType) => void;
    handleToggleInput: (input: string) => void;
    inputStates: { [input: string]: boolean };
    
}

const InformacionPersonalView: FC<Props> = ({
    form,
    onSubmit,
    handleToggleInput,
    inputStates,
    
}) => {
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 my-4"
                >
                    <div className="flex flex-col gap-y-7">
                        <div className="flex justify-start items-center gap-x-5 w-full">
                            <Avatar className="h-40 w-40 border-[2.2px] border-white shadow-md cursor-pointer">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="Avatar de usuario"
                                />
                                <AvatarFallback>Usuario</AvatarFallback>
                            </Avatar>

                            <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                                <div className="flex flex-col md:gap-x-2">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className=" my-2 ">
                                                    <div className="  px-1 ">
                                                        <FormLabel className="text-gray-700 text-base font-bold">
                                                            Nombre
                                                        </FormLabel>
                                                    </div>

                                                    <FormControl>
                                                        <Input
                                                            placeholder="Nombre"
                                                            disabled={
                                                                inputStates.input1
                                                            }
                                                            className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className=" my-2 ">
                                                    <div className="  px-1 ">
                                                        <FormLabel className="text-gray-700 text-base font-bold">
                                                            Apellido
                                                        </FormLabel>
                                                    </div>

                                                    <FormControl>
                                                        <Input
                                                            placeholder="Apellido"
                                                            disabled={
                                                                inputStates.input1
                                                            }
                                                            className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button
                                    type="button"
                                    variant={'ghost'}
                                    onClick={() => handleToggleInput('input1')}
                                    className="text-zinc-600 text-base font-medium"
                                >
                                    Editar
                                </Button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Género
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="Género"
                                                    disabled={
                                                        inputStates.input2
                                                    }
                                                    className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input2')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>

                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    País
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="País"
                                                    disabled={
                                                        inputStates.input3
                                                    }
                                                    className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input3')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>

                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="timeZone"
                                render={({ field }) => (
                                    <FormItem className="py-2">
                                        <FormLabel className="text-gray-700 text-base font-bold px-1">
                                            Zona horaria
                                        </FormLabel>
                                        {/* <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <TimeZoneSelectContainer
                                                selectIsActive={
                                                    inputStates.input4
                                                }
                                            />
                                        </Select> */}
                                         <FormControl>
                                                <Input
                                                    placeholder="zona"
                                                    disabled={
                                                        inputStates.input4
                                                    }
                                                    className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                    {...field}
                                                />
                                            </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input4')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="lenguage"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Idiomas
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="Idiomas"
                                                    disabled={
                                                        inputStates.input5
                                                    }
                                                    className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input5')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="industry"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Industria
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="Industria"
                                                    disabled={
                                                        inputStates.input6
                                                    }
                                                    className="disabled:border-0 disabled:placeholder:text-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-zinc-300"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input6')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200 gap-x-3">
                            <FormField
                                control={form.control}
                                name="aboutMe"
                                render={({ field }) => (
                                    <FormItem className="my-2 w-full">
                                        <FormLabel className="text-gray-700 text-base font-bold px-1">
                                            Acerca de ti
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Breve descripcion de ti"
                                                disabled={inputStates.input7}
                                                className="resize-none disabled:border-0 disabled:placeholder:text-zinc-800 h-32 disabled:bg-background rounded border px-1 text-gray-700 border-gray-400  text-base font-medium placeholder:text-zinc-300"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input7')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>
                    </div>

                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </>
    );
};

export default InformacionPersonalView;
