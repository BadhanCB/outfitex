import { Product } from "../../types";

type Props = {
    product: Product;
    colNum: number;
};

const ShopProductCard = ({ product, colNum }: Props) => {
    return (
        <div
            className={`h-full w-full bg-gray-50 group ${
                colNum === 1 && "grid grid-cols-3"
            }`}
        >
            <div className="h-96 w-full bg-gray-200 relative">
                <img
                    src={`data:${product.image.type};base64, ${product.image.data}`}
                    alt={product.name}
                    className="h-full w-full object-cover roin"
                    draggable={false}
                />
                {colNum !== 1 && (
                    <button className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 w-full bg-gray-800 text-white font-medium scale-y-100 lg:scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom">
                        Add to cart
                    </button>
                )}
            </div>
            <div className={`p-4 ${colNum === 1 && "col-span-2"}`}>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>$ {product.price}</p>
            </div>
        </div>
    );
};

export default ShopProductCard;