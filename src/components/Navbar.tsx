import { Logo } from "./Logo";
import { NavigationItem } from "./NavigationItem";
import { IoIosCart } from "react-icons/io";
import { gora, gadzety, akcesoria, kolekcje } from "@/data/navigationData";

export const Navbar = () => {
  return (
    <div className="flex w-full h-60 flex-row">
      <div className="basis-1/5"></div>
      <div className="basis-3/5 h-60 flex flex-col items-center py-5 space-y-7">
        <Logo />
        <div className="flex flex-row">
          <NavigationItem title="GÓRA" ItemsList={gora} href="/gora" />
          <NavigationItem title="DÓL" href="/dol" />
          <NavigationItem title="GADŻETY" ItemsList={gadzety} href="/gadzety" />
          <NavigationItem
            title="AKCESORIA"
            ItemsList={akcesoria}
            href="/akcesoria"
          />
          <NavigationItem title="KOLEKCJE" ItemsList={kolekcje} />
          <NavigationItem
            title="PREORDER"
            href="/preorder"
            className="text-pink-500"
          />
          <NavigationItem
            title="NOWOSCI"
            href="/nowosci"
            className="text-blue-600"
          />
          <NavigationItem title="OSTATNIE SZTUKI" href="/ostatnie-sztuki" />
          <NavigationItem title="SALE" href="/gora" className="text-pink-500" />
        </div>
      </div>
      <div className="basis-1/5 flex justify-end">
        <IoIosCart />
      </div>
    </div>
  );
};
