import * as z from 'zod';
import InformacionPersonalView from './InformacionPersonal.view';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const FormSchema = z.object({
    name: z.string(),
    lastname: z.string(),
    gender: z.string(),
    country: z.string(),
    languages: z.string(),
    industry: z.string(),
    about: z.string(),
    timezone: z.string(),
});
type FormSchemaType = z.infer<typeof FormSchema>;
const InformacionPersonalContainer = () => {
    const [inputStates, setInputStates] = useState<{ [key: string]: boolean }>({
        input1: true,
        input2: true,
        input3: true,
        input4: true,
        input5: true,
        input6: true,
        input7: true,
        input8: true,
    });
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            lastname: '',
            gender: '',
            country: '',
            languages: '',
            industry: '',
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio aliquam nostrum corrupti rerum consequuntur repudiandae nemo, officiis tempore nobis veniam cupiditate vitae perspiciatis similique. Eligendi architecto iste incidunt earum.',
            timezone: '',
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
            <InformacionPersonalView
                form={form}
                onSubmit={onSubmit}
                inputStates={inputStates}
                handleToggleInput={handleToggleInput}
            />
        </>
    );
};

export type { FormSchemaType };
export default InformacionPersonalContainer;
