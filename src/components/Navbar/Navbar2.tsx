import { IoIosArrowRoundBack } from "react-icons/io";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";

export const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[10dvh] flex justify-center mt-1">
      <button
        className="w-1/3 text-6xl basis-1/3"
        onClick={() => {
          navigate("/");
        }}
      >
        <IoIosArrowRoundBack />
      </button>
      <div className="w-1/3 flex flex-row justify-center">
        <Logo />
      </div>
      <div className="w-1/3" />
    </div>
  );
};
