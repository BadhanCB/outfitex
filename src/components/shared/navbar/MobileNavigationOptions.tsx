import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MobileNavigationOptions = () => {
    const { user } = useAuth();

    return (
        <div className="h-full w-full flex md:hidden flex-col gap-4">
            <li>
                <Link
                    className="hover:text-amber-400 transition-colors animated-border-b"
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className="hover:text-amber-400 transition-colors animated-border-b"
                    to="/shop"
                >
                    Shop
                </Link>
            </li>
            <li>
                <Link
                    className="hover:text-amber-400 transition-colors animated-border-b"
                    to="/blogs"
                >
                    Blogs
                </Link>
            </li>
            <li>
                <Link
                    className="hover:text-amber-400 transition-colors animated-border-b"
                    to="/about"
                >
                    About
                </Link>
            </li>
            {user?.role === "user" ? (
                <li>
                    <Link
                        className="hover:text-amber-400 transition-colors animated-border-b"
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            ) : user?.role === "seller" ? (
                <li>
                    <Link
                        className="hover:text-amber-400 transition-colors animated-border-b"
                        to="/inventory"
                    >
                        Inventory
                    </Link>
                </li>
            ) : (
                user?.role === "admin" && (
                    <li>
                        <Link
                            className="hover:text-amber-400 transition-colors animated-border-b"
                            to="/admin-panel"
                        >
                            Admin Panel
                        </Link>
                    </li>
                )
            )}
        </div>
    );
};

export default MobileNavigationOptions;
