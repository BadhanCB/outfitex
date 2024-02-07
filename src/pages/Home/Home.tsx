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
            <BrandPartners />
            <TopSellingProducts />
            <ServiceOffer />
            <LatestProducts />
        </>
    );
};

export default Home;
