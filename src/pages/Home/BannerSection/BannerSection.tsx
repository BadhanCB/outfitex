import { Suspense, lazy, useEffect, useState } from "react";
import { Product } from "../../../types";
import toast from "react-hot-toast";
import BannerSkeleton from "../../../components/shared/skeletons/BannerSkeleton";
const BannerCarousel = lazy(() => import("./BannerCarousel"));

const BannerSection = () => {
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchFeaturedProduct = async () => {
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
                    return;
                }

                const data = await res.json();
                setFeaturedProducts(data);
            } catch (error) {
                let errmsg = "Failed to fetch";
                if (error instanceof Error) {
                    errmsg = error.message;
                }
                toast.error(errmsg);
            }
        };

        fetchFeaturedProduct();
    }, []);

    return (
        <section className="relative bg-gray-50">
            <Suspense fallback={<BannerSkeleton />}>
                <BannerCarousel featuredProducts={featuredProducts} />
            </Suspense>
        </section>
    );
};

export default BannerSection;
