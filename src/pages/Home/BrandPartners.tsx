import richman from "../../assets/brands/richman.webp";
import dorjiBari from "../../assets/brands/dorji-bari.jpg";
import aarong from "../../assets/brands/aarong.webp";
import catsEye from "../../assets/brands/cats-eye.png";
import easy from "../../assets/brands/easy.webp";
import leReve from "../../assets/brands/le-reve.png";
import yellow from "../../assets/brands/yellow.webp";
import sailor from "../../assets/brands/sailor.jpg";
import ecstasy from "../../assets/brands/ecstasy.jpg";

const BrandPartners = () => {
    const brandsLogo = [
        richman,
        dorjiBari,
        aarong,
        catsEye,
        easy,
        leReve,
        yellow,
        sailor,
        ecstasy,
    ];

    return (
        <section className="wrapper my-20 mask">
            <div className="flex flex-nowrap gap-32 w-max horizontal-infinity-slider">
                {brandsLogo.map((url, index) => (
                    <div key={index} className="w-20 h-20">
                        <img
                            src={url}
                            alt={`brand logo ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
                {brandsLogo.map((url, index) => (
                    <div key={index} className="w-20 h-20">
                        <img
                            src={url}
                            alt={`brand logo ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandPartners;
