import { FC, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { FormSchemaType } from './InformacionPersonal.container';
import TimeZoneSelectContainer from '@/components/TimeZoneSelect/TimeZoneSelect.container';

interface Props {
    form: any;
    onSubmit: (data: FormSchemaType) => void;
}

const InformacionPersonalView: FC<Props> = ({ form, onSubmit }) => {
    const [inputStates, setInputStates] = useState<{ [key: string]: boolean }>({
        input1: true,
        input2: true,
        input3: true,
    });

    const handleToggleInput = (input: string) => {
        setInputStates((prevInputStates) => ({
            ...prevInputStates,
            [input]: !prevInputStates[input],
        }));
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 my-4"
                >
                    <div className="flex flex-col gap-y-7">
                        <div className="flex justify-start items-center gap-x-5 w-full">
                            <Avatar className="h-44 w-44 border-[2.2px] border-white shadow-md cursor-pointer">
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
                                                            className="disabled:border-0 disabeled:tex-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-gray-400"
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
                                                            className="disabled:border-0 disabeled:tex-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-gray-400"
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
                                                        inputStates.input2
                                                    }
                                                    className="disabled:border-0 disabeled:tex-zinc-800 disabled:bg-background  rounded border px-1 text-gray-700 border-gray-400 h-10 text-base font-medium placeholder:text-gray-400"
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
                            <TimeZoneSelectContainer selectIsActive={inputStates.input3}/>
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input3')}
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
