import { INavbarItem } from "../../types/constants";

interface Props {
  item: INavbarItem;
}

export default function NavItem({ item }: Props) {
  return (
    <div
      key={item.label}
      className="flex flex-col gap-2 items-center text-[#647995] font-medium tracking-[-1px] uppercase cursor-pointer"
    >
      <img src={item.icon} alt="" className="h-[32px] w-[32px]" />
      <span>{item.label}</span>
    </div>
  );
}
