import { FiAlertCircle } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineRocketLaunch, MdOutlineSupport } from "react-icons/md";

const ServiceOffer = () => {
    return (
        <section className="wrapper my-20 px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-4">
            <div className="flex items-center gap-4 bg-gray-100 p-4 h-full">
                <div>
                    <MdOutlineRocketLaunch className="text-5xl" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl">FREE SHIPPING</h3>
                    <p>Orders $50 or more</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 p-4 h-full">
                <div>
                    <GiReturnArrow className="text-5xl" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl">FREE RETURNS</h3>
                    <p>Within 30 days</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 p-4 h-full">
                <div>
                    <FiAlertCircle className="text-5xl" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl">GET 20% OFF 1 ITEM</h3>
                    <p>when you sign up</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 p-4 h-full">
                <div>
                    <MdOutlineSupport className="text-5xl" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl">WE SUPPORT</h3>
                    <p>24/7 amazing services</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceOffer;
