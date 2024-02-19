import bannerBg from "../../assets/images/page-header-bg.jpg";
type Props = {
    children: React.ReactNode;
    className?: string;
};

const PageBanner = ({ children, className }: Props) => {
    return (
        <section
            className={`py-20 text-center bg-[length:100%_100%] bg-no-repeat ${className}`}
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            {children}
        </section>
    );
};

export default PageBanner;
