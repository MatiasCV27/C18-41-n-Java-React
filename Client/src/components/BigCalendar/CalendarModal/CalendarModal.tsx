import Calendario31 from '@/components/icons/Calendario31';
import { Button } from '@/components/ui';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { format } from 'date-fns';
import { ChevronRight } from 'lucide-react';
import { SetStateAction } from 'react';

interface Props {
    isModalOpen: boolean;
    modalEvent: any;

    onClose: React.Dispatch<SetStateAction<boolean>>;
}
export const CalendarModal: React.FC<Props> = ({
    isModalOpen,
    onClose,
    modalEvent,
}) => {
    const { event } = modalEvent;

    // quiero un formato con la fecha y la hora

    const startFormatedDate = format(event?.start ?? new Date(), 'PPpp') ?? '';
    const endFormatedDate = format(event?.end ?? new Date(), 'PPpp') ?? '';

    return (
        <>
            <Dialog open={isModalOpen} onOpenChange={() => onClose(false)}>
                <DialogContent className="max-w-2xl bg-accent text-white">
                    <DialogHeader>
                        <DialogTitle className="text-2xl bg-muted font-bold mt-4 mb-4 p-2 text-center rounded-lg">
                            Informacion del intercambio
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="flex flex-col items-center gap-3 text-center mt-2 text-black font-medium text-lg">
                        <div className="flex flex-col rounded-lg bg-white border border-black p-8">
                            <h2>Horarios</h2>
                            <div className="flex flex-col items-start">
                                <p className="text-sm">
                                    Inicio: {startFormatedDate ?? ''}
                                </p>
                                <p className="text-sm">
                                    Fin: {endFormatedDate ?? ''}
                                </p>
                            </div>
                        </div>

                        <a href={event?.urlToMeeting}>
                            <Button className="flex items-center justify-between bg-secondary text-black font-medium rounded-md py-2 px-4 hover:text-white">
                                <Calendario31 size={24} />
                                <span className="mx-4 text-[16px] font-bold">
                                    Ir al meet
                                </span>
                                <ChevronRight size={24} />
                            </Button>
                        </a>
                    </DialogDescription>
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
