import { Dispatch, SetStateAction } from "react";

type Props = {
    collection: string;
    setCollection: Dispatch<SetStateAction<string>>;
};

const FilterOptions = ({ collection, setCollection }: Props) => {
    return (
        <ul className="flex gap-4 md:gap-8 justify-center items-center uppercase text-base md:text-xl font-medium">
            <li
                className={`cursor-pointer  ${
                    !collection ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("")}
            >
                All
            </li>
            <li
                className={`cursor-pointer  ${
                    collection === "women" ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("women")}
            >
                Women
            </li>
            <li
                className={`cursor-pointer  ${
                    collection === "men" ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("men")}
            >
                Men
            </li>
            <li
                className={`cursor-pointer  ${
                    collection === "kids" ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("kids")}
            >
                Kids
            </li>
            <li
                className={`cursor-pointer  ${
                    collection === "accesories"
                        ? "text-amber-500"
                        : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("accesories")}
            >
                Accesories
            </li>
        </ul>
    );
};

export default FilterOptions;
