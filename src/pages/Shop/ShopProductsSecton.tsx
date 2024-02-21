import { Product } from "../../types";
import ShopProductCard from "./ShopProductCard";
type Props = {
    products: Product[];
    colNum: number;
};

const ShopProductsSecton = ({ products, colNum }: Props) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
                colNum === 1
                    ? "lg:grid-cols-1"
                    : colNum === 2
                    ? "lg:grid-cols-2"
                    : colNum === 3
                    ? "lg:grid-cols-3"
                    : colNum === 4 && "lg:grid-cols-4"
            } mt-12 gap-8`}
        >
            {!products?.length
                ? null
                : products.map((pd) => (
                      <ShopProductCard
                          key={pd._id}
                          product={pd}
                          colNum={colNum}
                      />
                  ))}
        </div>
    );
};

export default ShopProductsSecton;
