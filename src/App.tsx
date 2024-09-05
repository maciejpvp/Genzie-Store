import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <div className="bg-gray-50 h-dvh w-full flex flex-col items-center">
      <Toaster
        toastOptions={{
          duration: 5000,
          position: "top-right",
        }}
      />
      <Navbar />
      <Outlet />
    </div>
  );
};
