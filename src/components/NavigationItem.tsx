import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ItemList } from "./ItemList";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type NavItemProps = {
  title: string;
  ItemsList?: { title: string; href: string }[];
  href?: string;
  className?: string;
};

const defaultClassName = "bg-gray-50 text-gray-800 font-bold";

export const NavigationItem = ({
  title,
  ItemsList,
  href,
  className,
}: NavItemProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {ItemsList && (
            <>
              <Link to={href ? href : "#"}>
                <NavigationMenuTrigger
                  className={cn(defaultClassName, className)}
                >
                  {title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {ItemsList.map((el) => (
                      <ItemList
                        key={el.title}
                        title={el.title}
                        href={el.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </Link>
            </>
          )}
          {!ItemsList && (
            <Link to={href ? href : "#"}>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  defaultClassName,
                  className
                )}
              >
                {title}
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
