const TopSellingSectionSkeletonV2 = () => {
    return (
        <section className="col-span-3 bg-gray-200 p-12 grid gap-12 grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-6rem)/2)] lg:auto-cols-[calc((100%-6rem)/3)] overflow-x-auto mt-12 animate-pulse">
            <div className="bg-gray-300">
                <div className="bg-gray-400 h-56 w-full"></div>
                <div className="p-4">
                    <div className="h-8 w-4/5 bg-gray-400"></div>
                    <div className="h-5 w-3/5 bg-gray-400 mt-4"></div>
                </div>
            </div>
            <div className="bg-gray-300">
                <div className="bg-gray-400 h-56 w-full"></div>
                <div className="p-4">
                    <div className="h-8 w-4/5 bg-gray-400"></div>
                    <div className="h-5 w-3/5 bg-gray-400 mt-4"></div>
                </div>
            </div>
            <div className="bg-gray-300">
                <div className="bg-gray-400 h-56 w-full"></div>
                <div className="p-4">
                    <div className="h-8 w-4/5 bg-gray-400"></div>
                    <div className="h-5 w-3/5 bg-gray-400 mt-4"></div>
                </div>
            </div>
        </section>
    );
};

export default TopSellingSectionSkeletonV2;
