import { useEffect, useState } from "react";

import PersonsModal from "./PersonsModal";
import useModalHandle from "../Utils/useModalHandle";

export default function DynamicTable({ personsData }) {
  const [filteredData, setFilteredData] = useState<unknown>([]);
  const { isOpen, openModal, closeModal } = useModalHandle();
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
      <PersonsModal isOpen={isOpen} closeModal={closeModal} />
      {personsData && (
        <section className="w-1/2 flex justify-center pt-1">
          <table className="table-fixed w-full">
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
                    <tr key={index} onClick={openModal}>
                      <td className="border border-slate-600">
                        {person.name.title}
                      </td>
                      <td className="border border-slate-600">
                        {person.gender}
                      </td>
                      <td className="border border-slate-600">
                        {person.email}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
