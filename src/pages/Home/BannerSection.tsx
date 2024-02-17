import womanDress from "../../assets/dress-1.webp";
import kidsDress from "../../assets/kids-dress.webp";
import manDress from "../../assets/man-dress.webp";
import accesories from "../../assets/woman-accessories.webp";
import BannerItem from "./BannerItem";
import { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const BannerSection = () => {
    const bannerItems = useMemo(
        () => [
            {
                _id: 1,
                imgUrl: womanDress,
                title: "NEW ATTRACTIVE DRESS",
                productName: "Stylish women's high quality Summer dress",
            },
            {
                _id: 2,
                imgUrl: manDress,
                title: "Best Mens Dress",
                productName: "Premium Check Formal Suit by RICHMAN",
            },
            {
                _id: 3,
                imgUrl: kidsDress,
                title: "Kids Wear",
                productName: "Girls salwar kameez",
            },
            {
                _id: 4,
                imgUrl: accesories,
                title: "Fashion Accessories",
                productName: "Stylish women's Genuine Leather Bag",
            },
        ],
        []
    );
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const slideTimeInterval = setInterval(() => {
            setActiveIndex((prev) => {
                if (prev === bannerItems.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 7000);

        return () => clearInterval(slideTimeInterval);
    }, [bannerItems]);

    const handleNext = () => {
        setActiveIndex((prev) => {
            if (prev === bannerItems.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    const handlePrevious = () => {
        setActiveIndex((prev) => {
            if (prev === 0) {
                return bannerItems.length - 1;
            } else {
                return prev - 1;
            }
        });
    };

    return (
        <section className="relative bg-gray-50">
            <div className="wrapper min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-118px)] 2xl:min-h-fit w-full flex flex-nowrap items-center overflow-hidden">
                {bannerItems.map((itm) => (
                    <BannerItem
                        key={itm._id}
                        imgUrl={itm.imgUrl}
                        productName={itm.productName}
                        title={itm.title}
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
                {bannerItems.map((i, index) => (
                    <div
                        key={i._id}
                        className={`h-3 ${
                            activeIndex === index ? "w-7 bg-slate-600" : "w-3"
                        } rounded-full border-2 border-gray-600 cursor-pointer transition-all`}
                        onClick={() => setActiveIndex(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default BannerSection;
