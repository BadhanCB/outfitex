import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TopSellingProducts = () => {
    const products = [
        {
            name: "error quibusdam sed obcaecati recusandae",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg",
        },
        {
            name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_640.jpg",
        },
        {
            name: "Asperiores commodi quis temporibus excepturi",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2017/10/01/19/10/woman-2806675_640.jpg",
        },
        {
            name: "amet magni et fuga quo tempore",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_640.jpg",
        },
        {
            name: "Vitae nam soluta rem iusto beatae",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267_640.jpg",
        },
        {
            name: "asdkja dsah dflhaskl dfl",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2021/07/19/03/40/woman-6477110_640.jpg",
        },
        {
            name: "asdkja dsah dflhaskl dfl",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2022/01/23/08/29/indian-woman-6960124_640.jpg",
        },
        {
            name: "asdkja dsah dflhaskl dfl",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2017/06/15/22/05/woman-2406963_640.jpg",
        },
        {
            name: "asdkja dsah dflhaskl dfl",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg",
        },
        {
            name: "asdkja dsah dflhaskl dfl",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2022/05/24/06/23/indian-face-7217718_640.jpg",
        },
    ];

    const cardRef = useRef<HTMLDivElement | null>(null);
    const [carouselElem, setCarouselElem] = useState<HTMLElement>(
        document.querySelector(".carousel") as HTMLElement
    );

    useEffect(() => {
        setCarouselElem(document.querySelector(".carousel") as HTMLElement);
    }, []);

    const handleNext = () => {
        const cardElem = cardRef.current;
        carouselElem.scrollLeft += (cardElem?.offsetWidth || 0) + 48;
    };

    const handlePrev = () => {
        const cardElem = cardRef.current;
        carouselElem.scrollLeft += -((cardElem?.offsetWidth || 0) + 48);
    };

    return (
        <section className="wrapper my-20 px-4 md:px-8 lg:px-12">
            <h1 className="text-2xl md:text-2xl lg:text-4xl text-center">
                Our Best Selling Items
            </h1>
            <p className="text-lg text-center">Product in focus</p>
            <div className="mt-8 relative">
                <div className="carousel grid gap-12 grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%_-_9rem)_/_2)] lg:auto-cols-[calc((100%_-_9rem)_/_3)] xl:auto-cols-[calc((100%_-_9rem)_/_4)] overflow-x-scroll scroll-smooth snap-mandatory snap-x">
                    {/*3rem gap applied 3 times between 4 column so, 9rem subtract from 100%*/}
                    {products.map((pd, i) => (
                        <div ref={cardRef} key={i} className="snap-start">
                            <div className="p-12 h-96 w-full bg-gray-100">
                                <img
                                    src={pd.img}
                                    alt="img"
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {pd.name}
                                </h3>
                                <p>$ {pd.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-[calc(100%_+_2rem)] md:w-[calc(100%_+_4rem)] lg:w-[calc(100%_+_6rem)] absolute flex justify-between text-2xl md:text-3xl lg:text-5xl top-2/4 -translate-y-2/4 -left-4 md:-left-8 lg:-left-12">
                    <button
                        onClick={handlePrev}
                        className="hover:text-gray-500 hover:scale-95 transition-transform disabled:text-gray-300 m-0 p-0"
                    >
                        <FiChevronLeft className="m-0 p-0" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="hover:text-gray-500 hover:scale-95 transition-transform disabled:text-gray-300"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopSellingProducts;
