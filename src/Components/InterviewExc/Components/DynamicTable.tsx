import { useEffect, useState } from "react";

import PersonsModal from "./PersonsModal";
import { personsDataType } from "../types/persons";
import useModalHandle from "../Utils/hooks/useModalHandle";
import { filterTable, getColValues } from "../Utils/filterTable";
import { TABLE_KEYS } from "../data/tableKeys";

export default function DynamicTable({ personsData }) {
  const [filteredData, setFilteredData] = useState<personsDataType[]>([]);
  const { isOpen, modalData, openModal, closeModal, setData } =
    useModalHandle();
  useEffect(() => {
    if (personsData) {
      filterTable(personsData.results, setFilteredData);
    }
  }, [personsData]);

  console.log(filteredData);
  return (
    <>
      {personsData && (
        <section className="flex justify-center pt-1 pb-3">
          <table className="table-fixed h-fit">
            <thead>
              <tr>
                {filteredData &&
                  TABLE_KEYS.map((el) => {
                    return (
                      <th className="border border-slate-600 text-left">
                        {el}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {filteredData &&
                filteredData.map((person, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={
                        !isOpen
                          ? () => {
                              openModal();
                              setData(person);
                            }
                          : undefined
                      }
                    >
                      {Object.values(person).map((col) => {
                        console.log(Object.values(person));
                        if (typeof col !== "object") {
                          return (
                            <td className="border border-slate-600 md:min-w-unit-5xl">
                              <span>{col}</span>
                            </td>
                          );
                        } else {
                          return (
                            <td className="border border-slate-600 md:min-w-unit-5xl">
                              {getColValues(col).map((item) => {
                                return <span>{`${item} `} </span>;
                              })}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {modalData != undefined && (
            <PersonsModal
              isOpen={isOpen}
              closeModal={closeModal}
              modalData={modalData}
            />
          )}
        </section>
      )}
    </>
  );
}
