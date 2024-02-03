import { lazy } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const About = lazy(() => import("./pages/About/About"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                {
                    path: "/blogs",
                    element: <Blogs />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/wishlist",
                    element: <Wishlist />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
