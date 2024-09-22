import { AnimatePresence } from "framer-motion";
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";

export const AccountButton = () => {
  const navigate = useNavigate();
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const isLoggedIn = !!localStorage.getItem("token");

  const handleClickLogin = () => {
    navigate("/auth/login");
  };

  const handleClickSignup = () => {
    navigate("/auth/signup");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiresIn");
    window.location.reload();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <button
          className="text-3xl"
          onClick={() => setShowAccount((prev) => !prev)}
        >
          <AnimatePresence mode="wait">
            {showAccount ? (
              <motion.div
                key="filled"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <RiAccountCircleFill />
              </motion.div>
            ) : (
              <motion.div
                key="light"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <RiAccountCircleLine />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto px-2">
        {isLoggedIn ? (
          <>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {}}
                className="bg-gray-100 w-48 h-10 rounded-sm hover:bg-gray-200 transition-all duration-300 active:bg-gray-100"
              >
                Settings
              </button>
              <button
                onClick={handleLogOut}
                className="bg-gray-100 w-48 h-10 rounded-sm hover:bg-gray-200 transition-all duration-300 active:bg-gray-100"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-2">
              <button
                onClick={handleClickLogin}
                className="bg-gray-100 w-48 h-10 rounded-sm hover:bg-gray-200 transition-all duration-300 active:bg-gray-100"
              >
                Log In
              </button>
              <button
                onClick={handleClickSignup}
                className="bg-gray-100 w-48 h-10 rounded-sm hover:bg-gray-200 transition-all duration-300 active:bg-gray-100"
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
};
