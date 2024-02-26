import { useState } from "react";

export type useApiFetch = {
  error: unknown;
  isLoading: boolean;
  fetchApi: (URL: string) => void;
};

export default function useApiFetch(setPersonsData): useApiFetch {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchApi = async (URL: string) => {
    try {
      const response: Response = await fetch(URL);
      if (!response.ok) throw new Error("Error response was not ok");

      const responseData: unknown = await response.json();
      setPersonsData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    // console.log(data);
  };

  return { isLoading, error, fetchApi };
}
