import { lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
import toast from "react-hot-toast";
import BannerSkeleton from "../../../components/shared/skeletons/BannerSkeleton";
const BannerCarousel = lazy(() => import("./BannerCarousel"));

const BannerSection = () => {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchFeaturedProduct = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/products/featured`
                );

                if (!res.ok) {
                    let errmsg;
                    if (res.statusText) {
                        errmsg = res.statusText;
                    } else {
                        const data = await res.json();
                        errmsg = data.message
                            ? data.message
                            : "Failed to Fetch";
                    }

                    toast.error(errmsg);
                    setIsLoading(false);
                    return;
                }

                const data = await res.json();
                setFeaturedProducts(data);
                setIsLoading(false);
            } catch (error) {
                let errmsg = "Failed to fetch";
                if (error instanceof Error) {
                    errmsg = error.message;
                }
                toast.error(errmsg);
                setIsLoading(false);
            }
        };

        fetchFeaturedProduct();
    }, []);

    return (
        <section className="relative bg-gray-100">
            {isLoading ? (
                <BannerSkeleton />
            ) : (
                <BannerCarousel featuredProducts={featuredProducts} />
            )}
        </section>
    );
};

export default BannerSection;
