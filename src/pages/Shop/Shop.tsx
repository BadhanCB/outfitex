import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import ShopProductCard from "./ShopProductCard";
import { Product, ProductResponseData } from "../../types";
import { productsType } from "../../lib/constents";
import ShopBanner from "./ShopBanner";
import toast from "react-hot-toast";

const Shop = () => {
    const [colNum, setColNum] = useState<number>(3);
    const [products, setProducts] = useState<Product[]>([]);
    // const [totalProducts, setTotalProducts] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);
    const [sorting, setSorting] = useState<string>("");

    // useEffect(() => {
    //     console.log(sorting);
    // }, [sorting]);

    useEffect(() => {
        const url = `http://localhost:5379/products?sort=${sorting}`;

        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ categories }),
                });

                if (!res.ok) {
                    toast.error(res.statusText);
                    return;
                }

                const data: ProductResponseData = await res.json();
                setProducts(data.products);
            } catch (error) {
                let errMsg = "Failed to Fetch";
                if (error instanceof Error) {
                    errMsg = error.message;
                }
                toast.error(errMsg);
            }
        };

        fetchData();
    }, [categories, sorting]);

    // useEffect(() => {
    //     fetch("http://localhost:5379/products")
    //         .then((res) => res.json())
    //         .then((data: ProductResponseData) => setProducts(data.products));
    // }, []);

    const handleCategoryChange: ChangeEventHandler<HTMLInputElement> = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.checked) {
            setCategories((prev) => [...prev, e.target.value]);
        } else {
            setCategories((prev) =>
                prev.splice(prev.indexOf(e.target.value), 1)
            );
            // const newCategories = categories;
            // const index = newCategories.indexOf(e.target.value);
            // newCategories.splice(index, 1);
            // setCategories(newCategories);
        }
    };

    const handleSortingChange: ChangeEventHandler<HTMLSelectElement> = (
        e: ChangeEvent<HTMLSelectElement>
    ) => {
        setSorting(e.target.value);
    };

    return (
        <>
            <ShopBanner />
            <section className="grid grid-cols-12 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8 py-4">
                <div className="col-span-3 mr-16">
                    <h2 className="text-2xl mb-4 font-medium text-gray-600">
                        Category
                    </h2>
                    <ul className="flex flex-col gap-2">
                        {productsType.map((pdT) => (
                            <li
                                key={pdT._id}
                                className="flex gap-2 items-center"
                            >
                                <input
                                    onChange={handleCategoryChange}
                                    type="checkbox"
                                    name={pdT.name}
                                    id={pdT.name}
                                    value={pdT.name}
                                    className="cursor-pointer"
                                />
                                <label
                                    htmlFor={pdT.name}
                                    className="flex-1 flex justify-between items-center cursor-pointer"
                                >
                                    <span>{pdT.name}</span>
                                    <span>({pdT.inStock})</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-9">
                    <div className="w-full flex flex-wrap gap-6 justify-between items-center">
                        <div className="flex gap-3">
                            <button
                                onClick={() => setColNum(2)}
                                className={`flex gap-[2px] p-2 border rounded ${
                                    colNum === 2 && "bg-slate-800"
                                }`}
                            >
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 2 && "bg-gray-50"
                                    }`}
                                ></div>
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 2 && "bg-gray-50"
                                    }`}
                                ></div>
                            </button>
                            <button
                                onClick={() => setColNum(3)}
                                className={`flex gap-[2px] p-2 border rounded ${
                                    colNum === 3 && "bg-slate-800"
                                }`}
                            >
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 3 && "bg-gray-50"
                                    }`}
                                ></div>
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 3 && "bg-gray-50"
                                    }`}
                                ></div>
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 3 && "bg-gray-50"
                                    }`}
                                ></div>
                            </button>
                            <button
                                onClick={() => setColNum(4)}
                                className={`flex gap-[2px] p-2 border rounded ${
                                    colNum === 4 && "bg-slate-800"
                                }`}
                            >
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 4 && "bg-gray-50"
                                    }`}
                                ></div>
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 4 && "bg-gray-50"
                                    }`}
                                ></div>
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 4 && "bg-gray-50"
                                    }`}
                                ></div>
                                <div
                                    className={`w-1 h-4 bg-gray-400 ${
                                        colNum === 4 && "bg-gray-50"
                                    }`}
                                ></div>
                            </button>
                            <button
                                onClick={() => setColNum(1)}
                                className={`flex flex-col gap-[2px] p-2 border rounded ${
                                    colNum === 1 && "bg-slate-800"
                                }`}
                            >
                                <div
                                    className={`w-6 h-1 ${
                                        colNum === 1
                                            ? "bg-gray-50"
                                            : "bg-gray-400"
                                    }`}
                                ></div>
                                <div
                                    className={`w-6 h-1 ${
                                        colNum === 1
                                            ? "bg-gray-50"
                                            : "bg-gray-400"
                                    }`}
                                ></div>
                                <div
                                    className={`w-6 h-1 ${
                                        colNum === 1
                                            ? "bg-gray-50"
                                            : "bg-gray-400"
                                    }`}
                                ></div>
                            </button>
                        </div>
                        {/* <p className="grow text-center">
                            Showing 9 of 56 Products
                        </p>
                        <div>
                            <input type="checkbox" name="onsale" id="onsale" />
                            <label htmlFor="onsale">
                                Show only products on sale
                            </label>
                        </div> */}
                        <div>
                            <label htmlFor="sorting" className="text-gray-500">
                                Sort By
                            </label>
                            <select
                                onChange={handleSortingChange}
                                name="sorting"
                                id="sorting"
                                className="px-4 py-2 border ml-2 rounded bg-gray-50 focus:outline-none"
                            >
                                <option value="">Default Sorting</option>
                                <option value="popular">Popularity</option>
                                <option value="latest">Latest</option>
                                <option value="lowToHigh">
                                    Price: Low to High
                                </option>
                                <option value="highToLow">
                                    Price: High to Low
                                </option>
                            </select>
                        </div>
                    </div>
                    <div
                        className={`grid ${
                            colNum === 1
                                ? "grid-cols-1"
                                : colNum === 2
                                ? "grid-cols-2"
                                : colNum === 3
                                ? "grid-cols-3"
                                : colNum === 4 && "grid-cols-4"
                        } mt-12 gap-8`}
                    >
                        {!products?.length
                            ? null
                            : products.map((pd) => (
                                  <ShopProductCard
                                      key={pd._id}
                                      product={pd}
                                      colNum={colNum}
                                  />
                              ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
