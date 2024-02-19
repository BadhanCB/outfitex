import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiLoader, FiUpload } from "react-icons/fi";
import { getTokenFromCookie } from "../../lib/utils";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Collection } from "../../types";

type formInputType = {
    name: { value: string };
    price: { value: string };
    category: { value: string };
    collection: { value: string };
    description: { value: string };
};

const AddProduct = () => {
    const [isLoading, setIsloading] = useState(false);
    const [imageFile, setImageFile] = useState<FileList | null>(null);
    const [collections, setCollections] = useState<Collection[]>([]);
    const [collection, setCollection] = useState("");
    const { setUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const res = await fetch("http://localhost:5379/collections");

                if (!res.ok) {
                    toast.error(res.statusText);
                    return;
                }

                const data: Collection[] = await res.json();

                setCollections(data);
            } catch (error) {
                let errmsg = "Failed to fetch";
                if (error instanceof Error) {
                    errmsg = error.message;
                }
                toast.error(errmsg);
            }
        };

        fetchCollections();
    }, []);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setIsloading(true);
        try {
            const form = e.target as HTMLFormElement & formInputType;

            const name = form.name.value;
            const price = form.price.value;
            const category = form.category.value;
            const collection = form.collection.value;
            const description = form.description.value;

            if (
                !name ||
                !price ||
                !category ||
                !collection ||
                !description ||
                !imageFile
            ) {
                toast.error("Fill all input of the form");
                setIsloading(false);
                return;
            } else {
                const formData: FormData = new FormData();
                formData.append("file", imageFile[0]);
                formData.append("name", name);
                formData.append("price", price);
                formData.append("category", category);
                formData.append("collection", collection);
                formData.append("description", description);

                const token = getTokenFromCookie();
                if (!token) {
                    toast.error("You are not verified!!!\nPlease Login again");
                    setUser({});
                    setIsloading(false);
                    navigate("/login");
                    return;
                }

                const res = await fetch("http://localhost:5379/products/new", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (!res.ok) {
                    toast.error(res.statusText);
                    setIsloading(false);
                    return;
                }

                const data: { message: string } = await res.json();
                toast.success(data.message);

                setImageFile(null);
                setIsloading(false);
                form.reset();
            }
        } catch (error) {
            let errorMessage = "Failed to Create New product";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            toast.error(errorMessage);
            setIsloading(false);
        }
    };

    return (
        <div className="p-4 md:p-8 lg:p-12">
            <h1 className="text-3xl font-medium">Add New Product</h1>
            <form onSubmit={handleSubmit} className="mt-12">
                <div className="flex gap-4 flex-col md:flex-row">
                    <div>
                        <label htmlFor="img" className="cursor-pointer">
                            <div className="bg-slate-50 rounded-md border w-52 h-52 flex flex-col justify-center items-center text-gray-500 overflow-hidden">
                                {imageFile?.length ? (
                                    <img
                                        src={URL.createObjectURL(imageFile[0])}
                                        alt="image preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <FiUpload className="text-4xl" />
                                        <p>Add a product image</p>
                                    </>
                                )}
                            </div>
                        </label>
                        <input
                            type="file"
                            name="img"
                            id="img"
                            className="hidden"
                            onChange={(e) => setImageFile(e.target.files)}
                        />
                    </div>
                    <div className="flex-1 text-lg flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 w-full p-2 rounded-md"
                            placeholder="Product name"
                        />
                        <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 w-full p-2 rounded-md"
                            placeholder="Price"
                        />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <select
                                name="collection"
                                id="collection"
                                defaultValue=""
                                onChange={(e) => setCollection(e.target.value)}
                                className="bg-gray-50 w-full p-2 rounded-md"
                            >
                                <option value="" disabled>
                                    Select a Collection Type
                                </option>
                                {collections.map((coll) => (
                                    <option value={coll.slug}>
                                        {coll.name}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="category"
                                id="category"
                                defaultValue=""
                                disabled={collection.length < 1}
                                className="bg-gray-50 w-full p-2 rounded-md focus:outline-none"
                            >
                                <option
                                    value=""
                                    disabled
                                    className="text-gray-400"
                                >
                                    Select a Category
                                </option>

                                {collections.map((coll) =>
                                    coll.slug === collection
                                        ? coll.categories.map((cat) => (
                                              <option value={cat.slug}>
                                                  {cat.name}
                                              </option>
                                          ))
                                        : null
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="text-lg mt-4">
                    <textarea
                        name="description"
                        id="description"
                        className="w-full h-72 bg-gray-50 p-4 rounded-md focus:outline-none"
                        placeholder="Product Description"
                    ></textarea>
                </div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="px-8 py-3 mt-4 bg-orange-500 text-gray-50 hover:bg-orange-400 uppercase rounded-md flex items-center gap-2"
                >
                    {isLoading && <FiLoader className="animate-spin" />}
                    {isLoading ? "Submitting..." : "Submit Product"}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
