import { Suspense, lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
const ProductSlider = lazy(() => import("./ProductSlider"));

const TopSellingProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/products/top-selling`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-12">
            <div className="wrapper">
                <h2 className="text-2xl md:text-2xl lg:text-4xl text-center">
                    Our Best Selling Items
                </h2>
                <p className="text-lg text-center">Product in focus</p>
                <Suspense fallback={<p>Loading...</p>}>
                    <ProductSlider products={products} />
                </Suspense>
            </div>
        </section>
    );
};

export default TopSellingProducts;
