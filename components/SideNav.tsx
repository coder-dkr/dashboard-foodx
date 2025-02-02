import { NavItems } from "@/constants";
import { NavItem } from "@/types"
import Tab from "./Tab";
import Link from "next/link";

const SideNav: React.FC = () => {

  return (
    <aside className="bg-white bottom-0 w-full border-t-2 shadow-lg fixed sm:w-fit sm:left-4 lg:left-7 sm:top-0 sm:rounded-b-[2rem] px-1 py-2 sm:py-8 sm:pt-6 sm:h-auto sm:bottom-6 duration-150 z-50">
      <div className="p-5 pb-2.5 border-b-[1px] border-b-gray-800 hidden lg:block duration-150">
        <Link href="/dashboard" className="text-2xl font-bold text-gray-800 ">Food<span className="text-orange-500">X </span> Dashboard</Link>
      </div>
      <nav className="sm:mt-5 lg:p-5 flex sm:flex-col sm:gap-10   h-full">
        <div className="flex justify-around sm:flex-col gap-2 w-full sm:w-auto">
        { NavItems?.map((item : NavItem ) => (
            <Tab key={item.name} navItem={item} />
        )) }
        </div>

        <Tab 
          navItem={{
          name : 'Profile',
          icon : '/admin.svg' 
        }} />
      </nav>
    </aside>
  );
};

export default SideNav;
