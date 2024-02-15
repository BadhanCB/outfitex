import { FormEvent, FormEventHandler, useState } from "react";
import { FiUpload } from "react-icons/fi";

type formInputType = {
    name: { value: string };
    price: { value: string };
    category: { value: string };
    collection: { value: string };
    description: { value: string };
};

const AddProduct = () => {
    const [imageFile, setImageFile] = useState<FileList | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
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
                alert("Fill all input of the form");
            } else {
                const formData: FormData = new FormData();
                formData.append("file", imageFile[0]);
                formData.append("name", name);
                formData.append("price", price);
                formData.append("category", category);
                formData.append("collection", collection);
                formData.append("description", description);

                const res = await fetch("http://localhost:5379/products", {
                    method: "POST",
                    body: formData,
                });

                const data: { message: string } = await res.json();
                alert(data.message);

                setImageFile(null);
                form.reset();
            }
        } catch (error) {
            let errorMessage = "Failed to Create New product";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            alert(errorMessage);
        }
    };

    return (
        <div className="p-12">
            <h1 className="text-3xl font-medium">Add New Product</h1>
            <form onSubmit={handleSubmit} className="mt-12">
                <div className="flex gap-4">
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
                        <div className="grid grid-cols-2 gap-4">
                            <select
                                name="category"
                                id="category"
                                defaultValue=""
                                className="bg-gray-50 w-full p-2 rounded-md focus:outline-none"
                            >
                                <option
                                    value=""
                                    disabled
                                    className="text-gray-400"
                                >
                                    Select a Category
                                </option>
                                <option value="shirt">Shirt</option>
                                <option value="Hat">Hat</option>
                                <option value="Bag">Bag</option>
                            </select>
                            <select
                                name="collection"
                                id="collection"
                                defaultValue=""
                                className="bg-gray-50 w-full p-2 rounded-md"
                            >
                                <option value="" disabled>
                                    Select a Collection Type
                                </option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                                <option value="accesories">Accesories</option>
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
                    <button
                        type="submit"
                        className="px-8 py-3 mt-4 bg-orange-500 text-gray-50 hover:bg-orange-400 uppercase rounded-md block ml-auto"
                    >
                        Submit Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
