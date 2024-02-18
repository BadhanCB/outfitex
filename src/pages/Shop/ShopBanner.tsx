import { Link } from "react-router-dom";

const ShopBanner = () => {
    return (
        <section className="text-center">
            <h1 className="text-4xl">Shop</h1>
            <ul className="flex justify-center items-center mt-4">
                <li className="after:content-['/'] after:mx-1 text-gray-400">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </section>
    );
};

export default ShopBanner;
