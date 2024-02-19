import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import ShopProductCard from "./ShopProductCard";
import { Product, ProductResponseData } from "../../types";
import ShopBanner from "./ShopBanner";
import toast from "react-hot-toast";
import FilterOptions from "./FilterOptions";
import MobileFilter from "./MobileFilter";

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
        const url = `${
            import.meta.env.VITE_API_BASE_URL
        }/products?sort=${sorting}`;

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

    const handleCategoryChange: ChangeEventHandler<HTMLInputElement> = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.checked) {
            setCategories((prev) => [...prev, e.target.value]);
        } else {
            setCategories((prev) =>
                prev.filter((cat) => cat !== e.target.value)
            );
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
                <div className="lg:col-span-3 mr-16 hidden lg:block">
                    <FilterOptions
                        handleCategoryChange={handleCategoryChange}
                    />
                </div>
                <div className="col-span-12 lg:col-span-9">
                    <div className="w-full flex flex-wrap gap-3 lg:gap-6 justify-between items-center relative">
                        <div className="hidden lg:flex gap-3">
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
                        <MobileFilter
                            handleCategoryChange={handleCategoryChange}
                        />
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
