import { ChangeEvent, ChangeEventHandler, lazy, useState } from "react";
import ShopBanner from "./ShopBanner";
import FilterOptions from "./FilterOptions";
import MobileFilter from "./MobileFilter";
import ColumnSelectOption from "./ColumnSelectOption";
import SortingOption from "./SortingOption";
const ShopProductsSecton = lazy(() => import("./ShopProductsSecton"));

const Shop = () => {
    const [colNum, setColNum] = useState<number>(3);
    // const [totalProducts, setTotalProducts] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);
    const [sorting, setSorting] = useState<string>("");

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
                        <ColumnSelectOption
                            colNum={colNum}
                            setColNum={setColNum}
                        />
                        <MobileFilter
                            handleCategoryChange={handleCategoryChange}
                        />
                        <SortingOption
                            handleSortingChange={handleSortingChange}
                        />
                    </div>

                    <ShopProductsSecton
                        colNum={colNum}
                        sorting={sorting}
                        categories={categories}
                    />
                </div>
            </section>
        </>
    );
};

export default Shop;
