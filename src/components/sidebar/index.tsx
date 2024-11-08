import { sideBarItem } from "../../constants/sidebar-items";
import SidebarItem from "../sidebar-item";

export default function Sidebar() {
  return (
    <div className="w-[300px] bg-white p-[60px_10px] flex flex-col">
      {sideBarItem.map((item, index) => {
        return <SidebarItem icon={item.icon} label={item.label} key={index} />;
      })}
    </div>
  );
}
