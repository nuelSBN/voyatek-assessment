import airplaneFlight from "../../assets/icons/AirplaneInFlight.svg";
import hotel from "../../assets/icons/Warehouse.svg";
import activity from "../../assets/icons/RoadHorizonit.svg";
import FlightDetailsCard from "../flight-details-card";
import HotelDetailsCard from "../hotel-details-card";
import ItineraryCard from "../itineriey-card";
import ActivityDetailsCard from "../activity-detail-card";
import { ContentType } from "../../hooks/useModal";
import { useEffect, useState } from "react";
import { IAggregationAirlines } from "../../types/flight";

interface Props {
  openModal: (contentType: ContentType) => void;
}

export default function TripItineraries({ openModal }: Props) {
  const [savedFlights, setSavedFlights] = useState<IAggregationAirlines[]>([]);

  useEffect(() => {
    const flights = JSON.parse(localStorage.getItem("selectedFlights") || "[]");
    setSavedFlights(flights);
  }, []);

  const handleRemoveFlight = (index: number) => {
    const updatedFlights = savedFlights.filter((_, i) => i !== index);
    setSavedFlights(updatedFlights);
    localStorage.setItem("selectedFlights", JSON.stringify(updatedFlights));
  };

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
        <div className="min-h-[300px] rounded p-4 flex flex-col gap-4 bg-[#F0F2F5]">
          <div className="h-[46px] flex justify-between items-center">
            <div className="flex gap-2 items-center text-[#1D2433]">
              <img src={airplaneFlight} alt={`Flights icon`} />
              <span className="text-lg leading-[26px] font-semibold">
                Flights
              </span>
            </div>
            <button
              className="bg-white p-[12px_24px] font-semibold text-sm rounded text-[#0D6EFD]"
              onClick={() => openModal("flights")}
            >
              Add Flight
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {savedFlights.length > 0 ? (
              savedFlights.map((item, index) => (
                <FlightDetailsCard
                  key={index}
                  flight={item}
                  onRemove={handleRemoveFlight}
                  index={index}
                />
              ))
            ) : (
              <h1 className="font-semibold text-[#1D2433]">
                No Flight booked yet
              </h1>
            )}
          </div>
        </div>
        <ItineraryCard
          title="Hotels"
          imageSrc={hotel}
          buttonText="Add Hotels"
          CardComponent={HotelDetailsCard}
          savedItems={[]}
          backgroundColor="#344054"
          textColor="white"
          buttonColor="#1D2433"
          openModal={() => openModal("hotels")}
        />
        <ItineraryCard
          title="Activities"
          imageSrc={activity}
          buttonText="Add Activities"
          CardComponent={ActivityDetailsCard}
          savedItems={[]}
          backgroundColor="#0054E4"
          textColor="white"
          buttonColor="#0D6EFD"
          openModal={() => openModal("activity")}
        />
      </div>
    </div>
  );
}
