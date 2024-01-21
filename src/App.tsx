import UseMemo from "./Components/hooks/UseMemo/UseMemo";
import Dashboard from "./Components/hooks/UseContext/Dashboard";
import { DashboardContext } from "./Components/hooks/UseContext/context";
import UseRef from "./Components/hooks/UseRef/UseRef";
import UseRefPlaceholder from "./Components/hooks/UseRef/UseRefPlaceholder";

export type User = {
  isSubscribed: boolean;
  name: string;
};

function App() {
  const user: User = {
    isSubscribed: false,
    name: "You",
  };

  return (
    <div className="flex justify-center w-screen h-screen ">
      <div className="container flex items-center justify-center flex-col gap-[35px]">
        <UseMemo />
        <DashboardContext.Provider value={user}>
          <Dashboard />
        </DashboardContext.Provider>
        <div className="flex w-full justify-around">
          <UseRef />
          <UseRefPlaceholder />
        </div>
      </div>
    </div>
  );
}

export default App;
