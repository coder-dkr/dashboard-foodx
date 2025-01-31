import { NavItems } from "@/constants";
import { NavItem } from "@/types"
import Tab from "./Tab";

const SideNav: React.FC = () => {
  return (
    <aside className="w-fit max-w-72 bg-gradient-to-b from-white via-white to-white/50 shadow-lg shadow-white/20 fixed left-7 top-14  bottom-0  rounded-t-[2rem] px-5 ">
      <div className="p-5 border-b-2 border-b-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Food<span className="text-orange-400">X </span> Dashboard</h2>
      </div>
      <nav className="mt-5 p-5  h-full">
        <div className="flex flex-col gap-2">
        { NavItems?.map((item : NavItem ) => (
            <Tab key={item.name} navItem={item} />
        )) }
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
