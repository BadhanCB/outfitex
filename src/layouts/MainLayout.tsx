import { Suspense } from "react";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";
import Skeleton from "../components/shared/skeleton/Skeleton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-gray-50 font-urbanist">
            <Navbar />
            <main>
                <Suspense fallback={<Skeleton />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
