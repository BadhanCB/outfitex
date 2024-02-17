import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <main className="grid grid-cols-12 gap-6">
            <section className="col-span-3">
                <ul>
                    <li>
                        <Link to="/dashboard">Overview</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orders">Orders</Link>
                    </li>
                </ul>
            </section>
            <section className="col-span-9">
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </section>
        </main>
    );
};

export default Dashboard;
