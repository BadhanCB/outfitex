import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const BasicNavigationOptions = () => {
    const { user } = useAuth();

    return (
        <div className="hidden md:flex items-center gap-4 md:gap-6 xl:gap-8 mx-auto">
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-amber-400 transition-colors animated-border-b"
                            : "hover:text-amber-400 transition-colors animated-border-b"
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-amber-400 transition-colors animated-border-b"
                            : "hover:text-amber-400 transition-colors animated-border-b"
                    }
                    to="/shop"
                >
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-amber-400 transition-colors animated-border-b"
                            : "hover:text-amber-400 transition-colors animated-border-b"
                    }
                    to="/blogs"
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "text-amber-400 transition-colors animated-border-b"
                            : "hover:text-amber-400 transition-colors animated-border-b"
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </li>
            {user?.role === "user" ? (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-400 transition-colors animated-border-b"
                                : "hover:text-amber-400 transition-colors animated-border-b"
                        }
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                </li>
            ) : user?.role === "seller" ? (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-400 transition-colors animated-border-b"
                                : "hover:text-amber-400 transition-colors animated-border-b"
                        }
                        to="/inventory"
                    >
                        Inventory
                    </NavLink>
                </li>
            ) : (
                user?.role === "admin" && (
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-400 transition-colors animated-border-b"
                                    : "hover:text-amber-400 transition-colors animated-border-b"
                            }
                            to="/admin-panel"
                        >
                            Admin Panel
                        </NavLink>
                    </li>
                )
            )}
        </div>
    );
};

export default BasicNavigationOptions;
