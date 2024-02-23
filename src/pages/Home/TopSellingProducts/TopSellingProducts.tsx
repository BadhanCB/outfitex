import { lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
import TopSellingSectionSkeleton from "../../../components/shared/skeletons/TopSellingSectionSkeleton";
const ProductSlider = lazy(() => import("./ProductSlider"));

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

    return (
        <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-12">
            <div className="wrapper">
                <h2 className="text-2xl md:text-2xl lg:text-4xl text-center">
                    Our Best Selling Items
                </h2>
                <p className="text-lg text-center">Product in focus</p>
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
