import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { getTokenFromCookie } from "../../lib/utils";
import { Order } from "../../types";
import { FiLoader } from "react-icons/fi";
import { useState } from "react";

const Checkout = () => {
    const [isLoading, setIsloading] = useState(false);
    const { cart, user, setCart } = useAuth();
    const { _id, name, userName, address, email, phone } = user;

    const newOrder: Order = {
        products: cart.map(({ _id, name, price, quantity, seller }) => {
            return { _id, name, price, quantity, seller };
        }),
        buyer: { _id, name, userName, address, email, phone },
        totalPayableAmount: cart.reduce(
            (prevVal, pd) =>
                pd.price && pd.quantity ? prevVal + pd.price * pd.quantity : 0,
            0
        ),
    };

    const handlePlaceOrder = async () => {
        setIsloading(true);
        try {
            if (!getTokenFromCookie()) {
                toast.error("You are not Authorized. Please login again");
                setIsloading(false);
                return;
            }

            const res = await fetch("https://outfitex.onrender.com/order", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${getTokenFromCookie()}`,
                },
                body: JSON.stringify(newOrder),
            });

            if (!res.ok) {
                toast.error(res.statusText);
                setIsloading(false);
                return;
            }

            const data = await res.json();
            toast.success(data.message);
            setIsloading(false);
            setCart([]);
        } catch (error) {
            let errmess = "Failed to Place new Order";
            if (error instanceof Error) {
                errmess = error.message;
            }
            toast.error(errmess);
            setIsloading(false);
        }
    };

    return (
        <>
            <section className="py-12">
                <h1 className="text-center text-4xl">Checkout</h1>
            </section>
            <section className="p-4 flex flex-col gap-3">
                {!cart.length ? (
                    <p className="text-center text-3xl text-orange-400">
                        Please Add some Product to the cart
                    </p>
                ) : (
                    <>
                        <div>
                            <label htmlFor="name" className="mb-1">
                                Name
                            </label>
                            <input
                                value={name}
                                type="text"
                                name="name"
                                id="name"
                                disabled
                                className="w-full px-8 py-3 bg-gray-100 rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                type="text"
                                name="email"
                                id="email"
                                disabled
                                className="w-full px-8 py-3 bg-gray-100 rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input
                                value={phone}
                                type="text"
                                name="phone"
                                id="phone"
                                disabled
                                className="w-full px-8 py-3 bg-gray-100 rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="address">Address</label>
                            <input
                                value={address}
                                type="text"
                                name="address"
                                id="address"
                                disabled
                                className="w-full px-8 py-3 bg-gray-100 rounded"
                            />
                        </div>
                        <table className="w-full text-center table-auto mt-4">
                            <thead className="text-gray-400 border-b-2">
                                <tr>
                                    <th className="pb-2 mb-2">Product</th>
                                    <th className="pb-2 mb-2">Price</th>
                                    <th className="pb-2 mb-2">Quantity</th>
                                    <th className="pb-2 mb-2">Sub-Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newOrder.products.map((cp) => (
                                    <tr key={cp._id} className="border-b-2">
                                        <td className="py-2">
                                            <h3>
                                                {cp.name && cp.name?.length > 25
                                                    ? cp.name?.slice(0, 25) +
                                                      "..."
                                                    : cp.name}
                                            </h3>
                                        </td>
                                        <td>{cp.price}</td>
                                        <td>{cp.quantity}</td>
                                        <td>
                                            {cp.price && cp.quantity
                                                ? cp.price * cp.quantity
                                                : 0}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="border-b-2 text-lg font-semibold">
                                    <td></td>
                                    <td></td>
                                    <td className="py-2">Total</td>
                                    <td>{newOrder.totalPayableAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button
                            disabled={isLoading}
                            onClick={handlePlaceOrder}
                            className="border-2 px-6 py-2 mt-4 uppercase bg-green-600 hover:bg-green-500 disabled:bg-green-300 text-gray-50 text-center w-fit transition-colors ml-auto flex gap-3 items-center"
                        >
                            {isLoading && <FiLoader className="animate-spin" />}
                            {isLoading ? "Submitting..." : "Place Order"}
                        </button>
                    </>
                )}
            </section>
        </>
    );
};

export default Checkout;
