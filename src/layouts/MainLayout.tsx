import { Suspense } from "react";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";
import Skeleton from "../components/shared/skeleton/Skeleton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <main className="bg-gray-50 font-urbanist w-full relative">
            <Navbar />
            <Suspense fallback={<Skeleton />}>
                <Outlet />
            </Suspense>
            <Footer />
        </main>
    );
};

export default MainLayout;
