import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./components/Error";
import About from "./components/About";
import Contactus from "./components/Contactus";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
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
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);