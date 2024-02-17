import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className="wrapper grid grid-cols-12 gap-6 py-12 px-4 md:px-8 lg:px-12">
            <section className="col-span-3">
                <ul>
                    <li>
                        <Link to="/dashboard">Overview</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/checkout">Checkout</Link>
                    </li>
                </ul>
            </section>
            <section className="col-span-9 bg-gray-50 shadow-inner">
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </section>
        </section>
    );
};

export default Dashboard;
