import { Link } from "react-router-dom";
import { Product } from "../../../types";
import AddtoWishListBtn from "../../ui/AddtoWishListBtn";
import AddtoCartBtn from "../../ui/AddtoCartBtn";
import ViewProductLinkBtn from "../../ui/ViewProductLinkBtn";
import { motion } from "framer-motion";

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{
                y: -5,
                scale: 1.05,
            }}
            className="h-full w-full bg-gray-50 hover:bg-white hover:shadow-xl group overflow-hidden"
        >
            <div className="h-96 w-full bg-gray-200 relative">
                <img
                    src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    draggable={false}
                />
                <AddtoCartBtn product={product} />
                <div className="absolute top-0 right-0 flex flex-col gap-4 p-3">
                    <AddtoWishListBtn product={product} />
                    <ViewProductLinkBtn product={product} />
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
        </motion.div>
    );
};

export default ProductCard;
