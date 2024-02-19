import { MdTune } from "react-icons/md";
import { ChangeEventHandler, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Category, Collection } from "../../types";
type Props = {
    handleCategoryChange: ChangeEventHandler<HTMLInputElement>;
};
const MobileFilter = ({ handleCategoryChange }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isShowFilter, setIsShowFilter] = useState(false);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const res = await fetch("http://localhost:5379/collections");

                if (!res.ok) {
                    toast.error(res.statusText);
                    return;
                }

                const data: Collection[] = await res.json();

                const categoryArray = data.map((coll) => coll.categories);
                const newCategories = categoryArray.flat(
                    Infinity
                ) as Category[];
                const uniqueCategories = newCategories.filter(
                    (obj, index) =>
                        index ===
                        newCategories.findIndex((o) => o.name === obj.name)
                );
                setCategories(uniqueCategories);
            } catch (error) {
                let errmsg = "Failed to fetch";
                if (error instanceof Error) {
                    errmsg = error.message;
                }
                toast.error(errmsg);
            }
        };

        fetchCollections();
    }, []);

    return (
        <div>
            <button
                onClick={() => setIsShowFilter((prev) => !prev)}
                className="lg:hidden p-2 border rounded flex items-center gap-1"
            >
                <MdTune />
                Filter
            </button>
            <div
                className={`absolute lg:hidden z-40 bg-gray-100 shadow-lg p-4 rounded-lg w-[90vw] left-1/2 -translate-x-1/2 transition origin-top ${
                    isShowFilter
                        ? "scale-100 opacity-100"
                        : "scale-y-0 opacity-0"
                }`}
            >
                <h2 className="text-2xl mb-4 font-medium text-gray-600">
                    Category
                </h2>
                <ul className="flex flex-col gap-2">
                    {categories.map((pdT, i) => (
                        <li key={i} className="flex gap-2 items-center">
                            <input
                                onChange={handleCategoryChange}
                                type="checkbox"
                                name={pdT.name + "-mobile"}
                                id={pdT.name + "-mobile"}
                                value={pdT.slug}
                                className="cursor-pointer"
                            />
                            <label
                                htmlFor={pdT.name + "-mobile"}
                                className="flex-1 flex justify-between items-center cursor-pointer"
                            >
                                <span>{pdT.name}</span>
                                {/* <span>({pdT.inStock})</span> */}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileFilter;
