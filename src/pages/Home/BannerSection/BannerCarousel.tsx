import {
    MouseEvent,
    MouseEventHandler,
    TouchEvent,
    TouchEventHandler,
    useEffect,
    useRef,
    useState,
} from "react";
import { Product } from "../../../types";
import BannerItem from "./BannerItem";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
    featuredProducts: Product[];
};
const BannerCarousel = ({ featuredProducts }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [isInteractingWithBtn, setIsInteractingWithBtn] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [pageX, setPageX] = useState(0);

    useEffect(() => {
        const slideTimeInterval = setInterval(() => {
            if (!isInteractingWithBtn && !isDragging) {
                setActiveIndex((prev) => {
                    if (prev === featuredProducts.length - 1) {
                        return 0;
                    } else {
                        return prev + 1;
                    }
                });
            }
        }, 5000);

        return () => clearInterval(slideTimeInterval);
    }, [featuredProducts, isDragging, isInteractingWithBtn]);

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

    //mouse event handlers
    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        setIsDragging(true);
        setPageX(e.pageX);
    };

    const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
        setIsDragging(false);
    };

    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
        setIsDragging(false);
    };

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = pageX - e.pageX;

        if (x > 0) {
            handleNext();
        } else if (x < 0) {
            handlePrevious();
        }

        setIsDragging(false);
    };

    // touch event handlers
    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (
        e: TouchEvent<HTMLDivElement>
    ) => {
        setIsDragging(true);
        setPageX(e.touches[0].pageX);
    };

    const handleTouchLeave: TouchEventHandler<HTMLDivElement> = () => {
        setIsDragging(false);
    };

    const handleTouchMove: TouchEventHandler<HTMLDivElement> = (
        e: TouchEvent<HTMLDivElement>
    ) => {
        if (!isDragging) return;

        const x = pageX - e.touches[0].pageX;

        if (x > 0) {
            handleNext();
        } else if (x < 0) {
            handlePrevious();
        }

        setIsDragging(false);
    };

    return (
        <>
            <div
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchEnd={handleTouchLeave}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="wrapper min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-68px)] 2xl:min-h-fit w-full flex flex-nowrap items-center overflow-hidden"
            >
                {!featuredProducts.length
                    ? null
                    : featuredProducts.map((itm) => (
                          <BannerItem
                              key={itm._id}
                              img={itm.image}
                              productName={itm.name}
                              title={itm.category}
                              slug={itm.slug}
                              activeIndex={activeIndex}
                          />
                      ))}
            </div>
            {/* Button(Next and previous) */}
            <div className="absolute z-40 w-full top-2/4 -translate-y-2/4 text-4xl flex justify-between overflow-hidden">
                <button
                    onMouseEnter={() => setIsInteractingWithBtn(true)}
                    onMouseLeave={() => setIsInteractingWithBtn(false)}
                    className="hover:scale-125 hover:text-gray-600 transition-transform"
                    onClick={handlePrevious}
                >
                    <FiChevronLeft />
                </button>
                <button
                    onMouseEnter={() => setIsInteractingWithBtn(true)}
                    onMouseLeave={() => setIsInteractingWithBtn(false)}
                    className="hover:scale-125 hover:text-gray-600 transition-transform"
                    onClick={handleNext}
                >
                    <FiChevronRight />
                </button>
            </div>
            {/* Option Navigation */}
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
                              onMouseEnter={() => setIsInteractingWithBtn(true)}
                              onMouseLeave={() =>
                                  setIsInteractingWithBtn(false)
                              }
                          ></div>
                      ))}
            </div>
        </>
    );
};

export default BannerCarousel;
