import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import Contactus from "./components/Contactus";
import { Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {<Outlet/>}
    </div>
  );
};

const Grocery = lazy(()=>import("./components/Grocery")); 

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
      path : "/",
      element : <Body/>,
      errorElement : <Error/>    
      },
      {
    path : "/about",
    element : <About/>,
    errorElement : <Error/>
    },
    {
    path : "/contactus",
    element : <Contactus/>,
    errorElement : <Error/>
    },
    {
    path : "/grocery",
    element : <Suspense fallback={<h1>Loading sirrrrr</h1>}><Grocery/></Suspense>,
    errorElement : <Error/>
    },
    {
      path : "/restaurant/:resId",
      element : <RestaurantMenu/>
    }

]
} 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);