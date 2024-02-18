import { useLoaderData, useParams } from "react-router-dom";
import { Product } from "../../types";
import ProductCard from "../../components/shared/ProductCard/ProductCard";

const Category = () => {
    const params = useParams();
    const products = useLoaderData() as Product[];

    return (
        <>
            <section className="py-12 text-center text-3xl bg-gray-50">
                <h1>{params.catname}</h1>
            </section>
            <section className="wrapper py-12 px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                {!products.length
                    ? null
                    : products.map((pd) => (
                          <ProductCard product={pd} key={pd._id} />
                      ))}
            </section>
        </>
    );
};

export default Category;
