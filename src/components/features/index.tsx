import calender from "../../assets/icons/CalendarBlank.svg";
import arrowRight from "../../assets/icons/ArrowRight.svg";
import profilePlus from "../../assets/icons/UserPlus.svg";
import threedots from "../../assets/icons/DotsThree.svg";

export default function Features() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1 flex-col">
        <p className="bg-[#FEF4E6] text-[#7A4504] tracking-[-4%] text-sm font-medium p-[4px_8px] flex gap-1">
          <img src={calender} alt="" />
          <span>21 March 2024</span>
          <img src={arrowRight} alt="" />
          <span>21 April 2024</span>
        </p>
        <h1 className="font-semibold text-2xl tracking-[-2%] leading-8">
          Bahamas Family Trip
        </h1>
        <p className="font-medium tracking-[-4%] text-[#676E7E]">
          New York, United States of America | Solo Trip
        </p>
      </div>
      <div className="flex gap-2">
        <div className="bg-[#E7F0FF] h-[46px] !w-[106px] flex justify-center items-center">
          <img
            src={profilePlus}
            alt="Add user"
            title="Add user"
            className="w-[20px] h-[20px]"
          />
        </div>
        <div className="h-[46px] flex items-center">
          <img src={threedots} alt="More" title="More" />
        </div>
      </div>
    </div>
  );
}
