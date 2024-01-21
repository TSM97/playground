import UseMemo from "./hooks/UseMemo/UseMemo";
import Dashboard from "./hooks/UseContext/Dashboard";
import { DashboardContext } from "./hooks/UseContext/context";
import UseRef from "./hooks/UseRef/UseRef";
import UseRefPlaceholder from "./hooks/UseRef/useRefPlaceholder";

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
