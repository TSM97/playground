import PeoplePanel from "./Components/PeoplePanel";
import DynamicTable from "./Components/DynamicTable";
import { useState } from "react";

import { personsDataType } from "./types/persons";

export default function InterviewExc() {
  const [personsData, setPersonsData] = useState<personsDataType | undefined>();

  return (
    <>
      <PeoplePanel setPersonsData={setPersonsData} />
      <DynamicTable personsData={personsData} />
    </>
  );
}
