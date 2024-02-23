import { useEffect, useState } from "react";
import { Product, ProductResponseData } from "../../types";
import ShopProductCard from "./ShopProductCard";
import toast from "react-hot-toast";
import ProdCardsSecSkeleton from "../../components/shared/skeletons/ProdCardsSecSkeleton";
type Props = {
    colNum: number;
    sorting: string;
    categories: string[];
};

const ShopProductsSecton = ({ colNum, sorting, categories }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const url = `${
            import.meta.env.VITE_API_BASE_URL
        }/products?sort=${sorting}`;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ categories }),
                });

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

                const data: ProductResponseData = await res.json();
                setProducts(data.products);
                setIsLoading(false);
            } catch (error) {
                let errMsg = "Failed to Fetch";
                if (error instanceof Error) {
                    errMsg = error.message;
                }
                toast.error(errMsg);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [categories, sorting]);
    return (
        <>
            {isLoading ? (
                <ProdCardsSecSkeleton />
            ) : (
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
                    {products &&
                        products.map((pd) => (
                            <ShopProductCard
                                key={pd._id}
                                product={pd}
                                colNum={colNum}
                            />
                        ))}
                </div>
            )}
        </>
    );
};

export default ShopProductsSecton;
