import { Login } from "@/components/Auth/Login";
import Signup from "@/components/Auth/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Navbar2 } from "@/components/Navbar/Navbar2";

export const AuthPage = () => {
  const navigate = useNavigate();
  const { mode } = useParams();

  const [tab, setTab] = useState<string>(mode ? mode : "");

  const onTabChange = (value: string) => {
    setTab(value);
  };

  useEffect(() => {
    setTab(mode ? mode : "");
  }, [mode]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const expiresIn = Number(localStorage.getItem("tokenExpiresIn")) || 0;
      const now = new Date().getTime();

      if (now > expiresIn) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiresIn");
      } else {
        navigate("/");
      }
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
          position: "bottom-right",
        }}
      />
      <div className="flex flex-col">
        <Navbar2 />
        <div className="flex justify-center items-center h-[65dvh]">
          <Tabs value={tab} onValueChange={onTabChange} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="signup"
                onClick={() => navigate("/auth/signup")}
              >
                Signup
              </TabsTrigger>
              <TabsTrigger
                value="login"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
              <Signup />
            </TabsContent>
            <TabsContent value="login">
              <Login />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};
