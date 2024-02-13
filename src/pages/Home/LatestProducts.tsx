import { useState } from "react";
import LatestProductCard from "./LatestProductCard";

const LatestProducts = () => {
    const [category, setCategory] = useState<string>("");
    const products = [
        {
            _id: "1",
            name: "asdkja dsah dflhaskl dfl",
            price: "9234",
            img: "https://cdn.pixabay.com/photo/2022/05/24/06/23/indian-face-7217718_640.jpg",
            category: "accesories",
        },
        {
            _id: "2",
            name: "error quibusdam sed obcaecati recusandae",
            price: "23234",
            img: "https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg",
            category: "women",
        },
        {
            _id: "3",
            name: "amet magni et fuga quo tempore",
            price: "86686",
            img: "https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_640.jpg",
            category: "men",
        },
        {
            _id: "4",
            name: "asdkja dsah dflhaskl dfl",
            price: "58456",
            img: "https://cdn.pixabay.com/photo/2022/01/23/08/29/indian-woman-6960124_640.jpg",
            category: "kids",
        },
        {
            _id: "5",
            name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            price: "14141",
            img: "https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_640.jpg",
            category: "women",
        },
        {
            _id: "6",
            name: "Asperiores commodi quis temporibus excepturi",
            price: "75757",
            img: "https://cdn.pixabay.com/photo/2017/10/01/19/10/woman-2806675_640.jpg",
            category: "women",
        },
        {
            _id: "7",
            name: "Vitae nam soluta rem iusto beatae",
            price: "79797",
            img: "https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267_640.jpg",
            category: "men",
        },
        {
            _id: "8",
            name: "asdkja dsah dflhaskl dfl",
            price: "2772",
            img: "https://cdn.pixabay.com/photo/2021/07/19/03/40/woman-6477110_640.jpg",
            category: "men",
        },
        {
            _id: "9",
            name: "asdkja dsah dflhaskl dfl",
            price: "89783",
            img: "https://cdn.pixabay.com/photo/2017/06/15/22/05/woman-2406963_640.jpg",
            category: "kids",
        },
        {
            _id: "10",
            name: "asdkja dsah dflhaskl dfl",
            price: "4121",
            img: "https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_640.jpg",
            category: "kids",
        },
    ];

    return (
        <section className="bg-gray-100 py-20">
            <div className="wrapper px-4 md:px-8 lg:px-12">
                <h2 className="text-2xl md:text-2xl lg:text-4xl text-center">
                    New Arrivals
                </h2>
                <p className="text-lg text-center capitalize">
                    Latest product for you
                </p>
                <div className="mt-4">
                    <ul className="flex gap-4 md:gap-8 justify-center items-center uppercase text-base md:text-xl font-medium">
                        <li
                            className={`cursor-pointer  ${
                                !category
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("")}
                        >
                            All
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "women"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("women")}
                        >
                            Women
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "men"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("men")}
                        >
                            Men
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "kids"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("kids")}
                        >
                            Kids
                        </li>
                        <li
                            className={`cursor-pointer  ${
                                category === "accesories"
                                    ? "text-teal-700 border-b border-gray-600"
                                    : "text-slate-400"
                            } hover:text-slate-700`}
                            onClick={() => setCategory("accesories")}
                        >
                            Accesories
                        </li>
                    </ul>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {!category
                            ? products.map((pd) => (
                                  <LatestProductCard
                                      key={pd._id}
                                      product={pd}
                                  />
                              ))
                            : products
                                  .filter((pd) => pd.category === category)
                                  .map((pd) => (
                                      <LatestProductCard
                                          key={pd._id}
                                          product={pd}
                                      />
                                  ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
