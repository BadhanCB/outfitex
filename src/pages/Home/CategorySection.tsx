import men from "../../assets/men.webp";
import women from "../../assets/women.webp";
import kids from "../../assets/kids.webp";
import accesories from "../../assets/accesories.webp";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CategorySection = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <section
            ref={ref}
            className="p-2 md:p-3 lg:p-4 xl:p-5 grid grid-cols-1 md:grid-cols-4 grid-rows-[repeat(4,_minmax(150px,_1fr))] md:grid-rows-[repeat(2,_minmax(200px,_1fr))] lg:grid-rows-[repeat(2,_minmax(250px,_1fr))] gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-hidden"
        >
            <motion.div
                initial={{ y: -200, opacity: 0 }}
                animate={
                    isInView
                        ? {
                              y: 0,
                              opacity: 1,
                              transition: {
                                  duration: 1,
                              },
                          }
                        : {}
                }
                onClick={() => navigate("/collection/men")}
                className="md:col-span-2 flex justify-center items-center group transition-[background-size] duration-300 text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(91,91,91,0.1)] after:z-10 after:inset-0 overflow-hidden cursor-pointer hover:after:bg-[rgba(0,0,0,0.2)] after:transition after:duration-500 group"
            >
                <div className="absolute h-full w-full">
                    <img
                        src={men}
                        alt="men"
                        className="h-full w-full group-hover:scale-125 object-contain object-center transition-transform duration-300"
                    />
                </div>
                <h3
                    style={{ textShadow: "0px 0px 10px black" }}
                    className="uppercase text-5xl relative z-20 group-hover:scale-105 transition-transform duration-500"
                >
                    Men
                </h3>
            </motion.div>

            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={
                    isInView
                        ? {
                              x: 0,
                              opacity: 1,
                              transition: {
                                  duration: 1,
                              },
                          }
                        : {}
                }
                onClick={() => navigate("/collection/women")}
                className="md:col-span-2 md:row-span-2 flex justify-center items-center text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(91,91,91,0.1)] hover:after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer after:transition after:duration-500 group"
            >
                <div className="absolute h-full w-full">
                    <img
                        src={women}
                        alt="women"
                        className="h-full w-full group-hover:scale-125 object-contain object-center transition-transform duration-300"
                    />
                </div>
                <h3
                    style={{ textShadow: "0px 0px 10px black" }}
                    className="uppercase text-5xl relative z-20 group-hover:scale-105 transition-transform duration-500"
                >
                    Women
                </h3>
            </motion.div>

            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={
                    isInView
                        ? {
                              x: 0,
                              opacity: 1,
                              transition: {
                                  duration: 1,
                              },
                          }
                        : {}
                }
                onClick={() => navigate("/collection/kids")}
                className="flex justify-center items-center group text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(91,91,91,0.1)] hover:after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer after:transition after:duration-500 group"
            >
                <div className="absolute h-full w-full">
                    <img
                        src={kids}
                        alt="kids"
                        className="h-full w-full group-hover:scale-125 object-contain object-center transition-transform duration-300"
                    />
                </div>
                <h3
                    style={{ textShadow: "0px 0px 10px black" }}
                    className="uppercase text-5xl relative z-20 group-hover:scale-105 transition-transform duration-500"
                >
                    Kids
                </h3>
            </motion.div>

            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={
                    isInView
                        ? {
                              y: 0,
                              opacity: 1,
                              transition: {
                                  duration: 1,
                              },
                          }
                        : {}
                }
                onClick={() => navigate("/collection/accesories")}
                className="flex justify-center items-center bg-[length:75%_auto] hover:bg-[length:90%_auto] transition-[background-size] duration-300 bg-no-repeat bg-center text-white relative after:w-full after:h-full after:absolute after:bg-[rgba(91,91,91,0.1)] hover:after:bg-[rgba(0,0,0,0.2)] after:z-10 after:inset-0 overflow-hidden cursor-pointer after:transition after:duration-500 group"
            >
                <div className="absolute h-full w-full">
                    <img
                        src={accesories}
                        alt="accesories"
                        className="h-full w-full group-hover:scale-125 object-contain object-center transition-transform duration-300"
                    />
                </div>
                <h3
                    style={{ textShadow: "0px 0px 10px black" }}
                    className="uppercase text-2xl lg:text-4xl relative z-20 group-hover:scale-105 transition-transform duration-500"
                >
                    Accesories
                </h3>
            </motion.div>
        </section>
    );
};

export default CategorySection;
