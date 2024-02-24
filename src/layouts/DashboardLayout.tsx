import { Suspense } from "react";
import { CgArrowRight } from "react-icons/cg";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
    const pathName = useLocation().pathname;
    const dashboardOptions = [
        { title: "Account", path: "/dashboard" },
        { title: "Orders", path: "/dashboard/orders" },
        { title: "Cart", path: "/dashboard/cart" },
        { title: "Wishlist", path: "/dashboard/wishlist" },
        { title: "Checkout", path: "/dashboard/checkout" },
    ];

    return (
        <section className="wrapper grid grid-cols-12 gap-6 py-12 px-4 md:px-8 lg:px-12">
            <section className="col-span-12 md:col-span-3 lg:col-span-2">
                <ul className="text-xl flex flex-col gap-4">
                    {dashboardOptions.map((option, i) => (
                        <li key={i}>
                            <Link
                                className={`flex gap-1 items-center w-max ${
                                    pathName === option.path && "text-amber-500"
                                }`}
                                to={option.path}
                            >
                                <CgArrowRight
                                    className={`transition-transform origin-left ${
                                        pathName === option.path
                                            ? "scale-x-100"
                                            : "scale-x-0"
                                    }`}
                                />
                                <span className="animated-border-b">
                                    {option.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="col-span-12 md:col-span-9 lg:col-span-10 bg-gray-50 shadow-inner">
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </section>
        </section>
    );
};

export default DashboardLayout;
