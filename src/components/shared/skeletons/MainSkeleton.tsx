const MainSkeleton = () => {
    return (
        <section className="w-full min-h-[calc(100vh-120px)] grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 animate-pulse p-2 md:p-4 lg:p-8">
            <div className="bg-slate-200 md:col-span-2 flex flex-col p-8 justify-between gap-3">
                <div>
                    <div className="w-3/4 h-6 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                </div>
            </div>
            <div className="bg-slate-200 md:col-span-2 md:row-span-2 flex flex-col p-8 justify-center gap-8">
                <div>
                    <div className="w-3/4 h-6 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                </div>
            </div>
            <div className="bg-slate-200 hidden md:flex flex-col p-8 justify-between">
                <div>
                    <div className="w-3/4 h-6 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                </div>
            </div>
            <div className="bg-slate-200 hidden md:flex flex-col p-8 justify-between">
                <div>
                    <div className="w-3/4 h-6 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-4/5 h-4 bg-slate-300 rounded-full"></div>
                </div>
                <div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-full h-2 bg-slate-300 rounded-full mb-2"></div>
                </div>
            </div>
        </section>
    );
};

export default MainSkeleton;
