import { Link, useNavigate } from "react-router-dom";
import sellerImg from "../../assets/images/seller.svg";
import toast from "react-hot-toast";
import { FormEvent, FormEventHandler } from "react";

const SellerRegistration = () => {
    const navigate = useNavigate();

    const handleRegistration: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        try {
            const form = e.target as HTMLFormElement & {
                name: { value: string };
                username: { value: string };
                personaladdress: { value: string };
                corporateaddress: { value: string };
                phone: { value: string };
                email: { value: string };
                nidnumber: { value: string };
                password: { value: string };
                confirmpassword: { value: string };
            };

            const name = form.name.value;
            const userName = form.username.value;
            const personalAddress = form.personaladdress.value;
            const corporateAddress = form.corporateaddress.value;
            const phone = form.phone.value;
            const email = form.email.value;
            const nidNumber = form.nidnumber.value;
            const password = form.password.value;

            if (
                !name ||
                !userName ||
                !personalAddress ||
                !corporateAddress ||
                !phone ||
                !email ||
                !nidNumber ||
                !password
            ) {
                toast.error("Fill all the information into the form");
                return;
            }

            if (form.password.value !== form.confirmpassword.value) {
                toast.error("Password not matched");
                return;
            }

            const newUser = {
                name,
                userName,
                email,
                phone,
                personalAddress,
                corporateAddress,
                nidNumber,
                password,
            };

            const res = await fetch("https://outfitex.onrender.com/seller", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (!res.ok) {
                toast.error(res.statusText);
                return;
            }

            const data = await res.json();
            toast.success(data.message);
            form.reset();
            navigate("/login", { replace: true });
        } catch (error) {
            let errorMessage = "Failed to create new user";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            toast.error(errorMessage);
        }
    };

    return (
        <section className="min-h-[calc(100vh-5rem)] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 lg:p-12 items-center">
            <div className="place-self-center p-4 lg:p-8">
                <div className="w-full h-full">
                    <img
                        src={sellerImg}
                        alt="login image"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="border rounded p-4 lg:p-8 lg:col-span-2">
                <h1 className="text-5xl text-center mb-12">Signup</h1>
                <form onSubmit={handleRegistration} className="w-full">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Robert R. Example"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                User Name
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Example123"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+880123456789"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Personal Address
                            </label>
                            <input
                                type="text"
                                name="personaladdress"
                                placeholder="454 Lakeland Park Drive Roswell, GA 30075"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Corporate Address
                            </label>
                            <input
                                type="text"
                                name="corporateaddress"
                                placeholder="1026 Duck Creek Road Millbrae, CA 94030"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="w-full font-semibold text-gray-500">
                            NID Number
                        </label>
                        <input
                            type="number"
                            name="nidnumber"
                            placeholder="Your National Identification Number"
                            className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                        />
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your Secret Password"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="w-full font-semibold text-gray-500">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="Confirm Your Password"
                                className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="px-8 py-3 bg-sky-600 hover:bg-sky-500 rounded text-white w-full"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center">
                    {`Already have an account?`}{" "}
                    <Link to="/login" className="text-red-600 font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default SellerRegistration;
