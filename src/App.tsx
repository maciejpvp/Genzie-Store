import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="bg-gray-50 h-dvh w-full flex flex-col items-center">
      <Navbar />
      <Outlet />
    </div>
  );
};
