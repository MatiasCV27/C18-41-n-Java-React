import { useState } from 'react';
import { PerfilMentorView } from './PerfilMentor.view';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
    habilities: z.string(),
    experience: z.string(),
    linkedin: z.string(),
    portfolio: z.string(),
    other: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;
const PerfilMentorContainer = () => {
    const [inputStates, setInputStates] = useState<{ [key: string]: boolean }>({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
        input5: true,
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            habilities: '',
            experience: '',
            linkedin: '',
            portfolio: '',
            other: '',
        },
    });

    const handleToggleInput = (input: string) => {
        setInputStates((prevInputStates) => ({
            ...prevInputStates,
            [input]: !prevInputStates[input],
        }));
    };

    function onSubmit(values: FormSchemaType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <>
            <PerfilMentorView
                form={form}
                onSubmit={onSubmit}
                inputStates={inputStates}
                handleToggleInput={handleToggleInput}
            />
        </>
    );
};


export type { FormSchemaType };
export default PerfilMentorContainer;   
