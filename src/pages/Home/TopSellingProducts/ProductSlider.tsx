import {
    MouseEvent,
    MouseEventHandler,
    startTransition,
    useEffect,
    useRef,
    useState,
} from "react";
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

const ProductSlider = ({ products, variants }: Props) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [pageX, setPageX] = useState(0);
    const cardElem = cardRef.current;
    const sliderElem = sliderRef.current;

    useEffect(() => {
        const sliderInteral = setInterval(() => {
            if (cardElem && sliderElem && !isDragging) {
                sliderElem.scrollLeft += cardElem?.offsetWidth + 48;
                //total scrollable width = sliderElem.scrollWidth - sliderElem.offsetWidth
                if (
                    sliderElem.scrollWidth - sliderElem.offsetWidth ===
                    Math.ceil(sliderElem.scrollLeft)
                ) {
                    sliderElem.scrollLeft = 0;
                }
            }
        }, 5000);

        return () => {
            clearInterval(sliderInteral);
        };
    }, [cardElem, sliderElem, isDragging]);

    const handleNext = () => {
        if (cardElem && sliderElem) {
            sliderElem.scrollLeft += cardElem?.offsetWidth + 48;
            //total scrollable width = sliderElem.scrollWidth - sliderElem.offsetWidth
            if (
                sliderElem.scrollWidth - sliderElem.offsetWidth ===
                    Math.ceil(sliderElem.scrollLeft) ||
                sliderElem.scrollWidth - sliderElem.offsetWidth ===
                    Math.floor(sliderElem.scrollLeft)
            ) {
                sliderElem.scrollLeft = 0;
            }
        }
    };

    const handlePrev = () => {
        if (cardElem && sliderElem) {
            sliderElem.scrollLeft += -(cardElem?.offsetWidth + 48);
            if (sliderElem.scrollLeft === 0) {
                sliderElem.scrollLeft =
                    sliderElem.scrollWidth - sliderElem.offsetWidth;
            }
        }
    };

    //mouse event handlers
    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        setIsDragging(true);
        if (sliderElem) {
            startTransition(() => setPageX(e.pageX - sliderElem.offsetLeft));
        }
    };

    const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
        setIsDragging(false);
    };

    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
        setIsDragging(false);
    };

    let isSignificantMove = false;
    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
        if (!isDragging) return;
        e.preventDefault();

        const x = pageX - e.pageX;
        const threshold = 10;

        if (Math.abs(x) > threshold) {
            isSignificantMove = true;
        }

        if (sliderElem && isSignificantMove) {
            sliderElem.scrollLeft += x;

            isSignificantMove = false;
        }
    };

    return (
        <div className="relative overflow-hidden hover:cursor-grab">
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
            <motion.div
                ref={sliderRef}
                className="hide-scrollbar grid gap-12 grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%_-_9rem)_/_2)] lg:auto-cols-[calc((100%_-_9rem)_/_3)] xl:auto-cols-[calc((100%_-_9rem)_/_4)] overflow-x-auto overflow-y-hidden scroll-smooth snap-mandatory snap-x"
                variants={variants}
                // handling mouse event
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                {/*3rem gap applied 3 times between 4 column so, 9rem subtract from 100%*/}
                {!products.length
                    ? null
                    : products.map((product) => (
                          <motion.div
                              ref={cardRef}
                              key={product._id}
                              className="h-full w-full bg-gray-50 hover:bg-white group overflow-hidden snap-start"
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
                          </motion.div>
                      ))}
            </motion.div>
        </div>
    );
};

export default ProductSlider;
