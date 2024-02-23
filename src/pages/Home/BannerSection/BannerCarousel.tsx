import { useEffect, useState } from "react";
import { Product } from "../../../types";
import BannerItem from "./BannerItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
    featuredProducts: Product[];
};
const BannerCarousel = ({ featuredProducts }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const slideTimeInterval = setInterval(() => {
            setActiveIndex((prev) => {
                if (prev === featuredProducts.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 7000);

        return () => clearInterval(slideTimeInterval);
    }, [featuredProducts]);

    const handleNext = () => {
        setActiveIndex((prev) => {
            if (prev === featuredProducts.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    const handlePrevious = () => {
        setActiveIndex((prev) => {
            if (prev === 0) {
                return featuredProducts.length - 1;
            } else {
                return prev - 1;
            }
        });
    };

    return (
        <>
            <div className="wrapper min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-118px)] 2xl:min-h-fit w-full flex flex-nowrap items-center overflow-hidden">
                {!featuredProducts.length
                    ? null
                    : featuredProducts.map((itm, index) => (
                          <BannerItem
                              key={itm._id}
                              img={itm.image}
                              productName={itm.name}
                              title={itm.category}
                              slug={itm.slug}
                              index={index}
                              activeIndex={activeIndex}
                          />
                      ))}
            </div>
            <div className="absolute z-40 w-full top-2/4 -translate-y-2/4 text-4xl flex justify-between overflow-hidden">
                <button
                    className="hover:scale-125 hover:text-gray-600 transition-transform"
                    onClick={handlePrevious}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className="hover:scale-125 hover:text-gray-600 transition-transform"
                    onClick={handleNext}
                >
                    <FiChevronRight />
                </button>
            </div>
            <div className="flex justify-center items-center gap-4 absolute left-2/4 -translate-x-2/4 bottom-4">
                {!featuredProducts.length
                    ? null
                    : featuredProducts.map((i, index) => (
                          <div
                              key={i._id}
                              className={`h-3 ${
                                  activeIndex === index
                                      ? "w-7 bg-slate-600"
                                      : "w-3"
                              } rounded-full border-2 border-gray-600 cursor-pointer transition-all`}
                              onClick={() => setActiveIndex(index)}
                          ></div>
                      ))}
            </div>
        </>
    );
};

export default BannerCarousel;
