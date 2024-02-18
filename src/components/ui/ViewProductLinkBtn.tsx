import { TbEye } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Product } from "../../types";

type Props = {
    product: Product;
};

const ViewProductLinkBtn = ({ product }: Props) => {
    return (
        <Link
            to={`/product/${product.slug}`}
            className="tooltip-left relative bg-white hover:bg-gray-500 hover:text-gray-50 p-2 rounded-xl shadow-md lg:translate-x-6 lg:group-hover:translate-x-0 lg:opacity-0 lg:group-hover:opacity-100 transition duration-300 delay-150"
            data-tooltip="View"
        >
            <TbEye className="text-2xl" />
        </Link>
    );
};

export default ViewProductLinkBtn;
