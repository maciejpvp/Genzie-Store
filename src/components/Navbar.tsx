import { NavbarMobile } from "./Navbar/NavbarMobile";
import { NavbarPC } from "./Navbar/NavbarPC";

export const Navbar = () => {
  return (
    //PC
    <>
      <div className="hidden lg:flex w-full h-60 flex-row">
        <NavbarPC />
      </div>
      {/* //Mobile */}
      <div className="flex lg:hidden w-dvw h-16 px-4 bg-white shadow-md">
        <NavbarMobile />
      </div>
    </>
  );
};
