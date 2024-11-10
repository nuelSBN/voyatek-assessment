import { useEffect, useState } from "react";
import FlightDetailsCard from "../flight-details-card";
import { IAggregationAirlines } from "@/types/flight";
import airplaneFlight from "../../../assets/icons/AirplaneInFlight.svg";
import noFlight from "../../../assets/icons/AirplaneTilt.svg";
import { ContentType } from "../../../hooks/useModal";
import Button from "../../../components/button";

interface Props {
  openModal: (contentType: ContentType) => void;
}

export default function FlightIteniraryCard({ openModal }: Props) {
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
    <div className="min-h-[300px] rounded p-4 flex flex-col gap-4 bg-[#F0F2F5]">
      <div className="h-[46px] flex justify-between items-center">
        <div className="flex gap-2 items-center text-[#1D2433]">
          <img src={airplaneFlight} alt="Flights icon" />
          <span className="text-lg leading-[26px] font-semibold">Flights</span>
        </div>
        {savedFlights.length > 0 && (
          <button
            className="bg-white p-[12px_24px] font-semibold text-sm rounded text-[#0D6EFD]"
            onClick={() => openModal("flights")}
          >
            Add Flight
          </button>
        )}
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
          <div className="rounded shadow-md bg-white h-[274px] flex flex-col justify-center items-center gap-4">
            <img src={noFlight} alt="" />
            <h2> No request yet</h2>
            <Button text="Add Flight" onClick={() => openModal("flights")} />
          </div>
        )}
      </div>
    </div>
  );
}
