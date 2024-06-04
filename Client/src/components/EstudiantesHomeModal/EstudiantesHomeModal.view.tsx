import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Iconos personalizados
function ThumbUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3.68L14 9z" />
      <line x1="9" y1="22" x2="9" y2="13" />
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <path d="M10 15v4a3 3 0 0 0 6 0v-4h3a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.68L10 15z" />
      <line x1="15" y1="2" x2="15" y2="11" />
    </svg>
  );
}

const EstudiantesHomeModal: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Aceptar Solicitud</Button>
        </DialogTrigger>

        <DialogContent className="max-w-lg bg-accent">
          <DialogHeader>
            <div className="flex justify-center items-center p-4">
              <ThumbUpIcon />
            </div>
            <DialogTitle className="text-lg text-black text-center font-bold mt-4 bg-white w-full p-2 rounded-md">
              Solicitud aceptada exitosamente
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center mt-2 text-black text-sm text-balance">
            Al acceder a tu calendario podrás ver cuando se acerca la fecha de
            dar tu tutoría, además de que la plataforma te notificará.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Rechazar Solicitud</Button>
        </DialogTrigger>

        <DialogContent className="max-w-lg bg-accent jus">
          <DialogHeader>
            <ThumbDownIcon />
            <DialogTitle className="text-lg font-bold mt-4">
              ¿Estás seguro de rechazar?
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center mt-2">
            <div className="flex space-x-4 justify-center mt-4">
              <Button variant="destructive">Estoy seguro</Button>
              <Button variant="outline">Volver atrás</Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EstudiantesHomeModal;
