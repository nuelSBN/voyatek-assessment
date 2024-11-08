import { useEffect, useState } from "react";
import { IHotel } from "../../../../types/hotel";

interface Props {
  hotelResults: IHotel[];
}

const HotelResultsComponent: React.FC<Props> = ({ hotelResults }: Props) => {
  const [selectedHotels, setSelectedHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    const savedFlights = JSON.parse(
      localStorage.getItem("selectedFlights") || "[]"
    );
    setSelectedHotels(savedFlights);
  }, []);

  console.log(selectedHotels);

  const handleAddHotel = (hot: IHotel) => {
    const isSelected = selectedHotels.find(
      (hotel) => hotel.hotel_id === hot.hotel_id
    );

    let updatedHotel;
    if (isSelected) {
      updatedHotel = selectedHotels.filter(
        (hotel) => hotel.hotel_id !== hot.hotel_id
      );
    } else {
      updatedHotel = [...selectedHotels, hot];
    }

    setSelectedHotels(updatedHotel);
    localStorage.setItem("selectedHotel", JSON.stringify(updatedHotel));
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold mb-4">Hotel Search Results</h2>
      <ul className="space-y-4 flex flex-col gap-4">
        {hotelResults.map((hotel) => {
          const { property, hotel_id } = hotel;
          //   const isActive = selectedHotel.some(
          //     (flight) => flight.name === name
          //   );

          const isActive = selectedHotels.some(
            (flight) => flight.hotel_id === hotel_id
          );

          const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: property.priceBreakdown.grossPrice.currency,
          }).format(property.priceBreakdown.grossPrice.value);

          return (
            <div
              key={hotel_id}
              onClick={() => handleAddHotel(hotel)}
              className={`flex w-full justify-between border-b border-gray cursor-pointer p-2 rounded 
                ${isActive ? "bg-blue-100" : "bg-white"}`}
            >
              <div className="flex gap-4 w-[60%]">
                <img
                  src={property.photoUrls[0]}
                  alt=""
                  className="h-[40px] w-[40px] object-cover rounded-full"
                />
                <h1 className="text-xl font-semibold text-primary">
                  {property.name}
                </h1>
              </div>
              <div className="w-[40%] flex justify-center">
                <h1>{formattedPrice}</h1>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HotelResultsComponent;
