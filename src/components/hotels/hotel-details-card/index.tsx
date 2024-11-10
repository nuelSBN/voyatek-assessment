import close from "../../../assets/icons/X.svg";
import mappin from "../../../assets/icons/MapPin.svg";
import star from "../../../assets/icons/Star.svg";
import swimmingpool from "../../../assets/icons/SwimmingPool.svg";
import wine from "../../../assets/icons/Wine.svg";
import bed from "../../../assets/icons/Bed.svg";
import calender from "../../../assets/icons/calender.svg";
import { IHotel } from "@/types/hotel";

interface HotelDetailsCardProps {
  hotel: IHotel;
  index: number;
  onRemove: (index: number) => void;
}

const HotelDetailsCard = ({
  hotel,
  index,
  onRemove,
}: HotelDetailsCardProps) => {
  return (
    <div className="rounded shadow-md bg-white h-[274px] flex">
      <div className="w-[95%] p-4 flex justify-between">
        <div className="flex gap-3 w-full">
          <div className="h-[224px] w-[232px] rounded">
            <img
              src={hotel.property.photoUrls[0]}
              alt=""
              className="h-full w-full object-cover rounded"
            />
          </div>
          <div className="w-[calc(100%-232px)] flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl tracking-[-2%] font-semibold">
                  {hotel.property.name}
                </h1>
                <p className="font-medium tracking-[-1px] text-[#1D2433] w-[440px]">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                  Lekki Phase1
                </p>
                <div className="flex gap-3">
                  <span className="text-primary tracking-[-1px] leading-6 flex items-center gap-2 font-medium">
                    <img src={mappin} alt="" />
                    Show in map
                  </span>
                  <span className="text-[#676E7E] tracking-[-1px] leading-6 flex items-center gap-2 font-medium">
                    <img src={star} alt="" />
                    8.5 (436)
                  </span>
                  <span className="text-[#676E7E] tracking-[-1px] leading-6 flex items-center gap-2 font-medium">
                    <img src={bed} alt="" />
                    King size room
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <h1 className="font-semibold text-[28px] leading-[36px] tracking-[-2%]">
                  ₦123,450.00
                </h1>
                <p className="font-medium text-[#1D2433] text-base">
                  Total Price: NGN 560,000
                </p>
                <p className="font-medium text-[#1D2433] text-base">
                  1 room x 10 nights incl. taxes
                </p>
              </div>
            </div>
            <div className="py-5 border-t border-b border-[#E4E7EC] flex justify-between">
              <h1 className="flex text-[#647995] gap-2 text-lg items-center">
                Facilities:{" "}
                <div className="flex gap-4 items-center">
                  <span className="flex items-center gap-2">
                    <img src={swimmingpool} alt="Baggage Icon" />
                    Pool
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={wine} alt="Film Icon" />
                    Bar
                  </span>
                </div>
              </h1>
              <h1 className="flex text-[#647995] gap-2 text-lg items-center">
                <img src={calender} alt="" />
                <h1>Check In: 20-04-2024</h1>
                <img src={calender} alt="" />
                <h1>Check Out: 29-04-2024</h1>
              </h1>
            </div>
            <div className="py-4 flex justify-between text-lg text-primary font-medium">
              <div className="flex gap-6">
                <button>Hotel details</button>
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
        <img
          src={close}
          alt=""
          className="cursor-pointer"
          onClick={() => onRemove(index)}
        />
      </div>
    </div>
  );
};

export default HotelDetailsCard;
