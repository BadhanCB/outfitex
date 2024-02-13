import { Link } from "react-router-dom";
import { products, productsType } from "../../lib/constents";
import LatestProductCard from "../Home/LatestProductCard";
import { useState } from "react";

const Shop = () => {
    const [gridColNum, setGridColNum] = useState("grid-cols-3");

    return (
        <>
            <section className="text-center">
                <h1 className="text-4xl">Shop</h1>
                <ul className="flex justify-center items-center mt-4">
                    <li className="after:content-['/'] after:mx-1 text-gray-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </section>
            <section className="grid grid-cols-12 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8 py-4">
                <div className="col-span-3 mr-16">
                    <h2>Product Type</h2>
                    <ul>
                        {productsType.map((pdT) => (
                            <li
                                key={pdT._id}
                                className="flex gap-2 items-center"
                            >
                                <input
                                    type="checkbox"
                                    name="product-type"
                                    id="product-type"
                                />
                                <label
                                    htmlFor="product-type"
                                    className="flex-1 flex justify-between items-center"
                                >
                                    <span>{pdT.name}</span>
                                    <span>({pdT.inStock})</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-9">
                    <div className="w-full flex flex-wrap gap-6 items-center">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setGridColNum("grid-cols-2")}
                                className="flex gap-[2px] p-2 border rounded"
                            >
                                <div className="w-1 h-4 bg-gray-400"></div>
                                <div className="w-1 h-4 bg-gray-400"></div>
                            </button>
                            <button
                                onClick={() => setGridColNum("grid-cols-3")}
                                className="flex gap-[2px] p-2 border rounded"
                            >
                                <div className="w-1 h-4 bg-gray-400"></div>
                                <div className="w-1 h-4 bg-gray-400"></div>
                                <div className="w-1 h-4 bg-gray-400"></div>
                            </button>
                            <button
                                onClick={() => setGridColNum("grid-cols-4")}
                                className="flex gap-[2px] p-2 border rounded"
                            >
                                <div className="w-1 h-4 bg-gray-400"></div>
                                <div className="w-1 h-4 bg-gray-400"></div>
                                <div className="w-1 h-4 bg-gray-400"></div>
                                <div className="w-1 h-4 bg-gray-400"></div>
                            </button>
                            <button
                                onClick={() => setGridColNum("grid-cols-1")}
                                className="flex flex-col gap-[2px] p-2 border rounded"
                            >
                                <div className="w-6 h-1 bg-gray-400"></div>
                                <div className="w-6 h-1 bg-gray-400"></div>
                                <div className="w-6 h-1 bg-gray-400"></div>
                            </button>
                        </div>
                        <p className="grow text-center">
                            Showing 9 of 56 Products
                        </p>
                        <div>
                            <input type="checkbox" name="onsale" id="onsale" />
                            <label htmlFor="onsale">
                                Show only products on sale
                            </label>
                        </div>
                        <div>
                            <label htmlFor="sort-by">Sort By</label>
                            <select name="sort-by" id="sort-by">
                                <option value="">Default Sorting</option>
                            </select>
                        </div>
                    </div>
                    <div className={`grid ${gridColNum} mt-12 gap-8`}>
                        {products.map((pd) => (
                            <LatestProductCard key={pd._id} product={pd} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
