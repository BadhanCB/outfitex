import { Link } from "react-router-dom";
import OutlineButton from "../../components/ui/OutlineButton";

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
    return (
        <div
            className="h-full w-full flex-shrink-0 flex-grow-0 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-5 px-4 sm:px-6 md:px-8 transition-transform duration-500"
            style={{ transform: `translate(${-100 * activeIndex}%)` }}
        >
            <div className="order-2 md:order-1 md:w-3/4">
                <h3 className="text-lg font-extralight uppercase">{title}</h3>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-6 md:mb-8 lg:mb-10">
                    {productName}
                </h1>

                <Link to={`/product/${slug}`}>
                    <OutlineButton>Explore Now</OutlineButton>
                </Link>
            </div>
            <div className="order-1 md:order-2">
                <img
                    src={`data:${img?.type};base64, ${img?.data}`}
                    alt={productName}
                    className="h-60 md:h-[450px] lg:h-[500px] xl:h-[575px] w-auto"
                />
            </div>
        </div>
    );
};

export default BannerItem;
