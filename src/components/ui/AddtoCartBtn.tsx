import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Product } from "../../types";

type Props = {
    product: Product;
};

const AddtoCartBtn = ({ product }: Props) => {
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
            className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 w-full bg-gray-900 hover:bg-gray-700 text-gray-50 font-medium scale-y-100 lg:scale-y-0 group-hover:scale-y-100 transition duration-300 origin-bottom"
        >
            Add to cart
        </button>
    );
};

export default AddtoCartBtn;
