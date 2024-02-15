import { useState } from "react";

export type HandleButton = {
  persons: number;
  increment: () => void;
  decrement: () => void;
};

export default function useHandleButton(): HandleButton {
  const [persons, setPersons] = useState(0);

  function increment(): void {
    setPersons((prevPersons) => prevPersons + 1);
  }
  function decrement(): void {
    setPersons((prevPersons) => prevPersons - 1);
  }

  return { persons, increment, decrement };
}
