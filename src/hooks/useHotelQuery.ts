import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HotelParams, getHotels } from "../service/hotels";
import { getCurrencies } from "../service/meta";
import { ICurrencyResponse } from "../types/currency";
// import { IHotelResponse } from "../types/hotel";

export default function useHotelSearch() {
  const [formData, setFormData] = useState<HotelParams>({
    hotel_id: "191605",
    adults: "1",
    children_age: "",
    room_qty: "1",
    units: "1",
    temperature_unit: "c",
    languagecode: "en-us",
    currency_code: "USD",
  });

  const {
    data: hotelResults,
    refetch,
    isLoading: isHotelLoading,
    error: hotelError,
  } = useQuery<unknown>({
    queryKey: ["hotels", formData],
    queryFn: () => getHotels(formData),
    enabled: false,
  });

  const { data: currency } = useQuery<ICurrencyResponse>({
    queryKey: ["currency"],
    queryFn: () => getCurrencies(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const isFormComplete = () => {
    return (
      formData.hotel_id &&
      formData.adults &&
      formData.room_qty &&
      formData.currency_code
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormComplete()) {
      refetch();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange =
    (name: keyof HotelParams) => (selectedValue: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedValue,
      }));
    };

  const currencyOptions =
    currency?.data.map((value) => ({
      value: value.code,
      label: value.name,
    })) || [];

  return {
    formData,
    hotelResults,
    isHotelLoading,
    hotelError,
    currencyOptions,
    setFormData,
    handleSubmit,
    handleChange,
    handleSelectChange,
  };
}
