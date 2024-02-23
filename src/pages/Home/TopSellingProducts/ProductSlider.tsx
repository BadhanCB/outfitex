import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Product } from "../../../types";
import AddtoCartBtn from "../../../components/ui/AddtoCartBtn";
import AddtoWishListBtn from "../../../components/ui/AddtoWishListBtn";
import { Link } from "react-router-dom";
import ViewProductLinkBtn from "../../../components/ui/ViewProductLinkBtn";

type Props = {
    products: Product[];
};

const ProductSlider = ({ products }: Props) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const handleNext = () => {
        const cardElem = cardRef.current;
        const sliderElem = sliderRef.current;
        if (cardElem && sliderElem) {
            sliderElem.scrollLeft += cardElem?.offsetWidth + 48;
        }
    };

    const handlePrev = () => {
        const cardElem = cardRef.current;
        const sliderElem = sliderRef.current;
        if (cardElem && sliderElem) {
            sliderElem.scrollLeft += -(cardElem?.offsetWidth + 48);
        }
    };

    return (
        <div className="relative">
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl flex justify-end gap-2 w-full my-4">
                <button
                    onClick={handlePrev}
                    className="rounded-full bg-indigo-100 hover:bg-indigo-400 text-indigo-400 hover:text-gray-50 p-1.5"
                >
                    <FiChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="rounded-full bg-indigo-100 hover:bg-indigo-400 text-indigo-400 hover:text-gray-50 p-1.5"
                >
                    <FiChevronRight />
                </button>
            </div>
            <div
                ref={sliderRef}
                className="hide-scrollbar grid gap-12 grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%_-_9rem)_/_2)] lg:auto-cols-[calc((100%_-_9rem)_/_3)] xl:auto-cols-[calc((100%_-_9rem)_/_4)] overflow-x-auto scroll-smooth snap-mandatory snap-x"
            >
                {/*3rem gap applied 3 times between 4 column so, 9rem subtract from 100%*/}
                {!products.length
                    ? null
                    : products.map((product) => (
                          <div
                              ref={cardRef}
                              key={product._id}
                              className="h-full w-full bg-gray-50 group overflow-hidden snap-start"
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
                                      <AddtoWishListBtn product={product} />
                                      <ViewProductLinkBtn product={product} />
                                  </div>
                              </div>
                              <div className="p-4">
                                  <Link
                                      to={`/product/${product.slug}`}
                                      className="text-lg font-semibold"
                                  >
                                      {product.name && product.name?.length > 28
                                          ? product.name?.slice(0, 28) + "..."
                                          : product.name}
                                  </Link>
                                  <p>$ {product.price}</p>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default ProductSlider;
