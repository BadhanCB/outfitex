import men from "../../assets/men.webp";
import women from "../../assets/women.webp";
import kids from "../../assets/kids.webp";
import accesories from "../../assets/accesories.webp";

const CategorySection = () => {
    return (
        <section className="p-2 md:p-3 lg:p-4 xl:p-5 grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(4,_minmax(150px,_1fr))] md:grid-rows-[repeat(2,_minmax(200px,_1fr))] lg:grid-rows-[repeat(2,_minmax(250px,_1fr))] gap-2 md:gap-3 lg:gap-4 xl:gap-5">
            <div
                style={{ backgroundImage: `url(${men})` }}
                className="md:col-span-2 flex justify-center items-center bg-[length:auto_100%] hover:bg-[length:auto_125%] transition-[background-size] duration-300 bg-no-repeat bg-center text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer hover:after:bg-[rgba(0,0,0,0.4)] after:transition after:duration-500 group"
            >
                <h3 className="uppercase text-5xl font-extralight relative z-20 group-hover:scale-105 transition-transform duration-500">
                    Men
                </h3>
            </div>
            <div
                style={{ backgroundImage: `url(${women})` }}
                className="md:col-span-2 md:row-span-2 flex justify-center items-center bg-[length:auto_75%] hover:bg-[length:auto_90%] transition-[background-size] duration-300 bg-no-repeat bg-center text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer hover:after:bg-[rgba(0,0,0,0.4)] after:transition after:duration-500 group"
            >
                <h3 className="uppercase text-5xl font-extralight relative z-20 group-hover:scale-105 transition-transform duration-500">
                    Women
                </h3>
            </div>
            <div
                style={{ backgroundImage: `url(${kids})` }}
                className="flex justify-center items-center bg-[length:auto_75%] hover:bg-[length:auto_90%] transition-[background-size] duration-300 bg-no-repeat bg-center text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer hover:after:bg-[rgba(0,0,0,0.4)] after:transition after:duration-500 group"
            >
                <h3 className="uppercase text-5xl font-extralight relative z-20 group-hover:scale-105 transition-transform duration-500">
                    Kids
                </h3>
            </div>
            <div
                style={{ backgroundImage: `url(${accesories})` }}
                className="flex justify-center items-center bg-[length:75%_auto] hover:bg-[length:90%_auto] transition-[background-size] duration-300 bg-no-repeat bg-center text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer hover:after:bg-[rgba(0,0,0,0.4)] after:transition after:duration-500 group"
            >
                <h3 className="uppercase text-2xl lg:text-4xl font-extralight relative z-20 group-hover:scale-105 transition-transform duration-500">
                    Accesories
                </h3>
            </div>
        </section>
    );
};

export default CategorySection;
