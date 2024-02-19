import { Outlet } from "react-router-dom";
import InventorySidebar from "../components/shared/inventorySidebar/InventorySidebar";
import { Suspense } from "react";

const InventoryLayout = () => {
    return (
        <section className="w-full min-h-[75vh] grid grid-cols-12 gap-6">
            <section className="col-span-12 md:col-span-3">
                <InventorySidebar />
            </section>
            <section className="col-span-12 md:col-span-9">
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </section>
        </section>
    );
};

export default InventoryLayout;
