import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const apiHost = import.meta.env.VITE_REACT_APP_API_HOST;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-RapidAPI-Host": apiHost,
    "X-RapidAPI-Key": apiKey,
  },
});

export const generalSearch = async (query: string) => {
  try {
    const response = await apiClient.get("hotels", {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};
