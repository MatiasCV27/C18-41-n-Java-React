import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormSchemaType } from './PerfilMentor.container';
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

interface Props {
    form: UseFormReturn<FormSchemaType>;
    onSubmit: (data: FormSchemaType) => void;
    handleToggleInput: (input: string) => void;
    inputStates: { [input: string]: boolean };
}

export const PerfilMentorView: FC<Props> = ({
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
                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="habilities"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Habilidades
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="Habilidades"
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
                            <Button
                                type="button"
                                variant={'ghost'}
                                onClick={() => handleToggleInput('input1')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>

                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="experience"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Experiencia
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="Experiencia"
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
                                name="linkedin"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Perfil de LinkedIn
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="N/A"
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
                                name="portfolio"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Portfolio/Web Link
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="N/A"
                                                    disabled={
                                                        inputStates.input4
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
                                onClick={() => handleToggleInput('input4')}
                                className="text-zinc-600 text-base font-medium"
                            >
                                Editar
                            </Button>
                        </div>
                        <div className="flex justify-between items-center w-full border-b-[1px] border-b-zinc-200">
                            <FormField
                                control={form.control}
                                name="other"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className=" my-2 ">
                                            <div className="  px-1 ">
                                                <FormLabel className="text-gray-700 text-base font-bold">
                                                    Otros enlaces
                                                </FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="youtube/@rodrigo-perez"
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
                    </div>

                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </>
    );
};
