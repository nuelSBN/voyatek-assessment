import airplaneLanding from "../../../assets/icons/AirplaneLanding.svg";
import airplaneTakeoff from "../../../assets/icons/AirplaneTakeoff.svg";
import fileslate from "../../../assets/icons/FilmSlate.svg";
import forkknife from "../../../assets/icons/ForkKnife.svg";
import suitcase from "../../../assets/icons/SuitcaseRollingNew.svg";
import close from "../../../assets/icons/X.svg";
import { IAggregationAirlines } from "../../../types/flight";

interface FlightDetailsCardProps {
  flight: IAggregationAirlines;
  index: number;
  onRemove: (index: number) => void;
}

const FlightDetailsCard = ({
  flight,
  index,
  onRemove,
}: FlightDetailsCardProps) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: flight.minPrice.currencyCode,
  }).format(flight.minPrice.nanos / 1e2);

  return (
    <div className="rounded shadow-md bg-white h-[274px] flex">
      <div className="w-[95%] p-4 flex flex-col gap-3">
        <div className="h-[78px] flex justify-between items-center">
          <div className="flex items-center gap-2 h-[62px]">
            <img src={flight.logoUrl} alt="" className="h-[24px] w-[24px]" />
            <div className="flex flex-col gap-3">
              <h1 className="text-[#1D2433] text-xl leading-7 tracking-[-2%] font-semibold">
                {flight.name}
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-[#676E7E] font-medium">AA-829</p>
                <button className="bg-[#0A369D] rounded p-[4px_8px] text-white text-xs">
                  First class
                </button>
              </div>
            </div>
          </div>
          <div className="h-[78px] w-[50%] flex justify-center items-center gap-10">
            <div className="w-[77px]">
              <h1 className="text-[#1D2433] font-semibold leading-8 text-2xl">
                08:35
              </h1>
              <p className="text-[#676E7E] text-xs leading-[22px] tracking-[-4%]">
                Sun, 20 Aug
              </p>
            </div>
            <div className="w-[70%] flex flex-col gap-2">
              <div className="w-full flex justify-between h-[24px]">
                <img src={airplaneTakeoff} alt="" />
                <h1 className="text-[#676E7E] font-medium tracking-[-4%]">
                  Duration: 1h 45m
                </h1>
                <img src={airplaneLanding} alt="" />
              </div>
              <div className="h-2 rounded-lg bg-[#E7F0FF] flex justify-center">
                <div className="w-[60%] bg-primary rounded-lg h-full"></div>
              </div>
              <div className="w-full flex justify-between h-[24px]">
                <h2 className="text-[#1D2433] font-semibold">LOS</h2>
                <h1 className="text-[#676E7E] font-medium tracking-[-4%]">
                  Direct
                </h1>
                <h2 className="text-[#1D2433] font-semibold">SIN</h2>
              </div>
            </div>
            <div className="w-[77px]">
              <h1 className="text-[#1D2433] font-semibold leading-8 text-2xl">
                08:35
              </h1>
              <p className="text-[#676E7E] font-medium text-xs leading-[22px] tracking-[-4%]">
                Sun, 20 Aug
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-[#1D2433] font-semibold tracking-[-2%]leading-[36px] text-[28px]">
              {formattedPrice}
            </h1>
          </div>
        </div>
        <div className="py-5 border-t border-b border-[#E4E7EC]">
          <h1 className="flex text-[#647995] gap-2 text-lg items-center">
            Facilities:{" "}
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-2">
                <img src={suitcase} alt="Baggage Icon" />
                Baggage:20kg, Cabin Baggage: 8kg
              </span>
              <span className="flex items-center gap-2">
                <img src={fileslate} alt="Film Icon" />
                In flight entertainment
              </span>
              <span className="flex items-center gap-2">
                <img src={forkknife} alt="Film Icon" />
                In flight meal
              </span>
              <span className="flex items-center gap-2">
                <img src={forkknife} alt="Film Icon" />
                USB Port
              </span>
            </div>
          </h1>
        </div>
        <div className="py-4 flex justify-between text-lg text-primary font-medium">
          <div className="flex gap-6">
            <button>Flight details</button>
            <button>Price details</button>
          </div>
          <div className="flex gap-6">
            <button>Edit details</button>
          </div>
        </div>
      </div>
      <div className="w-[5%] h-full bg-[#FBEAE9] flex justify-center items-center">
        <img
          src={close}
          alt="Close"
          className="cursor-pointer"
          onClick={() => onRemove(index)}
        />
      </div>
    </div>
  );
};

export default FlightDetailsCard;
