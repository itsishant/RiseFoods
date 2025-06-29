        
    import ReactDOM from "react-dom/client";
    import Heading from "./components/Heading";
    import Restro from "./components/Restro";
    import Body from "./components/Body";
    import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
    import About from "/src/components/About";
    import Contact from "./components/Contact";
    import Error from "/src/components/Error";
    import Restaurant from "./components/Restaurants";
import Cart from "./components/Cart";


    const App = () => {
        return (
            <div className="app">
                <Heading />
                <Outlet />
            </div>
        )
    } 

    const appRouter = createBrowserRouter([{
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Body />
            },

            {
                path: "/home",
                element: <Body />
            },
            
            {
                path: "/about",
                element: <About />
            },

            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/Restaurants/:resId",
                element: <Restaurant /> 
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }])

    export default appRouter;
