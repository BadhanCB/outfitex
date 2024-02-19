import { lazy } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard/Dashboard";
import SellerPrivateRoute from "./routes/SellerPrivateRoute";
import UserPrivateRoute from "./routes/UserPrivateRoute";
import Category from "./pages/Category/Category";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));
const Collection = lazy(() => import("./pages/Collection/Collection"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const About = lazy(() => import("./pages/About/About"));
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
const Overview = lazy(() => import("./pages/Overview/Overview"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Orders = lazy(() => import("./pages/Orders/Orders"));

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
                    path: "/product/:slug",
                    element: <SingleProduct />,
                    loader: async ({ params }) =>
                        await fetch(
                            `${import.meta.env.VITE_API_BASE_URL}/product/${
                                params.slug
                            }`
                        ),
                },
                {
                    path: "/collection/:collname",
                    element: <Collection />,
                    loader: async ({ params }) =>
                        await fetch(
                            `${
                                import.meta.env.VITE_API_BASE_URL
                            }/products/collection/${params.collname}`
                        ),
                },
                {
                    path: "/category/:catname",
                    element: <Category />,
                    loader: async ({ params }) =>
                        await fetch(
                            `${
                                import.meta.env.VITE_API_BASE_URL
                            }/products/category/${params.catname}`
                        ),
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
                    children: [
                        { index: true, element: <Overview /> },
                        { path: "/dashboard/orders", element: <Orders /> },
                        { path: "/dashboard/checkout", element: <Checkout /> },
                    ],
                },
                { path: "/cart", element: <Cart /> },
                { path: "/wishlist", element: <Wishlist /> },
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
