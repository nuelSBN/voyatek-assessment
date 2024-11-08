import useHotelSearch from "../../../hooks/useHotelQuery";
import HotelSearchForm from "./hotel-form";
import HotelResultsComponent from "./hotel-result";

export default function HotelModalComponent() {
  const {
    hotelResults,
    currencyOptions,
    formData,
    handleSelectChange,
    handleChange,
    handleSubmit,
  } = useHotelSearch();

  return (
    <div className="p-6 bg-white rounded-md">
      {!hotelResults ? (
        <HotelSearchForm
          currencyOptions={currencyOptions}
          handleSelectChange={handleSelectChange}
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <HotelResultsComponent />
      )}
    </div>
  );
}
