import BannerSection from "./BannerSection";
import BrandPartners from "./BrandPartners";
import CategorySection from "./CategorySection";
import ServiceOffer from "./ServiceOffer";
import TopSellingProducts from "./TopSellingProducts";

const Home = () => {
    return (
        <>
            <BannerSection />
            <CategorySection />
            <BrandPartners />
            <TopSellingProducts />
            <ServiceOffer />
        </>
    );
};

export default Home;
