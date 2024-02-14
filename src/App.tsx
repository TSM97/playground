import { Link, Route, Routes } from "react-router-dom";

import UseMemo from "./Components/hooks/UseMemo/UseMemo";
import Dashboard from "./Components/hooks/UseContext/Dashboard";
import { DashboardContext } from "./Components/hooks/UseContext/context";
import UseRef from "./Components/hooks/UseRef/UseRef";
import UseRefPlaceholder from "./Components/hooks/UseRef/UseRefPlaceholder";
import Home from "./Components/Home";
import Books from "./Components/Books";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

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
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">PlayGround</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/UseMemo">UseMemo</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/UseRef">UseRef</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex justify-center w-screen h-screen ">
        <div className="container flex items-center flex-col gap-[35px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UseMemo" element={<UseMemo />} />
            <Route
              path="/UseRef"
              element={
                <div className="flex w-full justify-around">
                  <UseRef />
                  <UseRefPlaceholder />
                </div>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <DashboardContext.Provider value={user}>
                  <Dashboard />
                </DashboardContext.Provider>
              }
            />
            <Route path="/Books/:id" element={<Books />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
