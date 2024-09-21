import { cn } from "@/lib/utils";
import GenzieLogo from "../../assets/logo_genzie.svg";
import { useNavigate } from "react-router-dom";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={cn("h-1/2 cursor-pointer", className)}
      onClick={() => navigate("/")}
    >
      <img src={GenzieLogo} alt="Logo" className="h-full" />
    </div>
  );
};
