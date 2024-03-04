import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

type MenuItemWithSubMenuProps = {
  item: {
    link: string;
    name: string;
    subMenuItems: Array<{
      name: string;
      link: string;
    }>;
  };
  toggleOpen: (value: boolean) => void;
};

const MenuItemWithSubMenu = ({
  item,
  toggleOpen,
}: MenuItemWithSubMenuProps) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <span className="flex flex-col items-end gap-8">
      <button
        className="flex w-full uppercase"
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div className="flex flex-row justify-end gap-2 w-full items-center">
          {item.name}
          <div
            className={`text-2xl transition-transform ${
              subMenuOpen && "rotate-180"
            }`}
          >
            <IoChevronDownOutline />
          </div>
        </div>
      </button>

      {subMenuOpen && (
        <div className="flex flex-col">
          {item.subMenuItems?.map((subItem, i) => {
            return (
              <Link
                key={i}
                href={subItem.link}
                onClick={() => toggleOpen(false)}
              >
                {subItem.name}
              </Link>
            );
          })}
        </div>
      )}
    </span>
  );
};

export default MenuItemWithSubMenu;
