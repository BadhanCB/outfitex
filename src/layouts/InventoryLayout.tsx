import { Outlet } from "react-router-dom";
import InventorySidebar from "../components/shared/inventorySidebar/InventorySidebar";
import { Suspense } from "react";

const InventoryLayout = () => {
    return (
        <section className="w-full min-h-[calc(100vh-68px)] grid grid-cols-12 gap-6">
            <section className="col-span-3">
                <InventorySidebar />
            </section>
            <section className="col-span-9">
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </section>
        </section>
    );
};

export default InventoryLayout;
