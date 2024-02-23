import { Link } from "react-router-dom";
import AddtoCartBtn from "../../components/ui/AddtoCartBtn";
import AddtoWishListBtn from "../../components/ui/AddtoWishListBtn";
import ViewProductLinkBtn from "../../components/ui/ViewProductLinkBtn";
import { Product } from "../../types";
import SingleColAddtoCartBtn from "./SingleColAddtoCartBtn";
import SingleColWishListBtn from "./SingleColWishListBtn";
import { TbEye } from "react-icons/tb";

type Props = {
    product: Product;
    colNum: number;
};

const ShopProductCard = ({ product, colNum }: Props) => {
    return (
        <div
            className={`h-full w-full bg-gray-50 group ${
                colNum === 1 && "grid grid-cols-3 items-center"
            }`}
        >
            <div
                className={`${
                    colNum === 1 ? "h-52" : "h-96 w-full"
                } bg-gray-200 relative`}
            >
                <img
                    loading="lazy"
                    src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    draggable={false}
                />
                {colNum !== 1 && (
                    <>
                        <AddtoCartBtn product={product} />
                        <div className="absolute top-0 right-0 flex flex-col gap-4 p-3">
                            <AddtoWishListBtn product={product} />
                            <ViewProductLinkBtn product={product} />
                        </div>
                    </>
                )}
            </div>
            <div className={`p-4 ${colNum === 1 && "col-span-2"}`}>
                {colNum !== 1 ? (
                    <>
                        <p className="uppercase text-amber-700">
                            {product.category}
                        </p>
                        <Link
                            to={`/product/${product.slug}`}
                            className="text-lg font-semibold"
                        >
                            {product.name}
                        </Link>
                        <p>$ {product.price}</p>
                    </>
                ) : (
                    <>
                        <p className="uppercase text-amber-700">
                            {product.category}
                        </p>
                        <Link
                            to={`/product/${product.slug}`}
                            className="text-2xl font-semibold"
                        >
                            {product.name}
                        </Link>
                        <p className="text-xl">$ {product.price}</p>
                        <p className="text-gray-500 my-4">
                            {product.description?.slice(0, 250)}
                        </p>
                        <div className="flex gap-4">
                            <SingleColAddtoCartBtn product={product} />
                            <SingleColWishListBtn product={product} />
                            <Link
                                to={`/product/${product.slug}`}
                                className="tooltip-top relative bg-white hover:bg-gray-500 hover:text-gray-50 p-2 rounded-xl shadow-md transition duration-300"
                                data-tooltip="View"
                            >
                                <TbEye className="text-2xl" />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShopProductCard;
