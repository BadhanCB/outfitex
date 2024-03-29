import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
    collection: string;
    setCollection: Dispatch<SetStateAction<string>>;
};

const FilterOptions = ({ collection, setCollection }: Props) => {
    const varients = {
        initial: { opacity: 0, x: 200 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
        },
    };

    return (
        <motion.ul
            variants={varients}
            initial="initial"
            whileInView="animate"
            className="flex gap-4 md:gap-8 justify-center items-center uppercase text-base md:text-xl font-medium"
        >
            <motion.li
                variants={varients}
                className={`cursor-pointer  ${
                    !collection ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("")}
            >
                All
            </motion.li>
            <motion.li
                variants={varients}
                className={`cursor-pointer  ${
                    collection === "women" ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("women")}
            >
                Women
            </motion.li>
            <motion.li
                variants={varients}
                className={`cursor-pointer  ${
                    collection === "men" ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("men")}
            >
                Men
            </motion.li>
            <motion.li
                variants={varients}
                className={`cursor-pointer  ${
                    collection === "kids" ? "text-amber-500" : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("kids")}
            >
                Kids
            </motion.li>
            <motion.li
                variants={varients}
                className={`cursor-pointer  ${
                    collection === "accesories"
                        ? "text-amber-500"
                        : "text-slate-400"
                } hover:text-amber-500 animated-border-b`}
                onClick={() => setCollection("accesories")}
            >
                Accesories
            </motion.li>
        </motion.ul>
    );
};

export default FilterOptions;
