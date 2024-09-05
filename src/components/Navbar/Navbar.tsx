import { NavbarMobile } from "./NavbarMobile";
import { NavbarPC } from "./NavbarPC";

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
