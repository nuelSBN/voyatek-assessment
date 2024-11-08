import React from "react";

interface Props {
  icon: string;
  label: string;
}

export default function SidebarItem({ icon, label }: Props) {
  return (
    <div className="flex gap-2 text-[#647995] font-medium trackin-[-1px] h-[56px] items-center cursor-pointer">
      <img src={icon} alt="" />
      <span>{label}</span>
    </div>
  );
}
