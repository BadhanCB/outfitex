import { MouseEvent, useState } from "react";
import { FiAlignLeft, FiX } from "react-icons/fi";
import CategoryList from "./CategoryList";
import MobileNavigationOptions from "./MobileNavigationOptions";

const LeftSideBar = () => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsOpenSideBar(false);
    };

    return (
        <li className="relative">
            <button
                onClick={() => setIsOpenSideBar(true)}
                className="align-middle font-tenor text-2xl tooltip"
                data-tooltip="Collections"
            >
                <FiAlignLeft />
            </button>
            <aside
                onClick={handleClick}
                className={`fixed top-0 ${
                    isOpenSideBar
                        ? "left-0 bg-[rgba(54,37,37,0.5)]"
                        : "-left-full bg-transparent"
                } transition-all duration-1000 w-full h-screen z-50`}
            >
                <ul
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white h-full w-80 p-8 relative"
                >
                    {/* Category List(initially hidden and visible in medium device) */}
                    <CategoryList />
                    {/* Navigation Link List(initially visible and hidden in medium device) */}
                    <MobileNavigationOptions />

                    <button
                        onClick={() => setIsOpenSideBar(false)}
                        className="absolute top-2 right-2 bg-gray-100 rounded-full p-1 cursor-pointer"
                    >
                        <FiX />
                    </button>
                </ul>
            </aside>
        </li>
    );
};

export default LeftSideBar;
