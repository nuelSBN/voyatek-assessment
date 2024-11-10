import { useEffect, useState } from "react";
import { IHotel } from "@/types/hotel";
import hotel from "../../../assets/icons/Warehouse.svg";
import { ContentType } from "../../../hooks/useModal";
import noHotel from "../../../assets/icons/Buildings.svg";
import Button from "../../../components/button";
import HotelDetailsCard from "../hotel-details-card";

interface Props {
  openModal: (contentType: ContentType) => void;
}

export default function HotelIteniraries({ openModal }: Props) {
  const [savedHotels, setSavedHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    const hotels = JSON.parse(localStorage.getItem("selectedHotels") || "[]");

    setSavedHotels(hotels);
  }, []);

  const handleRemoveHotel = (index: number) => {
    const updatedFlights = savedHotels.filter((_, i) => i !== index);
    setSavedHotels(updatedFlights);
    localStorage.setItem("selectedFlights", JSON.stringify(updatedFlights));
  };
  return (
    <div className="min-h-[300px] rounded p-4 flex flex-col gap-4 bg-[#344054]">
      <div className="h-[46px] flex justify-between items-center">
        <div className="flex gap-2 items-center text-[#fff]">
          <img src={hotel} alt="Flights icon" />
          <span className="text-lg leading-[26px] font-semibold">Hotels</span>
        </div>
        {savedHotels.length > 0 && (
          <button
            className="bg-white p-[12px_24px] font-semibold text-sm rounded text-[#0D6EFD]"
            onClick={() => openModal("hotels")}
          >
            Add Hotels
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {savedHotels.length > 0 ? (
          savedHotels.map((item, index) => (
            <HotelDetailsCard
              key={index}
              hotel={item}
              onRemove={handleRemoveHotel}
              index={index}
            />
          ))
        ) : (
          <div className="rounded shadow-md bg-white h-[274px] flex flex-col justify-center items-center gap-4">
            <img src={noHotel} alt="" />
            <h2> No request yet</h2>
            <Button text="Add Hotel" onClick={() => openModal("hotels")} />
          </div>
        )}
      </div>
    </div>
  );
}
