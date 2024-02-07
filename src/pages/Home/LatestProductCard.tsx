type Props = {
    product: {
        _id?: string;
        img: string;
        name: string;
        price: string;
        category?: string;
    };
};

const LatestProductCard = ({ product }: Props) => {
    return (
        <div className="h-full w-full bg-gray-50 group">
            <div className="p-8 h-96 w-full bg-gray-200 relative">
                <img
                    src={product.img}
                    alt="img"
                    className="h-full w-full object-cover roin"
                    draggable={false}
                />
                <button className="absolute left-1/2 -translate-x-1/2 bottom-8 p-2 w-[calc(100%-4rem)] bg-gray-800 text-white font-medium scale-y-100 lg:scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom">
                    Add to cart
                </button>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p>$ {product.price}</p>
            </div>
        </div>
    );
};

export default LatestProductCard;
