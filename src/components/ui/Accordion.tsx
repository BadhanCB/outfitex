import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type Props = {
    title: string;
    name: string;
    id: string;
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    children: React.ReactNode;
    className?: string;
};

const Accordion = ({
    title,
    name,
    id,
    selectedCategory,
    setSelectedCategory,
    children,
    className,
}: Props) => {
    const [contentHeight, setContentHeight] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const divElem = ref.current;
        setContentHeight(divElem?.offsetHeight || 0);
    }, [ref]);

    return (
        <div
            style={{
                maxHeight:
                    selectedCategory === id
                        ? `calc(${contentHeight}px + 1.5rem)`
                        : "1.5rem",
            }}
            className={`text-2xl transition-[max-height] ${className} overflow-hidden`}
        >
            <label
                htmlFor={id}
                className="cursor-pointer w-full flex items-center justify-between"
            >
                <h3>{title}</h3>
                <FiChevronDown
                    className={`transition-transform ${
                        selectedCategory === id ? "rotate-180" : "rotate-0"
                    }`}
                />
            </label>
            <input
                checked={selectedCategory === id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                onClick={() =>
                    id === selectedCategory && setSelectedCategory("")
                }
                type="radio"
                name={name}
                id={id}
                value={id}
                className="hidden"
            />
            <div ref={ref} className="p-3 text-lg">
                {children}
            </div>
        </div>
    );
};

export default Accordion;
