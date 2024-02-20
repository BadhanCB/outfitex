import { Suspense } from "react";
import { CgArrowRight } from "react-icons/cg";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
    const pathName = useLocation().pathname;

    return (
        <section className="wrapper grid grid-cols-12 gap-6 py-12 px-4 md:px-8 lg:px-12">
            <section className="col-span-12 md:col-span-3 lg:col-span-2">
                <ul className="text-xl flex flex-col gap-4">
                    <li>
                        <Link
                            className={`flex gap-1 items-center w-max ${
                                pathName === "/dashboard" && "text-amber-500"
                            }`}
                            to="/dashboard"
                        >
                            <CgArrowRight
                                className={`transition-transform origin-left ${
                                    pathName === "/dashboard"
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`}
                            />
                            <span className="animated-border-b">Accounts</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex gap-1 items-center w-max ${
                                pathName === "/dashboard/orders" &&
                                "text-amber-500"
                            }`}
                            to="/dashboard/orders"
                        >
                            <CgArrowRight
                                className={`transition-transform origin-left ${
                                    pathName === "/dashboard/orders"
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`}
                            />
                            <span className="animated-border-b">Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex gap-1 items-center w-max ${
                                pathName === "/dashboard/cart" &&
                                "text-amber-500"
                            }`}
                            to="/dashboard/cart"
                        >
                            <CgArrowRight
                                className={`transition-transform origin-left ${
                                    pathName === "/dashboard/cart"
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`}
                            />
                            <span className="animated-border-b">Cart</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex gap-1 items-center w-max ${
                                pathName === "/dashboard/wishlist" &&
                                "text-amber-500"
                            }`}
                            to="/dashboard/wishlist"
                        >
                            <CgArrowRight
                                className={`transition-transform origin-left ${
                                    pathName === "/dashboard/wishlist"
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`}
                            />
                            <span className="animated-border-b">Wishlist</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`flex gap-1 items-center w-max ${
                                pathName === "/dashboard/checkout" &&
                                "text-amber-500"
                            }`}
                            to="/dashboard/checkout"
                        >
                            <CgArrowRight
                                className={`transition-transform origin-left ${
                                    pathName === "/dashboard/checkout"
                                        ? "scale-x-100"
                                        : "scale-x-0"
                                }`}
                            />
                            <span className="animated-border-b">Checkout</span>
                        </Link>
                    </li>
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
