import { apiClient } from "./api";

export const getCurrencies = async () => {
  try {
    const response = await apiClient.get(`meta/getCurrency`);
    return response.data;
  } catch (error) {
    console.error("Error fetching airports:", error);
    throw error;
  }
};
