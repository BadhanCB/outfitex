export type Product = {
    _id: string;
    name: string;
    price: number;
    category: string;
    collection: string;
    description: string;
    image: {
        data: string;
        type: string;
    };
    createdAt: Date;
    sellingCount: number;
};

export type ProductResponseData = {
    products: Product[];
    total: number;
};
