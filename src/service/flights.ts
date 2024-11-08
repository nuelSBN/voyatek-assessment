import { apiClient } from "./api";

export interface FlightSearchParams {
  fromId: string;
  toId: string;
  departDate: string;
  returnDate?: string;
  pageNo?: number;
  adults?: string;
  children?: string;
  sort?: string;
  cabinClass?: string;
  currency_code?: string;
}

export const getAirports = async () => {
  try {
    const response = await apiClient.get(`flights/searchDestination`);
    return response.data;
  } catch (error) {
    console.error("Error fetching airports:", error);
    throw error;
  }
};

export const searchFlights = async (params: FlightSearchParams) => {
  try {
    const queryParams = new URLSearchParams({
      fromId: params.fromId,
      toId: params.toId,
      departDate: params.departDate,
      returnDate: params.returnDate || "",
      pageNo: params.pageNo?.toString() || "1",
      adults: params.adults?.toString() || "1",
      children: params.children || "",
      sort: params.sort || "BEST",
      cabinClass: params.cabinClass || "ECONOMY",
      currency_code: params.currency_code || "USD",
    });

    const response = await apiClient.get(
      `flights/searchFlights?${queryParams.toString()}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};
