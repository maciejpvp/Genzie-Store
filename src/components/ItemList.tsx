import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { Link } from "react-router-dom";

type ListItemProps = {
  className?: string;
  title: string;
  href: string;
};

export const ItemList = ({ className, title, href }: ListItemProps) => {
  console.log(href);
  return (
    <li>
      <NavigationMenuLink>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          to={{ pathname: "/list", search: `?category=${href}` }}
        >
          <h1 className="text-sm font-medium leading-none">{title}</h1>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
