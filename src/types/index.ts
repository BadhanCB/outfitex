export type Product = {
    _id?: string;
    slug?: string;
    name?: string;
    price?: number;
    category?: string;
    collection?: string;
    description?: string;
    image?: {
        data?: string;
        type?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
    sellingCount?: number;
    seller?: {
        _id?: string;
        name?: string;
        userName?: string;
        email?: string;
        phone?: string;
        slug?: string;
    };
};

export type ProductResponseData = {
    products: Product[];
    total: number;
};

export type UserType = {
    _id?: string;
    name?: string;
    userName?: string;
    address?: string;
    phone?: string;
    email?: string;
    photo?: {
        data?: string;
        type?: string;
    };
    role?: string;
    slug?: string;
    personalAddress?: string;
    corporateAddress?: string;
    nidNumber?: string;
};

export type WishListType = {
    _id?: string;
    name?: string;
    price?: number;
    image?: {
        data?: string;
        type?: string;
    };
    seller?: object;
};

export type CartItemType = WishListType & {
    quantity?: number;
};

export type Order = {
    products: {
        _id?: string;
        name?: string;
        price?: number;
        quantity?: number;
        seller?: object;
    }[];
    buyer: {
        _id?: string;
        name?: string;
        userName?: string;
        address?: string;
        email?: string;
        phone?: string;
    };
    totalPayableAmount?: number;
};

export type Category = {
    name: string;
    slug: string;
};

export type Collection = {
    _id: string;
    name: string;
    slug: string;
    categories: Category[];
};
