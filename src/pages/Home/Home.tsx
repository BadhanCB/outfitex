import BrandPartners from "./BrandPartners";
import BannerSection from "./BannerSection/BannerSection";
import CategorySection from "./CategorySection";
import LatestProducts from "./LatestProducts/LatestProducts";
import ServiceOffer from "./ServiceOffer";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";

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
