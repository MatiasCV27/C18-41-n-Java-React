import { Button, Input } from '@/components/ui';
import {
    Dialog,
    DialogClose,
    DialogContent,
    // DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { ChevronRight } from 'lucide-react';
import { SetStateAction } from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface Props {
    isModalOpen: boolean;
    requestModalValues: any;
    onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onSubmit: (event: React.FormEvent) => void;
    onReset: () => void;
    onClose: React.Dispatch<SetStateAction<boolean>>;
}
export const ModalRequest: React.FC<Props> = ({
    isModalOpen,
    onClose,
    requestModalValues,
    onChange,
    onSubmit,
    onReset,
}) => {
    // quiero un formato con la fecha y la hora

    return (
        <>
            <Dialog
                open={isModalOpen}
                onOpenChange={() => {
                    onClose(false);
                    onReset();
                }}
            >
                <DialogContent className="max-w-2xl flex flex-col bg-accent items-center text-white">
                    <DialogHeader>
                        <DialogTitle className="text-2xl bg-muted font-bold mt-4 mb-2 p-2 text-center rounded-lg">
                            Solicitud de intercambio
                        </DialogTitle>
                    </DialogHeader>
                    {/* <DialogDescription className="flex flex-col items-center gap-3 text-center mt-2 text-black font-medium text-lg"></DialogDescription> */}
                    <div className="flex flex-col w-full gap-4 py-4">
                        <div className="flex flex-col items-start  gap-2">
                            <Label htmlFor="name" className="text-right">
                                Fecha
                            </Label>
                            <Input
                                id="date"
                                value={requestModalValues.date}
                                onChange={onChange}
                                name="date"
                                className="col-span-3  text-black"
                                placeholder="DD/MM/YYYY"
                            />
                        </div>
                        <div className="flex flex-col items-start  gap-2">
                            <Label htmlFor="name" className="text-right">
                                Hora de inicio
                            </Label>
                            <Input
                                id="start"
                                value={requestModalValues.start}
                                className="col-span-3  text-black"
                                placeholder="hh:mm"
                                name="start"
                                onChange={onChange}
                            />
                        </div>
                        <div className="flex flex-col items-start  gap-2">
                            <Label htmlFor="username" className="text-right">
                                Hora de finalización
                            </Label>
                            <Input
                                id="end"
                                name="end"
                                value={requestModalValues.end}
                                onChange={onChange}
                                className="col-span-3 text-black"
                                placeholder="hh:mm"
                            />
                        </div>
                        <div className="flex flex-col items-start  gap-2">
                            <Label htmlFor="username" className="text-right">
                                Mensaje
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={requestModalValues.message}
                                className="col-span-3  text-black"
                                placeholder="Escribe un mensaje..."
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <a href="">
                        <Button
                            onClick={onSubmit}
                            className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4 hover:text-white"
                        >
                            <span className="mx-4 text-[16px] font-bold">
                                Enviar Solicitud
                            </span>
                            <ChevronRight size={24} />
                        </Button>
                    </a>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            {/* <Button
                                onClickCapture={() => onClose(false)}
                                type="button"
                                variant="secondary"
                            >
                                Close
                            </Button> */}
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
