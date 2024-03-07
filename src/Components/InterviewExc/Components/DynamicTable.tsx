import { useEffect, useState } from "react";

import PersonsModal from "./PersonsModal";
import useModalHandle from "../Utils/hooks/useModalHandle";

export default function DynamicTable({ personsData }) {
  const [filteredData, setFilteredData] = useState<unknown>([]);
  const { isOpen, modalData, openModal, closeModal, setData } =
    useModalHandle();

  useEffect(() => {
    if (personsData) {
      setFilteredData(
        personsData.results.map((person) => {
          return {
            name: person.name,
            gender: person.gender,
            email: person.email,
          };
        })
      );
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
                <th className="border border-slate-600 text-left">Name</th>
                <th className="border border-slate-600 text-left">Gender</th>
                <th className="border border-slate-600 text-left">EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {filteredData &&
                filteredData.map((person, index) => {
                  return (
                    <>
                      <tr
                        key={index + person.name.first}
                        onClick={
                          !isOpen
                            ? () => {
                                openModal();
                                setData(person);
                              }
                            : undefined
                        }
                      >
                        <td className="border border-slate-600 md:min-w-unit-5xl">
                          <span>{person?.name?.title} </span>
                          <span>{person?.name?.first} </span>
                          <span>{person?.name?.last}</span>
                        </td>
                        <td className="border border-slate-600  md:min-w-unit-4xl">
                          {person.gender}
                        </td>
                        <td className="border border-slate-600  md:min-w-unit-6xl">
                          {person.email}
                        </td>
                      </tr>
                    </>
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
