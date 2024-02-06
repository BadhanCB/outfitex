import { useState } from "react";
import { FiArrowRight, FiX } from "react-icons/fi";

const OfferNotificationBar = () => {
    const [isShowing, setIsShowing] = useState(true);

    return (
        <section
            className={`bg-amber-400 h-10 ${isShowing ? "flex" : "hidden"}`}
        >
            <div className="wrapper w-full flex items-center px-1 sm:px-2 md:px-4 text-xs sm:text-sm md:text-base">
                <div className="flex-1 text-center flex flex-wrap md:gap-8 justify-center items-center">
                    <p>
                        Free Delivery on orders over $80. Don’t miss discount.
                    </p>
                    <p className="ml-4">
                        SALE OFF <FiArrowRight className="inline-block" />
                    </p>
                </div>
                <FiX
                    className="cursor-pointer md:text-2xl"
                    onClick={() => setIsShowing(false)}
                />
            </div>
        </section>
    );
};

export default OfferNotificationBar;
