import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { App } from "./App.tsx";
// import { Home } from "./pages/Home.tsx";
import { ProductsList } from "./pages/ProductsList.tsx";
import { ProductItemPage } from "./pages/ProductItemPage.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { Cart } from "./pages/Cart.tsx";
import { AuthPage } from "./pages/AuthPage.tsx";
import { ResetPassword } from "./components/ResetPassword.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="list?category=Hoodie" replace />,
      },
      {
        path: "/list",
        element: <ProductsList />,
      },
      {
        path: "/item/:id",
        element: <ProductItemPage />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/auth",
    element: <Navigate to="/auth/signup" replace />,
  },
  {
    path: "/auth/resetPassword/:token",
    element: <ResetPassword />,
  },
  {
    path: "/auth/:mode",
    element: <AuthPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
