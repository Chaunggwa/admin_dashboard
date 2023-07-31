import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./Pages/home/Home";
import Users from "./Pages/users/Users";
import Products from "./Pages/products/Products";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Menu from "./Components/menu/Menu";
import Login from "./Pages/login/Login";
import Orders from "./Pages/orders/Orders";
import "./index.scss";
import Customers from "./Pages/customers/Customers";


function App() {

  const Layout = () => {
    return (
      <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
        <Menu />
        </div>
        <div className="contentContainer">
        <Outlet />
        </div>
      </div>
      <Footer />
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "/products",
          element: <Products/>
        },
        {
          path: "/orders",
          element:<Orders/>
        },
        {
          path:"/customers",
          element: <Customers />
        }
      ]
      
    },
    {
      path: "/login",
      element: <Login/>
    },
    
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;