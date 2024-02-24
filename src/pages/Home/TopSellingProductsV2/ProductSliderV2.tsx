import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Product } from "../../../types";
import AddtoCartBtn from "../../../components/ui/AddtoCartBtn";
import AddtoWishListBtn from "../../../components/ui/AddtoWishListBtn";
import { Link } from "react-router-dom";
import ViewProductLinkBtn from "../../../components/ui/ViewProductLinkBtn";
import { Variants, motion } from "framer-motion";

type Props = {
    products: Product[];
    variants?: Variants;
};

const ProductSliderV2 = ({ products }: Props) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const cardElem = cardRef.current;
    const sliderElem = sliderRef.current;
    const [scrollableWidth, setScrollableWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    useEffect(() => {
        if (sliderRef.current) {
            //total scrollable width = sliderElem.scrollWidth - sliderElem.offsetWidth
            setScrollableWidth(
                sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
            );
        }
    }, [sliderRef]);

    useEffect(() => {
        const sliderInteral = setInterval(() => {
            if (cardElem && !isInteracting) {
                if (translateX >= scrollableWidth) {
                    setTranslateX(0);
                } else {
                    setTranslateX((prev) => prev + cardElem.offsetWidth + 32);
                }
            }
        }, 5000);

        return () => {
            clearInterval(sliderInteral);
        };
    }, [cardElem, scrollableWidth, translateX, isInteracting]);

    const handleNext = () => {
        if (cardElem && sliderElem) {
            if (translateX >= scrollableWidth) {
                setTranslateX(0);
            } else {
                setTranslateX((prev) => prev + cardElem.offsetWidth + 32);
            }
        }
    };

    const handlePrev = () => {
        if (cardElem && sliderElem) {
            if (translateX <= 0) {
                setTranslateX(sliderElem.scrollWidth - sliderElem.offsetWidth);
            } else {
                setTranslateX((prev) => prev - (cardElem.offsetWidth + 32));
            }
        }
    };

    return (
        <div
            ref={sliderRef}
            className="col-span-4 md:col-span-3 hover:cursor-grab overflow-hidden py-8"
        >
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -scrollableWidth }}
                onDragStart={() => setIsInteracting(true)}
                onDragEnd={() => setIsInteracting(false)}
                whileTap={{ cursor: "grabbing" }}
                animate={{ x: -translateX }}
                className="flex relative gap-8"
            >
                {!products.length
                    ? null
                    : products.map((product) => (
                          <div
                              ref={cardRef}
                              key={product._id}
                              className="h-full min-w-72 bg-gray-50 hover:bg-white hover:shadow-xl group overflow-hidden snap-start"
                          >
                              <div className="h-96 w-full bg-gray-200 relative">
                                  <img
                                      src={`data:${product?.image?.type};base64, ${product?.image?.data}`}
                                      alt={product.name}
                                      className="h-full w-full object-cover "
                                      draggable="false"
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
            </motion.div>

            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl flex justify-end gap-2">
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
        </div>
    );
};

export default ProductSliderV2;
