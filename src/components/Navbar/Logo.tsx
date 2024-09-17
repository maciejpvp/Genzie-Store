import { cn } from "@/lib/utils";
import GenzieLogo from "../../assets/logo_genzie.svg";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("h-1/2", className)}>
      <img src={GenzieLogo} alt="Logo" className="h-full" />
    </div>
  );
};
