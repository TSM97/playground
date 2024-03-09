import { TABLE_KEYS } from "../data/tableKeys";
import { personsDataType } from "../types/persons";

export function filterTable(personsData, setFilteredData) {
  const data = personsData.map((person) => {
    return TABLE_KEYS.reduce((acc, key) => {
      return { ...acc, [key]: person[key] };
    }, {});
  });
  setFilteredData(data);
  console.log(data);
}

export function getColValues(colValues) {
  let internalValues: unknown[] = Object.values(colValues);

  if (typeof internalValues === "object") {
    internalValues.forEach((el) => {
      if (typeof el === "object") {
        internalValues = el;
      }
    });
  }

  return Object.values(internalValues);
}
