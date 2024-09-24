import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SuccessAnimation from "./SuccessAnimation";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

type ResetPasswordSuccessModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ResetPasswordSuccessModal = ({
  open,
  setOpen,
}: ResetPasswordSuccessModalProps) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            Password Reseted
          </DialogTitle>
          <DialogDescription className="flex justify-center">
            Please log in again with new password
          </DialogDescription>
        </DialogHeader>
        <SuccessAnimation />
        <Button onClick={() => navigate("/auth/login")}>Log In</Button>
      </DialogContent>
    </Dialog>
  );
};
