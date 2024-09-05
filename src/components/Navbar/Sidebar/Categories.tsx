import { NavigationItemMobile } from "@/components/Navbar/NavigationItemMobile";
import { gora, gadzety, akcesoria, kolekcje } from "@/data/navigationData";

type CategoriesProps = {
  onClose: () => void;
};

export const Categories = ({ onClose }: CategoriesProps) => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <NavigationItemMobile
        title="GÓRA"
        ItemsList={gora}
        href="/gora"
        onClose={onClose}
      />
      <NavigationItemMobile title="DÓŁ" href="/dol" onClose={onClose} />
      <NavigationItemMobile
        title="GADŻETY"
        ItemsList={gadzety}
        href="/gadzety"
        onClose={onClose}
      />
      <NavigationItemMobile
        title="AKCESORIA"
        ItemsList={akcesoria}
        href="/akcesoria"
        onClose={onClose}
      />
      <NavigationItemMobile
        title="KOLEKCJE"
        ItemsList={kolekcje}
        onClose={onClose}
      />
      <NavigationItemMobile
        title="PREORDER"
        href="/preorder"
        className="text-pink-500"
        onClose={onClose}
      />
      <NavigationItemMobile
        title="NOWOŚCI"
        href="/nowosci"
        className="text-blue-600"
        onClose={onClose}
      />
      <NavigationItemMobile
        title="OSTATNIE SZTUKI"
        href="/ostatnie-sztuki"
        onClose={onClose}
      />
      <NavigationItemMobile
        title="SALE"
        href="/gora"
        className="text-pink-500"
        onClose={onClose}
      />
    </div>
  );
};
