import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import { Product } from "../../../types";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    products: Product[];
    collection: string;
};

const ProductCardsSection = ({ products, collection }: Props) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
            <AnimatePresence>
                {!products.length
                    ? null
                    : !collection
                    ? products.map((pd) => (
                          <ProductCard key={pd._id} product={pd} />
                      ))
                    : products
                          .filter((pd) => pd.collection === collection)
                          .map((pd) => (
                              <ProductCard key={pd._id} product={pd} />
                          ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProductCardsSection;
