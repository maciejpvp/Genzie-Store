import { Login } from "@/components/Auth/Login";
import Signup from "@/components/Auth/Signup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Logo } from "@/components/Navbar/Logo";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const AuthPage = () => {
  const navigate = useNavigate();
  const { mode } = useParams();
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
          position: "bottom-right",
        }}
      />
      <div className="flex flex-col">
        <div className="h-[10dvh] flex justify-center mt-1">
          <Logo />
        </div>
        <div className="flex justify-center items-center h-[65dvh]">
          <Tabs defaultValue={mode} className="w-[400px]">
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
