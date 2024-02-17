import { useLoaderData, useParams } from "react-router-dom";
import { Product } from "../../types";
import ProductCard from "../../components/shared/ProductCard/ProductCard";

const Collection = () => {
    const { collname } = useParams();
    const products = useLoaderData() as Product[];

    return (
        <>
            <section className="py-12 bg-slate-50">
                <h1 className="text-3xl font-medium capitalize text-center">
                    {collname} Collection
                </h1>
            </section>
            <section className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-12 my-12">
                {products.map((pd) => (
                    <ProductCard product={pd} key={pd._id} />
                ))}
            </section>
        </>
    );
};

export default Collection;
