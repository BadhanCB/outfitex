import { lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
import FilterOptions from "./FilterOptions";
import ProdCardsSecSkeleton from "../../../components/shared/skeletons/ProdCardsSecSkeleton";
const ProductCardsSection = lazy(() => import("./ProductCardsSection"));

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

    return (
        <section className="bg-gray-50 py-20">
            <div className="wrapper px-4 md:px-8 lg:px-12">
                <h2 className="text-2xl md:text-2xl lg:text-4xl text-center">
                    New Arrivals
                </h2>
                <p className="text-lg text-center capitalize">
                    Latest product for you
                </p>
                <div className="mt-4">
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
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
