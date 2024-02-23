import { lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
import TopSellingSectionSkeleton from "../../../components/shared/skeletons/TopSellingSectionSkeleton";
const ProductSlider = lazy(() => import("./ProductSlider"));
import { motion } from "framer-motion";

const TopSellingProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${import.meta.env.VITE_API_BASE_URL}/products/top-selling`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    const varients = {
        initial: { opacity: 0, y: -50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
        },
    };

    return (
        <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-12">
            <div className="wrapper">
                <motion.div
                    variants={varients}
                    initial="initial"
                    whileInView="animate"
                >
                    <motion.h2
                        variants={varients}
                        className="text-2xl md:text-2xl lg:text-4xl text-center"
                    >
                        Our Best Selling Items
                    </motion.h2>
                    <motion.p
                        variants={varients}
                        className="text-lg text-center"
                    >
                        Product in focus
                    </motion.p>
                </motion.div>
                {isLoading ? (
                    <TopSellingSectionSkeleton />
                ) : (
                    <ProductSlider products={products} />
                )}
            </div>
        </section>
    );
};

export default TopSellingProducts;
