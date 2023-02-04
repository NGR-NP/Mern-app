import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/ToastLayout";
import LoginPage from "../pages/Login";
import Register from "../pages/Register";
import NavLayout from "../Layout/NavLayout";
import Home from "../pages/Home";
import Admin from "../pages/admin/Admin";
import Profile from "../pages/Profile";
import RequireAuth from "../Layout/RequireAuth";
import Unauthorized from "../components/access/unauthorized";
import ProductsComp from "../components/products/ProductsComp";
import SingleProduct from "../pages/SingleProduct";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
const ROLE = {
  ADMIN: 10,
  USER: 100,
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <NavLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/shop/:catg",
            element: <ProductsComp />,
          },
          {
            path: "/shop",
            element: <ProductsComp />,
          },
          {
            path: "/old/shop/:catg",
            element: <Products />,
          },
          {
            path: "/old/shop",
            element: <Products />,
          },
          {
            path: "/product/:id",
            element: <SingleProduct />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/unauthorize",
            element: <Unauthorized />,
          },
        ],
      },

      {
        path: "/",
        element: <RequireAuth isAllowed={[ROLE.ADMIN]} />,
        children: [
          {
            path: "/admin",
            element: <Admin />,
          },
          {
            path: "/new",
            element: <div>add new product</div>
          },
        ],
      },
      {
        path: "/",
        element: <RequireAuth isAllowed={[ROLE.USER]} />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
      },

      {
        path: "*",
        element: <div className="centerADiv">404 page not found</div>,
      },
    ],
  },
]);
