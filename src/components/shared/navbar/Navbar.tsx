import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import LeftSideBar from "./LeftSideBar";
import OfferNotificationBar from "./OfferNotificationBar";
import BasicNavigationOptions from "./BasicNavigationOptions";
import UserInteractionOption from "./UserInteractionOption";
import { motion } from "framer-motion";

const Navbar = () => {
    const varients = {
        initial: { opacity: 0, x: 100 },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <header className="sticky top-0 z-50">
            <OfferNotificationBar />
            {/*Navigation bar */}
            <nav className="bg-white">
                <ul className="max-w-screen-2xl mx-auto flex items-center md:gap-8 lg:gap-12 xl:gap-16 px-1 sm:px-2 md:px-4 py-4">
                    <div className="flex-1 md:flex-none flex gap-2 md:gap-4 lg:gap-6 items-center">
                        {/* Left side bar for category */}
                        <LeftSideBar />
                        {/* Brand logo and title */}
                        <li className="mx-auto md:mx-0">
                            <Link
                                to="/"
                                className="uppercase flex gap-1 md:gap-2 items-center font-semibold"
                            >
                                <img
                                    src={logo}
                                    alt="outfitex logo"
                                    className="h-5 md:h-6 lg:h-7 xl:h-8 w-auto"
                                />
                                <motion.p
                                    variants={varients}
                                    initial="initial"
                                    whileInView="animate"
                                    className="text-lg md:text-xl lg:text-3xl"
                                >
                                    {"outfitex".split("").map((w, i) => (
                                        <motion.span
                                            variants={varients}
                                            key={i}
                                        >
                                            {w}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </Link>
                        </li>
                    </div>
                    {/* Nav Items */}
                    <div className="md:flex-1 flex items-center justify-end md:justify-between text-base font-semibold mr-4 md:mr-0">
                        {/* Page Route options */}
                        <BasicNavigationOptions />
                        {/* User Interaction Options */}
                        <UserInteractionOption />
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
