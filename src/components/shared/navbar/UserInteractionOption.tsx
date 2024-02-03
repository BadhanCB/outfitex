import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Badge from "../../ui/Badge";

const UserInteractionOption = () => {
    return (
        <div className="flex items-center gap-4 font-normal">
            <li className="flex lg:border rounded-lg lg:px-8">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search entire store here..."
                    className="bg-transparent focus:outline-none p-2 text-lg hidden lg:inline-block"
                />
                <button className="bg-transparent lg:p-2 text-2xl">
                    <FiSearch />
                </button>
            </li>
            <li>
                <button
                    className="m-0 align-middle relative tooltip"
                    data-tooltip="Profile"
                >
                    <FiUser className="text-2xl hover:text-amber-400 transition-colors" />
                </button>
            </li>
            <li className="hidden md:list-item">
                <Link
                    to="/wishlist"
                    className="relative tooltip"
                    data-tooltip="Wishlist"
                >
                    <FiHeart className="text-2xl hover:text-amber-400 transition-colors" />
                    <Badge className="bg-amber-400 absolute -top-2 -right-3">
                        0
                    </Badge>
                </Link>
            </li>
            <li>
                <button
                    className="m-0 align-middle relative tooltip"
                    data-tooltip="Cart"
                >
                    <FiShoppingCart className="text-2xl hover:text-amber-400 transition-colors" />
                    <Badge className="bg-amber-400 absolute -top-2 -right-3">
                        1
                    </Badge>
                </button>
            </li>
        </div>
    );
};

export default UserInteractionOption;
