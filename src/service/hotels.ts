import { apiClient } from "./api";

export interface HotelParams {
  hotel_id: string;
  adults: string;
  children_age: string;
  room_qty: string;
  units: string;
  temperature_unit: "c";
  languagecode: "en-us";
  currency_code: string;
  arrival_date: string;
  departure_date: string;
}

export const getHotels = async (params: HotelParams) => {
  try {
    const response = await apiClient.get("/hotels/getHotelDetails", {
      params,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
