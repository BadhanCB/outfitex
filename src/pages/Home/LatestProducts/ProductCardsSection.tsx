import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import { Product } from "../../../types";

type Props = {
    products: Product[];
    collection: string;
};

const ProductCardsSection = ({ products, collection }: Props) => {
    return (
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {!products.length
                ? null
                : !collection
                ? products.map((pd) => (
                      <ProductCard key={pd._id} product={pd} />
                  ))
                : products
                      .filter((pd) => pd.collection === collection)
                      .map((pd) => <ProductCard key={pd._id} product={pd} />)}
        </div>
    );
};

export default ProductCardsSection;
