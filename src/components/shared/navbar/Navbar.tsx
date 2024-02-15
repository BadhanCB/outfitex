import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import LeftSideBar from "./LeftSideBar";
import OfferNotificationBar from "./OfferNotificationBar";
import BasicNavigationOptions from "./BasicNavigationOptions";
import UserInteractionOption from "./UserInteractionOption";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50">
            <OfferNotificationBar />
            {/*Navigation bar */}
            <nav className="bg-white">
                <ul className="wrapper flex items-center md:gap-8 lg:gap-12 xl:gap-16 px-1 sm:px-2 md:px-4 py-4">
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
                                    className="h-5 md:h-6 lg:h-7 w-auto"
                                />
                                <p className="text-lg md:text-xl lg:text-3xl">
                                    outfitex
                                </p>
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
