import { useState } from "react";
import LatestProductCard from "./LatestProductCard";
import { products } from "../../lib/constents";

const LatestProducts = () => {
    const [category, setCategory] = useState<string>("");

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
                                !category
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("")}
                        >
                            All
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "women"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("women")}
                        >
                            Women
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "men"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("men")}
                        >
                            Men
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "kids"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("kids")}
                        >
                            Kids
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "accesories"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("accesories")}
                        >
                            Accesories
                        </li>
                    </ul>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {!category
                            ? products.map((pd) => (
                                  <LatestProductCard
                                      key={pd._id}
                                      product={pd}
                                  />
                              ))
                            : products
                                  .filter((pd) => pd.category === category)
                                  .map((pd) => (
                                      <LatestProductCard
                                          key={pd._id}
                                          product={pd}
                                      />
                                  ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
