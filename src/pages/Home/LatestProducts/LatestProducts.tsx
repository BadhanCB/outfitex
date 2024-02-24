import { lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
import FilterOptions from "./FilterOptions";
import ProdCardsSecSkeleton from "../../../components/shared/skeletons/ProdCardsSecSkeleton";
const ProductCardsSection = lazy(() => import("./ProductCardsSection"));
import { motion } from "framer-motion";

const LatestProducts = () => {
    const [collection, setCollection] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${import.meta.env.VITE_API_BASE_URL}/products/latest`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            });
    }, []);

    const varients = {
        initial: { opacity: 0, y: -100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
        },
    };

    return (
        <section className="bg-gray-50 py-20">
            <motion.div
                initial="initial"
                whileInView="animate"
                className="wrapper px-4 md:px-8 lg:px-12"
            >
                <motion.div variants={varients}>
                    <motion.h2
                        variants={varients}
                        className="text-2xl md:text-2xl lg:text-4xl text-center"
                    >
                        New Arrivals
                    </motion.h2>
                    <motion.p
                        variants={varients}
                        className="text-lg text-center capitalize"
                    >
                        Latest product for you
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={varients}
                    className="mt-4 overflow-hidden"
                >
                    <FilterOptions
                        collection={collection}
                        setCollection={setCollection}
                    />

                    {isLoading ? (
                        <ProdCardsSecSkeleton />
                    ) : (
                        <ProductCardsSection
                            products={products}
                            collection={collection}
                        />
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default LatestProducts;
