import React from "react";
import { HotelParams } from "../../../../service/hotels";
import InputField from "../../../input-field";
import SelectField from "../../../selectfield";

interface Props {
  currencyOptions: {
    value: string;
    label: string;
  }[];
  handleSelectChange: (
    name: keyof HotelParams
  ) => (selectedValue: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  formData: HotelParams;
}

const HotelSearchForm: React.FC<Props> = ({
  currencyOptions,
  handleSelectChange,
  handleChange,
  formData,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold mb-4">Search Hotel</h1>
      <InputField
        label="Adults"
        name="adults"
        onChange={handleChange}
        value={formData.adults ?? ""}
      />
      <InputField
        label="Arrival Date"
        onChange={handleChange}
        required
        name="arrival_date"
        type="date"
        value={formData.arrival_date}
      />
      <InputField
        label="Departure Date"
        onChange={handleChange}
        required
        name="departure_date"
        type="date"
        value={formData.departure_date}
      />
      <InputField
        label="Children Age"
        name="children_age"
        onChange={handleChange}
        value={formData.children_age}
      />
      <InputField
        label="Room Quantity"
        name="room_qty"
        onChange={handleChange}
        value={formData.room_qty}
      />
      <SelectField
        label="Units"
        onChange={handleSelectChange("units")}
        options={[
          {
            value: "imperial",
            label: "IMPERIAL",
          },
          {
            value: "metric",
            label: "METRIC",
          },
        ]}
        // name="units"
        // onChange={handleChange}
        value={formData.units}
      />

      <SelectField
        label="Currency"
        options={currencyOptions}
        value={formData.currency_code ?? ""}
        onChange={handleSelectChange("currency_code")}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded mt-4"
      >
        Search Hotels
      </button>
    </form>
  );
};

export default HotelSearchForm;
