import BrandPartners from "./BrandPartners";
import BannerSection from "./BannerSection/BannerSection";
import CategorySection from "./CategorySection";
import LatestProducts from "./LatestProducts/LatestProducts";
import ServiceOffer from "./ServiceOffer";
import TopSellingProductsV2 from "./TopSellingProductsV2/TopSellingProductsv2";

const Home = () => {
    return (
        <>
            <BannerSection />
            <CategorySection />
            <TopSellingProductsV2 />
            <BrandPartners />
            <LatestProducts />
            <ServiceOffer />
        </>
    );
};

export default Home;
