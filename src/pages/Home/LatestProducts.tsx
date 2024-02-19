import { useEffect, useState } from "react";
import { Product } from "../../types";
import ProductCard from "../../components/shared/ProductCard/ProductCard";

const LatestProducts = () => {
    const [collection, setCollection] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://outfitex.onrender.com/products/latest")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <section className="bg-gray-100 py-20">
            <div className="wrapper px-4 md:px-8 lg:px-12">
                <h2 className="text-2xl md:text-2xl lg:text-4xl text-center">
                    New Arrivals
                </h2>
                <p className="text-lg text-center capitalize">
                    Latest product for you
                </p>
                <div className="mt-4">
                    <ul className="flex gap-4 md:gap-8 justify-center items-center uppercase text-base md:text-xl font-medium">
                        <li
                            className={`cursor-pointer  ${
                                !collection
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCollection("")}
                        >
                            All
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                collection === "women"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCollection("women")}
                        >
                            Women
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                collection === "men"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCollection("men")}
                        >
                            Men
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                collection === "kids"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCollection("kids")}
                        >
                            Kids
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                collection === "accesories"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCollection("accesories")}
                        >
                            Accesories
                        </li>
                    </ul>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
