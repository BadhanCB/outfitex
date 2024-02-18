import { useLoaderData } from "react-router-dom";
import { Product } from "../../types";
import { TbCurrencyTaka } from "react-icons/tb";
import { GoDot } from "react-icons/go";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaRegHeart, FaShippingFast } from "react-icons/fa";
import { useState } from "react";
import { RiSubtractLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SingleProduct = () => {
    const product = useLoaderData() as Product;
    const [quantity, setQuantity] = useState<number>(1);
    const { cart, setCart, setWishList } = useAuth();
    const { _id, name, price, seller, image } = product;

    const handleAddtoCart = () => {
        setCart((prev) => [
            ...prev,
            { _id, name, price, seller, image, quantity },
        ]);
    };

    const handleAddToWishlist = () => {
        const { _id, name, price, image, seller } = product;
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
        <section className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 my-12 px-4 md:px-8 lg:px-12">
            <div>
                <div className="h-auto w-full bg-gray-50 relative">
                    <img
                        src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                        alt={product.name}
                        className="h-full w-full object-contain"
                        draggable={false}
                    />
                </div>
            </div>
            <div>
                <p className="uppercase tracking-wide text-gray-400">
                    {product.category}
                </p>
                <h1 className="capitalize tracking-wider text-3xl font-medium mb-4">
                    {product.name}
                </h1>
                <h3 className="flex items-center gap-1 text-2xl mb-2">
                    <TbCurrencyTaka />
                    {product.price} Taka
                </h3>
                <p className="text-gray-500 mb-3">{product.description}</p>
                <div>
                    <p className="font-semibold">Quantity</p>
                    <div className="flex flex-wrap mt-2 gap-4">
                        <div className="flex items-center text-xl border-2 rounded-md">
                            <button
                                onClick={() =>
                                    setQuantity((prev) =>
                                        prev === 1 ? 1 : prev - 1
                                    )
                                }
                                className="px-4 py-2 relative tooltip"
                                data-tooltip="Decrease Quantity"
                            >
                                <RiSubtractLine />
                            </button>
                            <p className="px-8 py-2 border-2 border-b-0 border-t-0">
                                {quantity}
                            </p>
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="px-4 py-2 relative tooltip"
                                data-tooltip="Increase Quantity"
                            >
                                <IoMdAdd />
                            </button>
                        </div>
                        <button
                            disabled={
                                cart.find((cp) => cp._id === _id) ? true : false
                            }
                            onClick={handleAddtoCart}
                            className="px-12 py-2 bg-gray-900 hover:bg-slate-700 text-lg text-gray-50 font-semibold capitalize rounded-md animate-shake disabled:bg-gray-600 disabled:cursor-not-allowed transition hover:animate-none"
                        >
                            {cart.find((cp) => cp._id === _id)
                                ? "Product added to the cart"
                                : "Add to cart"}
                        </button>
                        <button
                            onClick={handleAddToWishlist}
                            className="p-3 border-2 rounded-md relative tooltip text-xl"
                            data-tooltip="Add to Wishlist"
                        >
                            <FaRegHeart className="animate-heartbeat" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-1 my-4">
                    <GoDot />
                    <p>Ready To Ship | Order Today</p>
                    <HiOutlineExclamationCircle className="text-gray-400" />
                </div>
                <div className="flex items-center text-xl gap-3 p-4 bg-gray-100 text-slate-800">
                    <FaShippingFast className="text-4xl" />
                    <p className="flex items-center">
                        Free shipping to your place for orders over
                        <span className="font-bold flex items-center">
                            <TbCurrencyTaka />
                            1000.00
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
