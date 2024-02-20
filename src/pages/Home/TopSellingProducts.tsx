import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Product } from "../../types";
import AddtoCartBtn from "../../components/ui/AddtoCartBtn";
import AddtoWishListBtn from "../../components/ui/AddtoWishListBtn";
import { Link } from "react-router-dom";
import ViewProductLinkBtn from "../../components/ui/ViewProductLinkBtn";

const TopSellingProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const cardRef = useRef<HTMLDivElement | null>(null);
    const [carouselElem, setCarouselElem] = useState<HTMLElement>(
        document.querySelector(".carousel") as HTMLElement
    );

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/products/top-selling`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);

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
        <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-12">
            <div className="wrapper">
                <h2 className="text-2xl md:text-2xl lg:text-4xl text-center">
                    Our Best Selling Items
                </h2>
                <p className="text-lg text-center">Product in focus</p>
                <div className="mt-8 relative">
                    <div className="carousel grid gap-12 grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%_-_9rem)_/_2)] lg:auto-cols-[calc((100%_-_9rem)_/_3)] xl:auto-cols-[calc((100%_-_9rem)_/_4)] overflow-x-auto scroll-smooth snap-mandatory snap-x">
                        {/*3rem gap applied 3 times between 4 column so, 9rem subtract from 100%*/}
                        {!products.length
                            ? null
                            : products.map((product) => (
                                  <div
                                      ref={cardRef}
                                      key={product._id}
                                      className="h-full w-full bg-gray-50 group overflow-hidden"
                                  >
                                      <div className="h-96 w-full bg-gray-200 relative">
                                          <img
                                              src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                                              alt={product.name}
                                              className="h-full w-full object-cover"
                                              draggable={false}
                                          />
                                          <AddtoCartBtn product={product} />
                                          <div className="absolute top-0 right-0 flex flex-col gap-4 p-3">
                                              <AddtoWishListBtn
                                                  product={product}
                                              />
                                              <ViewProductLinkBtn
                                                  product={product}
                                              />
                                          </div>
                                      </div>
                                      <div className="p-4">
                                          <Link
                                              to={`/product/${product.slug}`}
                                              className="text-lg font-semibold"
                                          >
                                              {product.name &&
                                              product.name?.length > 28
                                                  ? product.name?.slice(0, 28) +
                                                    "..."
                                                  : product.name}
                                          </Link>
                                          <p>$ {product.price}</p>
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
            </div>
        </section>
    );
};

export default TopSellingProducts;
