import { Link } from "react-router-dom";
import PageBanner from "../../components/ui/PageBanner";

const ShopBanner = () => {
    return (
        <PageBanner>
            <h1 className="text-4xl">Shop</h1>
            <ul className="flex justify-center items-center mt-4">
                <li className="after:content-['/'] after:mx-1 text-gray-400">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </PageBanner>
    );
};

export default ShopBanner;
