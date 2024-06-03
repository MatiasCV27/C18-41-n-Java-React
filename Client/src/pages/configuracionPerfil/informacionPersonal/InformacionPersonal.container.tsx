import * as z from 'zod';
import InformacionPersonalView from './InformacionPersonal.view';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
    name: z.string(),
    lastname: z.string(),

});
type FormSchemaType = z.infer<typeof FormSchema>;
export const InformacionPersonalContainer = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            
            name: '',
            lastname: '',
        },
    });

    function onSubmit(values: FormSchemaType) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <>
            <InformacionPersonalView form={form} onSubmit={onSubmit} />
        </>
    );
};
