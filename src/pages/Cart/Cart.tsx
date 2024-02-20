import { RiSubtractLine } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { IoMdAdd } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, setCart, user } = useAuth();
    const navigate = useNavigate();

    const handleIncreaseQty = (id?: string) => {
        setCart((prevCart) =>
            prevCart.map((pd) =>
                pd._id === id
                    ? { ...pd, quantity: pd.quantity && pd.quantity + 1 }
                    : pd
            )
        );
        // const restProducs = cart.filter((cp) => cp._id !== id);
        // const product = cart.find((cp) => cp._id === id);

        // if (!product?.quantity) {
        //     return;
        // }

        // product.quantity += 1;
        // setCart([...restProducs, product]);
    };

    const handleDecreaseQty = (id?: string) => {
        setCart((prevCart) =>
            prevCart.map((pd) =>
                pd._id === id
                    ? {
                          ...pd,
                          quantity:
                              pd.quantity && pd.quantity > 1
                                  ? pd.quantity - 1
                                  : pd.quantity,
                      }
                    : pd
            )
        );
        // const restProducs = cart.filter((cp) => cp._id !== id);
        // const product = cart.find((cp) => cp._id === id);
        // if (!product?.quantity) {
        //     return;
        // }
        // product.quantity = product.quantity <= 1 ? 1 : product.quantity - 1;
        // setCart([...restProducs, product]);
    };

    const handleRemove = (id?: string) => {
        setCart((prevCart) => prevCart.filter((pd) => pd._id !== id));
    };

    return (
        <>
            <section className="bg-gray-50 py-12">
                <h1 className="text-center text-4xl">Shopping Cart</h1>
            </section>
            <section className="wrapper my-12 mx-4 md:mx-8 lg:mx-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 overflow-x-auto">
                    <table className="w-full text-center table-auto">
                        <thead className="text-gray-400 border-b-2">
                            <tr>
                                <th className="pb-2 mb-2">Product</th>
                                <th className="pb-2 mb-2">Price</th>
                                <th className="pb-2 mb-2">Quantity</th>
                                <th className="pb-2 mb-2">Total</th>
                                <th className="pb-2 mb-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cp) => (
                                <tr key={cp._id} className="border-b-2">
                                    <td className="flex gap-4 items-center py-2">
                                        <div className="w-20 h-20">
                                            <img
                                                src={`data:${cp?.image?.type};base64, ${cp?.image?.data}`}
                                                alt={cp.name}
                                                className="h-full w-full object-contain"
                                                draggable={false}
                                            />
                                        </div>
                                        <h3>
                                            {cp.name && cp.name?.length > 25
                                                ? cp.name?.slice(0, 25) + "..."
                                                : cp.name}
                                        </h3>
                                    </td>
                                    <td>{cp.price}</td>
                                    <td>
                                        <div className="flex items-center text-xl border-2 rounded-md w-max mx-auto">
                                            <button
                                                onClick={() =>
                                                    handleDecreaseQty(cp._id)
                                                }
                                                className="px-4 py-2 relative tooltip-top"
                                                data-tooltip="Decrease Quantity"
                                            >
                                                <RiSubtractLine />
                                            </button>
                                            <p className="px-8 py-2 border-2 border-b-0 border-t-0">
                                                {cp.quantity}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    handleIncreaseQty(cp._id)
                                                }
                                                className="px-4 py-2 relative tooltip-top"
                                                data-tooltip="Increase Quantity"
                                            >
                                                <IoMdAdd />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        {cp.price && cp.quantity
                                            ? cp.price * cp.quantity
                                            : 0}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleRemove(cp._id)}
                                            className="text-amber-500"
                                        >
                                            <FiX />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="bg-gray-50 p-4">
                        <h3 className="text-bray-600 text-2xl pb-2 border-b-2">
                            Cart Total
                        </h3>
                        <div className="flex items-center justify-between py-2 border-b">
                            <p>Subtotal:</p>{" "}
                            <p className="flex items-center">
                                <TbCurrencyTaka />
                                {cart.reduce(
                                    (prevVal, pd) =>
                                        pd.price && pd.quantity
                                            ? prevVal + pd.price * pd.quantity
                                            : 0,
                                    0
                                )}
                            </p>
                        </div>
                        <h3 className="text-gray-500 text-lg mt-2">Shipping</h3>
                        <div className="flex items-center justify-between py-2 border-b">
                            <p className="flex items-center gap-1">
                                <GoDot />
                                Free Shipping
                            </p>
                            <p className="flex items-center">
                                <TbCurrencyTaka />0
                            </p>
                        </div>
                        <div className="flex items-center justify-between text-green-600 py-2 border-b">
                            <p className="text-xl">Total:</p>
                            <p className="flex items-center">
                                <TbCurrencyTaka />
                                {cart.reduce(
                                    (prevVal, pd) =>
                                        pd.price && pd.quantity
                                            ? prevVal + pd.price * pd.quantity
                                            : 0,
                                    0
                                )}
                            </p>
                        </div>
                        {!user.email ? (
                            <button
                                onClick={() => navigate("/login")}
                                className="border-2 px-6 py-2 mt-4 uppercase hover:bg-green-500 hover:text-gray-50 text-center w-full transition-colors"
                            >
                                Login to checkout
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate("/dashboard/checkout")}
                                className="border-2 px-6 py-2 mt-4 uppercase hover:bg-green-500 hover:text-gray-50 text-center w-full transition-colors"
                            >
                                proceed to checkout
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
