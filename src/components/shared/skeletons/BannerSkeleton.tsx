const BannerSkeleton = () => {
    return (
        <div className="wrapper h-[calc(100vh-100px)] lg:h-[calc(100vh-118px)] w-full bg-gray-200 grid grid-cols-1 md:grid-cols-2 animate-pulse">
            <div className="p-12 order-2 md:order-1 flex flex-col justify-center gap-3">
                <div className="w-1/4 h-4 bg-gray-300"></div>
                <div className="w-3/4 h-10 bg-gray-300"></div>
                <div className="w-2/4 h-6 bg-gray-300"></div>
                <div className="w-1/4 h-12 bg-gray-300"></div>
            </div>
            <div className="p-12 order-1 md:order-2">
                <div className="w-52 mx-auto md:w-full h-48 md:h-full bg-gray-300"></div>
            </div>
        </div>
    );
};

export default BannerSkeleton;
