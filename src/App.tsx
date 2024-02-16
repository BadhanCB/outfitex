import { lazy } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard/Dashboard";
import SellerPrivateRoute from "./routes/SellerPrivateRoute";
import UserPrivateRoute from "./routes/UserPrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const About = lazy(() => import("./pages/About/About"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const InventoryLayout = lazy(() => import("./layouts/InventoryLayout"));
const InventoryOverview = lazy(
    () => import("./pages/InventoryOverview/InventoryOverview")
);
const AddProduct = lazy(() => import("./pages/AddProduct/AddProduct"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const SellerRegistration = lazy(
    () => import("./pages/SellerRegistration/SellerRegistration")
);

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
                {
                    path: "/inventory",
                    element: (
                        <SellerPrivateRoute>
                            <InventoryLayout />
                        </SellerPrivateRoute>
                    ),
                    children: [
                        { index: true, element: <InventoryOverview /> },
                        {
                            path: "/inventory/add-product",
                            element: <AddProduct />,
                        },
                    ],
                },
                {
                    path: "/dashboard",
                    element: (
                        <UserPrivateRoute>
                            <Dashboard />
                        </UserPrivateRoute>
                    ),
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/signup",
                    element: <Signup />,
                },
                {
                    path: "/seller-registration",
                    element: <SellerRegistration />,
                },
            ],
        },
    ]);

    return (
        <AuthProvider>
            <RouterProvider router={router} />
            <Toaster />
        </AuthProvider>
    );
}

export default App;
