import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import Contactus from "./components/Contactus";
import { Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useState } from "react";
import UserContext from "./utils/UserContext";
import { useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

  const [username,setUsername] = useState();
  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Amarsanthosh",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}> 
    <div className="app">
      <Header />
      {<Outlet/>}
    </div>
    </UserContext.Provider>
    </Provider>
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
    },
    {
      path : "/cart",
      element : <Cart/>
    }

]
} 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);