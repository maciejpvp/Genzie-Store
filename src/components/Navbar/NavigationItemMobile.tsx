import React, { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Link } from "react-router-dom";

type NavItemProps = {
  title: string;
  ItemsList?: { title: string; href: string }[];
  href?: string;
  className?: string;
  onClose: () => void;
};

const defaultClassName =
  "bg-gray-50 text-gray-800 font-bold py-2 px-4 flex flex-col justify-between items-center";

export const NavigationItemMobile: React.FC<NavItemProps> = ({
  title,
  ItemsList,
  href,
  className,
  onClose,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cn(defaultClassName, className ? className : "")}>
      <div className="flex">
        <Link to={href ? href : "#"} onClick={onClose} className="flex-1">
          {title}
        </Link>
        {ItemsList && (
          <button onClick={toggleExpand} className="ml-2">
            {isExpanded ? <IoIosRemove size={24} /> : <IoIosAdd size={24} />}
          </button>
        )}
      </div>
      {isExpanded && ItemsList && (
        <ul className="mt-2 space-y-2 pl-4">
          {ItemsList.map((item) => (
            <li key={item.title}>
              <Link
                to={{ pathname: "/list", search: `?category=${item.href}` }}
                onClick={onClose}
                className="text-gray-600"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
