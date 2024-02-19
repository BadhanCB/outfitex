import { FiX } from "react-icons/fi";
import PageBanner from "../../components/ui/PageBanner";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { WishListType } from "../../types";

const Wishlist = () => {
    const { wishlist, setWishList, setCart } = useAuth();
    console.log(wishlist);

    const handleAddToCart = (product: WishListType) => {
        setCart((prevCrt) => {
            const { _id, name, price, image, seller } = product;
            const index = prevCrt.findIndex((cp) => cp._id === _id);

            if (index > -1) {
                prevCrt[index].quantity = (prevCrt[index].quantity || 0) + 1;
                toast.success("Increased Quantity of the Product in Cart");
                return prevCrt;
            }

            toast.success("Product added to the Cart");
            return [
                ...prevCrt,
                { _id, name, price, image, seller, quantity: 1 },
            ];
        });
    };

    const handleRemove = (id?: string) => {
        setWishList((prev) => prev.filter((prP) => prP._id !== id));
        toast.success("Removed from Wishlist");
    };

    return (
        <>
            <PageBanner>
                <h1 className="text-4xl">Wishlist</h1>
            </PageBanner>
            <section className="wrapper px-4 md:px-8 lg:px-12 py-12">
                <table className="w-full text-center table-fixed">
                    <thead className="text-gray-400 border-b-2">
                        <tr>
                            <th className="pb-2 mb-2">Product</th>
                            <th className="pb-2 mb-2">Price</th>
                            <th className="pb-2 mb-2"></th>
                            <th className="pb-2 mb-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((cp) => (
                            <tr key={cp._id} className="border-b-2">
                                <td className="flex gap-4 items-center py-2">
                                    <div className="w-20 h-20 overflow-hidden">
                                        <img
                                            src={`data:${cp?.image?.type};base64, ${cp?.image?.data}`}
                                            alt={cp.name}
                                            className="h-full w-full object-contain rounded-md"
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
                                    <button
                                        onClick={() => handleAddToCart(cp)}
                                        className={`px-4 py-2 border bg-black hover:bg-slate-800 text-gray-50 rounded`}
                                    >
                                        Add to Cart
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleRemove(cp._id)}
                                        className="text-amber-500 relative tooltip-left"
                                        data-tooltip="Remove from Wishlist"
                                    >
                                        <FiX />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default Wishlist;
