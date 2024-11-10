import { ContentType } from "../../hooks/useModal";
import ActivityIteniraryCard from "../activities/activitity-iteneraries-card";
import FlightIteniraryCard from "../flights/flight-iteniraries-card";
import HotelIteniraries from "../hotels/hotels-iteniraries-card";

interface Props {
  openModal: (contentType: ContentType) => void;
}

export default function TripItineraries({ openModal }: Props) {
  return (
    <div className="py-10 flex flex-col gap-5">
      <div>
        <h1 className="text-[#1D2433] text-xl font-semibold leading-7 tracking-[-2%]">
          Trip itineraries
        </h1>
        <p className="text-[#647995] leading-[22px] text-sm tracking-[-1px]">
          Your trip itineraries are placed here
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <FlightIteniraryCard openModal={openModal} />
        <HotelIteniraries openModal={openModal} />
        <ActivityIteniraryCard openModal={openModal} />
      </div>
    </div>
  );
}
