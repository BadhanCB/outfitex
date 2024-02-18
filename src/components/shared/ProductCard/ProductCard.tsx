import { Link } from "react-router-dom";
import { Product } from "../../../types";
import { TbEye } from "react-icons/tb";
import AddtoWishListBtn from "../../ui/AddtoWishListBtn";
import AddtoCartBtn from "../../ui/AddtoCartBtn";

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    return (
        <div className="h-full w-full bg-gray-50 group overflow-hidden">
            <div className="h-96 w-full bg-gray-200 relative">
                <img
                    src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    draggable={false}
                />
                <AddtoCartBtn product={product} />
                <div className="absolute top-0 right-0 flex flex-col gap-4 p-3">
                    <AddtoWishListBtn product={product} />
                    <Link
                        to={`/product/${product.slug}`}
                        className="tooltip-left relative bg-white hover:bg-gray-500 hover:text-gray-50 p-2 rounded-xl shadow-md translate-x-6 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition duration-300 delay-150"
                        data-tooltip="View"
                    >
                        <TbEye className="text-2xl" />
                    </Link>
                </div>
            </div>
            <div className="p-4">
                <Link
                    to={`/product/${product.slug}`}
                    className="text-lg font-semibold"
                >
                    {product.name && product.name?.length > 28
                        ? product.name?.slice(0, 28) + "..."
                        : product.name}
                </Link>
                <p>$ {product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
