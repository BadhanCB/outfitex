import { Link } from "react-router-dom";
import OutlineButton from "../../../components/ui/OutlineButton";
import { motion } from "framer-motion";

type Props = {
    title?: string;
    productName?: string;
    img?: {
        data?: string;
        type?: string;
    };
    slug?: string;
    activeIndex: number;
};

const BannerItem = ({ img, productName, title, slug, activeIndex }: Props) => {
    const varients = {
        initial: { opacity: 0, y: -50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, staggerChildren: 0.3 },
        },
    };

    return (
        <div
            className={`h-full w-full flex-shrink-0 flex-grow-0 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-5 px-4 sm:px-6 md:px-8`}
            style={{ transform: `translate(${-100 * activeIndex}%)` }}
        >
            <motion.div
                variants={varients}
                initial="initial"
                whileInView="animate"
                className="order-2 md:order-1 place-self-center"
            >
                <motion.h3
                    variants={varients}
                    className="text-lg font-extralight uppercase"
                >
                    {title}
                </motion.h3>
                <motion.h1
                    variants={varients}
                    className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-6 md:mb-8 lg:mb-10"
                >
                    {productName}
                </motion.h1>

                <motion.div variants={varients}>
                    <Link to={`/product/${slug}`}>
                        <OutlineButton className="hover:bg-slate-900 hover:text-gray-50 transition duration-300 carousel-btn">
                            Explore Now
                        </OutlineButton>
                    </Link>
                </motion.div>
            </motion.div>
            <div className="order-1 md:order-2">
                <motion.img
                    loading="lazy"
                    src={`data:${img?.type};base64, ${img?.data}`}
                    alt={productName}
                    draggable="false"
                    className="h-60 md:h-[450px] lg:h-[500px] xl:h-[575px] w-auto"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1 },
                    }}
                />
            </div>
        </div>
    );
};

export default BannerItem;
