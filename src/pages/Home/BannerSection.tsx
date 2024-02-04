import backgroundImg from "../../assets/white-background.webp";
import dress from "../../assets/dress-1.webp";
import OutlineButton from "../../components/ui/OutlineButton";
import { Link } from "react-router-dom";

const BannerSection = () => {
    return (
        <section
            style={{ backgroundImage: `url(${backgroundImg})` }}
            className="bg-cover bg-center bg-no-repeat"
        >
            <div className="wrapper min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-118px)] 2xl:min-h-fit w-full grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-5 px-4 sm:px-6 md:px-8">
                <div className="order-2 md:order-1 flex flex-col gap-4 md:gap-8 lg:gap-10">
                    <h3 className="text-lg font-extralight uppercase">
                        New attractive dress
                    </h3>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">
                        Stylish women's high quality Summer dress
                    </h1>

                    <Link to="">
                        <OutlineButton>Explore Now</OutlineButton>
                    </Link>
                </div>
                <div className="order-1 md:order-2">
                    <img
                        src={dress}
                        alt="women dress"
                        className="h-60 md:h-3/4"
                    />
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
