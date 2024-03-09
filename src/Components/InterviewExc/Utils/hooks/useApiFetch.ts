import { useState } from "react";
import { personsDataType } from "../../types/persons";

export type useApiFetch = {
  error: unknown;
  isLoading: boolean;
  fetchApi: (URL: string) => void;
};

export default function useApiFetch(
  setPersonsData: React.Dispatch<
    React.SetStateAction<personsDataType | undefined>
  >
): useApiFetch {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchApi = async (URL: string) => {
    try {
      const response: Response = await fetch(URL);
      if (!response.ok) throw new Error("Error response was not ok");

      const responseData = await response.json();
      console.log(responseData);
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
