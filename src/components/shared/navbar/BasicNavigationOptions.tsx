import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";

const BasicNavigationOptions = () => {
    const { user } = useAuth();

    const varients = {
        initial: { opacity: 0, y: -30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <motion.div
            variants={varients}
            initial="initial"
            whileInView="animate"
            className="hidden md:flex items-center gap-4 md:gap-6 xl:gap-8 mx-auto uppercase"
        >
            <motion.li variants={varients}>
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
            </motion.li>
            <motion.li variants={varients}>
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
            </motion.li>
            <motion.li variants={varients}>
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
            </motion.li>
            <motion.li variants={varients}>
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
            </motion.li>
            {user?.role === "user" ? (
                <motion.li variants={varients}>
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
                </motion.li>
            ) : user?.role === "seller" ? (
                <motion.li variants={varients}>
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
                </motion.li>
            ) : (
                user?.role === "admin" && (
                    <motion.li variants={varients}>
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
                    </motion.li>
                )
            )}
        </motion.div>
    );
};

export default BasicNavigationOptions;
