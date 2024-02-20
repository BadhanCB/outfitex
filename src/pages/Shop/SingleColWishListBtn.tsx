import { FaRegHeart } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { Product } from "../../types";
import toast from "react-hot-toast";

type Props = {
    product: Product;
};

const SingleColWishListBtn = ({ product }: Props) => {
    const { setWishList } = useAuth();
    const { _id, name, price, image, seller } = product;

    const handleClick = () => {
        setWishList((prevWishList) => {
            if (prevWishList.findIndex((p) => p._id === _id) > -1) {
                toast.error("Already in Your Wishlist");
                return prevWishList;
            }

            toast.success("Added to your Wishlist");
            return [...prevWishList, { _id, name, price, image, seller }];
        });
    };

    return (
        <button
            onClick={handleClick}
            className="tooltip-top relative bg-white hover:bg-gray-500 hover:text-gray-50 p-2 rounded-xl shadow-md transition duration-300"
            data-tooltip="Add to WishList"
        >
            <FaRegHeart className="text-2xl animate-heartbeat" />
        </button>
    );
};

export default SingleColWishListBtn;
