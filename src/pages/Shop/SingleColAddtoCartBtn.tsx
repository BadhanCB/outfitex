import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Product } from "../../types";

type Props = {
    product: Product;
};

const SingleColAddtoCartBtn = ({ product }: Props) => {
    const { setCart } = useAuth();
    const { _id, name, price, image, seller } = product;

    const handleClick = () => {
        setCart((prevCrt) => {
            const index = prevCrt.findIndex((cp) => cp._id === _id);
            if (index > -1) {
                prevCrt[index].quantity = (prevCrt[index].quantity || 0) + 1;
                toast.success("Increased Quantity of the Product");
                return prevCrt;
            }

            toast.success("Product added to the Cart");
            return [
                ...prevCrt,
                { _id, name, price, image, seller, quantity: 1 },
            ];
        });
    };

    return (
        <button
            onClick={handleClick}
            className="px-8 py-2 bg-gray-900 hover:bg-gray-700 text-gray-50 font-medium transition duration-300 rounded-md"
        >
            Add to cart
        </button>
    );
};

export default SingleColAddtoCartBtn;
