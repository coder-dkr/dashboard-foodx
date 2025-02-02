"use client";

import { TabProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Tab: React.FC<TabProps> = ({ className, navItem }) => {
  const pathname = usePathname();

  const baseClasses = `${
    pathname === navItem.route && "bg-[#FFF2DB]"
  } flex items-center gap-5 p-2 px-2.5 rounded-lg transition-all duration-200 hover:bg-[#fee8bd] ${className}`;

  const handleAdminProfileView = () => {
    const isModalOpen = JSON.parse(localStorage.getItem("isModal") || "false");
    localStorage.setItem("isModal", JSON.stringify(!isModalOpen));
    window.dispatchEvent(new Event("storage"));
  };

  return navItem.route ? (
    <Link href={navItem.route} className={baseClasses}>
      <Image src={navItem.icon} alt={navItem.name} width={20} height={20} />
      <p className="hidden lg:block duration-150">{navItem.name}</p>
    </Link>
  ) : (
    <button onClick={handleAdminProfileView} className={baseClasses}>
      <Image src={navItem.icon} alt={navItem.name} width={20} height={20} />
      <p className="hidden lg:block duration-150">{navItem.name}</p>
    </button>
  );
};

export default Tab;
