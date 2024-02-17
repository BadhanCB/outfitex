import { Link } from "react-router-dom";
import { Product } from "../../../types";

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    return (
        <div className="h-full w-full bg-gray-50 group">
            <div className="h-96 w-full bg-gray-200 relative">
                <img
                    src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    draggable={false}
                />
                <button className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 w-full bg-gray-800 text-white font-medium scale-y-100 lg:scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom">
                    Add to cart
                </button>
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
