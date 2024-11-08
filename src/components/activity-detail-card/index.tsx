import close from "../../assets/icons/X.svg";
import chess from "../../assets/images/chess.svg";
import mappin from "../../assets/icons/MapPin.svg";
import star from "../../assets/icons/Star.svg";
import clock from "../../assets/icons/Clock.svg";

const ActivityDetailsCard = () => {
  return (
    <div className="rounded shadow-md bg-white h-[274px] flex">
      <div className="w-[95%] p-4 flex justify-between">
        <div className="flex gap-3 w-full">
          <div className="h-[224px] w-[232px] rounded">
            <img
              src={chess}
              alt=""
              className="h-full w-full object-cover rounded"
            />
          </div>
          <div className="w-[calc(100%-232px)] flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl tracking-[-2%] font-semibold">
                  The Museum of Modern Art
                </h1>
                <p className="font-medium tracking-[-1px] text-[#1D2433] w-[440px]">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>
                <div className="flex gap-3">
                  <span className="text-primary tracking-[-1px] leading-6 flex items-center gap-2 font-medium">
                    <img src={mappin} alt="" />
                    Directions
                  </span>
                  <span className="text-[#676E7E] tracking-[-1px] leading-6 flex items-center gap-2 font-medium">
                    <img src={star} alt="" />
                    4.5 (436)
                  </span>
                  <span className="text-[#676E7E] tracking-[-1px] leading-6 flex items-center gap-2 font-medium">
                    <img src={clock} alt="" /> 1 Hour
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <h1 className="font-semibold text-[28px] leading-[36px] tracking-[-2%]">
                  ₦123,450.00
                </h1>
                <p className="font-medium text-[#1D2433] text-base">
                  10:30 AM on Mar 19
                </p>
              </div>
            </div>
            <div className="py-5 border-t border-b border-[#E4E7EC] flex justify-between">
              <h1 className="flex text-[#647995] gap-2 text-lg items-center">
                What's Included: Admission to the Empire State Building.{" "}
                <span>See more</span>
              </h1>
              <h1 className="flex text-[#647995] gap-2 text-lg items-center">
                <button className="bg-[#0A369D] rounded p-[4px_8px] text-white text-xs">
                  Day 1
                </button>
              </h1>
            </div>
            <div className="py-4 flex justify-between text-lg text-primary font-medium">
              <div className="flex gap-6">
                <button>Activity details</button>
                <button>Price details</button>
              </div>
              <div className="flex gap-6">
                <button>Edit details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[5%] h-full bg-[#FBEAE9] flex justify-center items-center">
        <img src={close} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ActivityDetailsCard;
