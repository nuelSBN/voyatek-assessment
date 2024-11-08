import React from "react";
import SelectField from "../../../selectfield";
import InputField from "../../../input-field";
import { FlightSearchParams } from "../../../../service/flights";
import { cabinClass, sortOptions } from "../../../../constants/flights";

interface Props {
  formData: FlightSearchParams;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (
    name: keyof FlightSearchParams
  ) => (selectedValue: string) => void;
  currencyOptions: {
    value: string;
    label: string;
  }[];
}

export default function FlightForm({
  formData,
  handleChange,
  handleSelectChange,
  handleSubmit,
  currencyOptions,
}: Props) {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Search Flights</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="From (Airport Code)"
          name="fromId"
          value={formData.fromId}
          onChange={handleChange}
          required
        />
        <InputField
          label="To (Airport Code)"
          name="toId"
          value={formData.toId}
          onChange={handleChange}
          required
        />
        <InputField
          label="Departure Date"
          name="departDate"
          value={formData.departDate}
          onChange={handleChange}
          required
          type="date"
        />
        <InputField
          label="Return Date"
          name="returnDate"
          value={formData.returnDate ?? ""}
          onChange={handleChange}
          type="date"
        />

        <InputField
          label="Number of Adults"
          name="adults"
          value={formData.adults ?? ""}
          onChange={handleChange}
          required
        />

        <InputField
          label="Children Ages (comma separated)"
          name="children"
          value={formData.children ?? ""}
          onChange={handleChange}
          placeholder="e.g., 0,8,15"
          required
        />

        <SelectField
          label="Sort By"
          options={sortOptions}
          value={formData.sort ?? ""}
          onChange={handleSelectChange("sort")}
        />

        <SelectField
          label="Cabin Class"
          options={cabinClass}
          value={formData.cabinClass ?? ""}
          onChange={handleSelectChange("cabinClass")}
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
          Search Flights
        </button>
      </form>
    </>
  );
}
