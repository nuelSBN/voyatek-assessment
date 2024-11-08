import { toast } from "sonner";
import useFlightSearch from "../../../hooks/useFlightQuery";
import FlightForm from "./flight-form";
import FlightResultsComponent from "./flight-result";

export default function FlightModalComponent() {
  const {
    flightResults,
    formData,
    currencyOptions,
    airportsError,
    isLoading,
    handleSubmit,
    handleSelectChange,
    handleChange,
  } = useFlightSearch();

  if (airportsError) {
    console.log(airportsError);
    toast.error(airportsError.message);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-6 bg-white rounded-md">
      {!flightResults ? (
        <FlightForm
          currencyOptions={currencyOptions}
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      ) : (
        <FlightResultsComponent
          flightResults={flightResults?.data.aggregation}
        />
      )}
    </div>
  );
}
