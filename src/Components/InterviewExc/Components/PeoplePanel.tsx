import useApiFetch from "../Utils/useApiFetch";
import useHandleButton, { HandleButton } from "../Utils/useHandleButton";

// import { data } from "../types/persons";

export default function PeoplePanel({ setPersonsData }) {
  const { persons, increment, decrement }: HandleButton = useHandleButton();
  const { isLoading, error, fetchApi } = useApiFetch(setPersonsData);

  console.log(setPersonsData);

  return (
    <section className="flex flex-col gap-y-3">
      <div className="text-center">React Test</div>
      <div className="grid-cols-3 grid gap-3">
        <button onClick={increment}>+</button>
        <div>persons</div>
        {persons > 0 && <button onClick={decrement}>-</button>}
      </div>
      <div className="text-center">
        {`this is a data table ${persons} for persons`}
      </div>
      <div className="text-center">
        {persons != 0 && (
          <button
            onClick={() =>
              fetchApi(`https://randomuser.me/api?results=${persons}`)
            }
          >
            Get Person's Data
          </button>
        )}
      </div>
    </section>
  );
}
