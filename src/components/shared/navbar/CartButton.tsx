import { FiShoppingCart, FiX } from "react-icons/fi";
import Badge from "../../ui/Badge";
import { MouseEvent, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ImBin } from "react-icons/im";

const CartButton = () => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);
    const { cart, setCart } = useAuth();
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsOpenSideBar(false);
    };

    const handleRemove = (id?: string) => {
        setCart((prev) => prev.filter((pd) => pd._id !== id));
    };

    return (
        <li className="relative">
            <button
                onClick={() => setIsOpenSideBar(true)}
                className="m-0 align-middle relative tooltip-top"
                data-tooltip="Cart"
            >
                <FiShoppingCart className="text-2xl hover:text-amber-400 transition-colors" />
                <Badge className="bg-lime-500 text-gray-50 absolute -top-2 -right-3">
                    {cart.length}
                </Badge>
            </button>
            <aside
                onClick={handleClick}
                className={`fixed top-0 ${
                    isOpenSideBar
                        ? "right-0 bg-[rgba(54,37,37,0.5)]"
                        : "-right-full bg-transparent"
                } transition-all duration-1000 w-full h-screen z-50 flex justify-end`}
            >
                <ul
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white h-full overflow-y-scroll hide-scrollbar w-80 sm:w-96 md:w-[25rem] lg:w-[32rem] p-4 md:p-6 lg:p-8 relative flex flex-col gap-6 justify-between"
                >
                    <h1 className="text-4xl flex gap-2 items-center">
                        <FiShoppingCart />
                        Shopping Cart
                    </h1>
                    {!cart.length ? (
                        <div className="flex-1 text-center text-orange-400 text-3xl">
                            <p>No Product Added Yet</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex-1 flex flex-col gap-6">
                                {cart.map((cp) => (
                                    <li
                                        key={cp._id}
                                        className="flex items-center gap-4 relative"
                                    >
                                        <div className="w-14 md:w-16 lg:w-20 xl:w-24 h-14 md:h-16 lg:h-20 xl:h-24 overflow-hidden rounded">
                                            <div>
                                                <img
                                                    src={`data:${cp?.image?.type};base64, ${cp?.image?.data}`}
                                                    alt={cp.name}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-base lg:text-lg xl:text-xl font-bold tracking-wider">
                                                {cp.name && cp.name?.length > 25
                                                    ? cp.name?.slice(0, 25) +
                                                      "..."
                                                    : cp.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base">
                                                <span className="text-gray-400">
                                                    Price:{" "}
                                                </span>
                                                {cp.price}
                                            </p>
                                            <p className="text-xs sm:text-sm md:text-base">
                                                <span className="text-gray-400">
                                                    Quantity:{" "}
                                                </span>
                                                <span className="font-medium">
                                                    {cp.quantity}
                                                </span>
                                            </p>
                                            <p className="text-xs sm:text-sm md:text-base">
                                                <span className="text-gray-400">
                                                    Sub-Total:{" "}
                                                </span>
                                                {cp.price && cp.quantity
                                                    ? cp?.price * cp?.quantity
                                                    : ""}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(cp._id)}
                                            className="absolute top-1/2 -translate-y-1/2 right-0 text-orange-400 tooltip-left"
                                            data-tooltip="Remove from Cart"
                                        >
                                            <ImBin className="text-sm md:text-base lg:text-lg" />
                                        </button>
                                    </li>
                                ))}
                            </div>
                            <div>
                                <div className="w-full h-[1px] bg-gray-300"></div>
                                <div className="w-full flex items-center justify-between">
                                    <p>Total:</p>
                                    <p>
                                        {cart.reduce(
                                            (value, cp) =>
                                                cp.price && cp.quantity
                                                    ? value +
                                                      cp.price * cp.quantity
                                                    : 0,
                                            0
                                        )}
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsOpenSideBar(false);
                                        navigate("/cart");
                                    }}
                                    className="w-full bg-gray-100 p-3 border font-bold rounded my-4"
                                >
                                    View Cart
                                </button>
                                <button
                                    onClick={() => {
                                        setIsOpenSideBar(false);
                                        navigate("/dashboard/checkout");
                                    }}
                                    className="w-full bg-gray-800 text-gray-50 p-3 border font-bold rounded"
                                >
                                    Checkout
                                </button>
                            </div>
                        </>
                    )}
                    <button
                        onClick={() => setIsOpenSideBar(false)}
                        className="absolute top-2 right-2 bg-gray-100 rounded-full p-1 cursor-pointer"
                    >
                        <FiX />
                    </button>
                </ul>
            </aside>
        </li>
    );
};

export default CartButton;
