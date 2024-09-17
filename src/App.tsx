import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const expiresIn = Number(localStorage.getItem("tokenExpiresIn")) || 0;
      const now = new Date().getTime();

      if (now > expiresIn) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiresIn");
      }
    }
  }, []);
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
