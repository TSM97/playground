import useApiFetch from "../Utils/hooks/useApiFetch";
import useHandleButton, { HandleButton } from "../Utils/hooks/useHandleButton";

// import { data } from "../types/persons";

export default function PeoplePanel({ setPersonsData }) {
  const { persons, increment, decrement }: HandleButton = useHandleButton();
  const { isLoading, error, fetchApi } = useApiFetch(setPersonsData);

  return (
    <section className="flex flex-col gap-y-3 h-[20dvh]">
      <div className="text-center text-xl">React Test</div>
      <div className="grid-cols-3 grid gap-3">
        <div className="flex w-100 justify-center">
          <button
            className="text-white font-bold text-lg w-1/2 rounded-sm bg-orange-400"
            onClick={increment}
          >
            +
          </button>
        </div>

        <div className="font-bold text-center text-xl">persons</div>
        {persons > 0 && (
          <div className="flex w-100 justify-center">
            <button
              className="text-white text-lg font-bold rounded-sm w-1/2 bg-orange-400"
              onClick={decrement}
            >
              -
            </button>
          </div>
        )}
      </div>
      <div className="text-center text-2xl">
        {`This is a data table ${persons} for persons`}
      </div>
      <div className="text-center">
        {persons != 0 && (
          <button
            className="p-[1px] hover:border-1 rounded-sm border-black w-1/2"
            onClick={() =>
              fetchApi(`https://randomuser.me/api?results=${persons}`)
            }
          >
            <div className="bg-orange-400 text-white rounded-sm">
              Get Person's Data
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
