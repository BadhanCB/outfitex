import AddtoCartBtn from "../../components/ui/AddtoCartBtn";
import AddtoWishListBtn from "../../components/ui/AddtoWishListBtn";
import ViewProductLinkBtn from "../../components/ui/ViewProductLinkBtn";
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
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>$ {product.price}</p>
            </div>
        </div>
    );
};

export default ShopProductCard;
