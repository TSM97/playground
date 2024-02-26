import { createContext, useContext } from "react";
import { personsDataType } from "../types/persons";

export const PersonsContext = createContext<personsDataType | undefined>(
  undefined
);

export function useUserContext() {
  const persons = useContext(PersonsContext);

  if (persons === undefined) {
    throw new Error("useUserContext must be used with a PersonsContext");
  }

  return persons;
}
