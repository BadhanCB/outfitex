import { Link } from "react-router-dom";

const BasicNavigationOptions = () => {
    return (
        <div className="hidden md:flex items-center gap-4 md:gap-6 xl:gap-8 mx-auto">
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
        </div>
    );
};

export default BasicNavigationOptions;
