import { FiHeart, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Badge from "../../ui/Badge";
import useAuth from "../../../hooks/useAuth";
import UserProfileBasicOption from "./UserProfileBasicOption";
import CartButton from "./CartButton";

const UserInteractionOption = () => {
    const { user, wishlist } = useAuth();

    return (
        <div className="flex items-center gap-2 md:gap-4 font-normal">
            {/* <li className="flex lg:border rounded-lg xl:px-8">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search entire store here..."
                    className="bg-transparent focus:outline-none p-2 pr-0 text-lg hidden xl:inline-block"
                />
                <button className="bg-transparent lg:p-2 text-2xl">
                    <FiSearch />
                </button>
            </li> */}
            <li>
                {user?.email ? (
                    <UserProfileBasicOption />
                ) : (
                    <Link
                        to="/login"
                        className="m-0 align-middle relative tooltip"
                        data-tooltip="Login"
                    >
                        <FiLogIn className="text-2xl hover:text-amber-400 transition-colors" />
                    </Link>
                )}
            </li>
            <li className="hidden md:list-item">
                <Link
                    to="/wishlist"
                    className="relative tooltip"
                    data-tooltip="Wishlist"
                >
                    <FiHeart className="text-2xl hover:text-amber-400 transition-colors" />
                    <Badge className="bg-amber-400 absolute -top-2 -right-3">
                        {wishlist.length}
                    </Badge>
                </Link>
            </li>
            <CartButton />
        </div>
    );
};

export default UserInteractionOption;
