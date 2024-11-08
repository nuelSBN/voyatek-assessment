import { useState, useEffect } from "react";
import { IAggregation, IAggregationAirlines } from "../../../../types/flight";

interface FlightResultsComponentProps {
  flightResults: IAggregation;
}

const FlightResultsComponent: React.FC<FlightResultsComponentProps> = ({
  flightResults,
}) => {
  const [selectedFlights, setSelectedFlights] = useState<
    IAggregationAirlines[]
  >([]);

  useEffect(() => {
    const savedFlights = JSON.parse(
      localStorage.getItem("selectedFlights") || "[]"
    );
    setSelectedFlights(savedFlights);
  }, []);

  const handleAddFlight = (airline: IAggregationAirlines) => {
    const isSelected = selectedFlights.find(
      (flight) => flight.name === airline.name
    );

    let updatedFlights;
    if (isSelected) {
      updatedFlights = selectedFlights.filter(
        (flight) => flight.name !== airline.name
      );
    } else {
      updatedFlights = [...selectedFlights, airline];
    }

    setSelectedFlights(updatedFlights);
    localStorage.setItem("selectedFlights", JSON.stringify(updatedFlights));
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold mb-4">Flight Search Results</h2>
      <ul className="space-y-4 flex flex-col gap-4">
        {flightResults.airlines.map((airline) => {
          const { logoUrl, minPrice, name, count } = airline;
          const isActive = selectedFlights.some(
            (flight) => flight.name === name
          );

          return (
            <div
              key={name}
              onClick={() => handleAddFlight(airline)}
              className={`flex w-full justify-between border-b border-gray cursor-pointer p-2 rounded 
                ${isActive ? "bg-blue-100" : "bg-white"}`}
            >
              <div className="flex gap-4 w-[60%]">
                <img
                  src={logoUrl}
                  alt=""
                  className="h-[40px] w-[40px] object-cover rounded-full"
                />
                <h1 className="text-xl font-semibold text-primary">{name}</h1>
              </div>
              <div className="w-[20%] flex justify-center">
                <h1>
                  {minPrice.currencyCode} {minPrice.nanos}
                </h1>
              </div>
              <div className="w-[20%] flex justify-center">
                <h1>{count}</h1>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FlightResultsComponent;
