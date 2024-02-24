import { lazy } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

// Basic Public Pages
import MainLayout from "./layouts/MainLayout";
const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));
const Category = lazy(() => import("./pages/Category/Category"));
const Collection = lazy(() => import("./pages/Collection/Collection"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const About = lazy(() => import("./pages/About/About"));

// Inventory Related page
const InventoryLayout = lazy(() => import("./layouts/InventoryLayout"));
const InventoryOverview = lazy(
    () => import("./pages/InventoryOverview/InventoryOverview")
);
const AddProduct = lazy(() => import("./pages/AddProduct/AddProduct"));

// Auth Related Page
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const SellerRegistration = lazy(
    () => import("./pages/SellerRegistration/SellerRegistration")
);

// Dashboard Related Pages
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const UserAccount = lazy(() => import("./pages/UserAccount/UserAccount"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const UserOrders = lazy(() => import("./pages/UserOrders/UserOrders"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));

//Private Routes
const SellerPrivateRoute = lazy(() => import("./routes/SellerPrivateRoute"));
const UserPrivateRoute = lazy(() => import("./routes/UserPrivateRoute"));

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
                            <DashboardLayout />
                        </UserPrivateRoute>
                    ),
                    children: [
                        { index: true, element: <UserAccount /> },
                        { path: "/dashboard/orders", element: <UserOrders /> },
                        { path: "/dashboard/checkout", element: <Checkout /> },
                        { path: "/dashboard/wishlist", element: <Wishlist /> },
                        { path: "/dashboard/cart", element: <Cart /> },
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
