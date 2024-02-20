import { Suspense } from "react";
import Footer from "../components/shared/footer/Footer";
import Navbar from "../components/shared/navbar/Navbar";
import MainSkeleton from "../components/shared/skeletons/MainSkeleton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-urbanist">
            <Navbar />
            <main>
                <Suspense fallback={<MainSkeleton />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
