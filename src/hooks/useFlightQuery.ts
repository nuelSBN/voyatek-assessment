import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  FlightSearchParams,
  getAirports,
  searchFlights,
} from "../service/flights";
import { getCurrencies } from "../service/meta";
import { ICurrencyResponse } from "../types/currency";
import { IFLightResponse } from "../types/flight";

export default function useFlightSearch() {
  const [formData, setFormData] = useState<FlightSearchParams>({
    fromId: "BOM.AIRPORT",
    toId: "DEL.AIRPORT",
    departDate: "",
    returnDate: "",
    pageNo: 1,
    adults: "1",
    children: "0",
    sort: "BEST",
    cabinClass: "ECONOMY",
    currency_code: "USD",
  });

  const {
    data: flightResults,
    refetch,
    isLoading,
    error,
  } = useQuery<IFLightResponse>({
    queryKey: ["flights", formData],
    queryFn: () => searchFlights(formData),
    enabled: false,
  });

  const {
    data: airports,
    isLoading: airportsLoading,
    error: airportsError,
  } = useQuery({
    queryKey: ["airports"],
    queryFn: () => getAirports(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const { data: currency } = useQuery<ICurrencyResponse>({
    queryKey: ["currency"],
    queryFn: () => getCurrencies(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const isFormComplete = () => {
    return (
      formData.fromId &&
      formData.toId &&
      formData.departDate &&
      formData.currency_code
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormComplete()) {
      console.log(formData);
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
    (name: keyof FlightSearchParams) => (selectedValue: string) => {
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
    flightResults,
    isLoading,
    error,
    airports,
    airportsLoading,
    airportsError,
    currencyOptions,
    setFormData,
    handleSubmit,
    handleChange,
    handleSelectChange,
  };
}
