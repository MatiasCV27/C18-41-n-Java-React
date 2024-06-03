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

interface Props {
    form: any;
    onSubmit: (data: { name: string; lastname: string }) => void;
}

const InformacionPersonalView: FC<Props> = ({ form, onSubmit }) => {
    const [inputStates, setInputStates] = useState<{ [key: string]: boolean }>({
        input1: false,
        input2: false,
        input3: false,
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
                    className="space-y-8"
                >
                    <div className="flex justify-between items-center my-4">
                        <div className="grid md:grid-cols-2 md:gap-x-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="relative ">
                                            <div className="absolute -top-3.5 left-3">
                                                <FormLabel>Nombre</FormLabel>
                                            </div>

                                            <FormControl>
                                                <Input
                                                    placeholder="Nombre"
                                                    disabled={
                                                        inputStates.input1
                                                    }
                                                    className="disabled:border-0 rounded border text-gray-700 border-gray-400 h-14 text-sm font-normal placeholder:text-gray-400"
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
                                        <FormLabel>Apellido</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="shadcn"
                                                disabled={inputStates.input1}
                                                className="disabled:border-0 rounded border text-gray-700 border-gray-400 h-14 text-base font-normal placeholder:text-gray-400"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="button"
                            variant={'ghost'}
                            onClick={() => handleToggleInput('input1')}
                        >
                            Editar
                        </Button>
                    </div>
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </>
    );
};

export default InformacionPersonalView;
