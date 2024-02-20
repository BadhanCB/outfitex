import BrandPartners from "./BrandPartners";
import BannerSection from "./BannerSection";
import CategorySection from "./CategorySection";
import LatestProducts from "./LatestProducts";
import ServiceOffer from "./ServiceOffer";
import TopSellingProducts from "./TopSellingProducts";

const Home = () => {
    return (
        <>
            <BannerSection />
            <CategorySection />
            <TopSellingProducts />
            <BrandPartners />
            <LatestProducts />
            <ServiceOffer />
        </>
    );
};

export default Home;
