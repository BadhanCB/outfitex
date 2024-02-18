import { ChangeEventHandler, useEffect, useState } from "react";
import { Category, Collection } from "../../types";
import toast from "react-hot-toast";

type Props = {
    handleCategoryChange: ChangeEventHandler<HTMLInputElement>;
};

const FilterOptions = ({ handleCategoryChange }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);

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
        <>
            <h2 className="text-2xl mb-4 font-medium text-gray-600">
                Category
            </h2>
            <ul className="flex flex-col gap-2">
                {categories.map((pdT, i) => (
                    <li key={i} className="flex gap-2 items-center">
                        <input
                            onChange={handleCategoryChange}
                            type="checkbox"
                            name={pdT.name}
                            id={pdT.name}
                            value={pdT.slug}
                            className="cursor-pointer"
                        />
                        <label
                            htmlFor={pdT.name}
                            className="flex-1 flex justify-between items-center cursor-pointer"
                        >
                            <span>{pdT.name}</span>
                            {/* <span>({pdT.inStock})</span> */}
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FilterOptions;
