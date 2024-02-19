import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/images/signup.svg";
import { FormEvent, FormEventHandler } from "react";
import toast from "react-hot-toast";

const Signup = () => {
    const navigate = useNavigate();

    const handleSignup: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        try {
            const form = e.target as HTMLFormElement & {
                name: { value: string };
                username: { value: string };
                address: { value: string };
                phone: { value: string };
                email: { value: string };
                password: { value: string };
                confirmpassword: { value: string };
            };

            const name = form.name.value;
            const userName = form.username.value;
            const address = form.address.value;
            const phone = form.phone.value;
            const email = form.email.value;
            const password = form.password.value;

            if (
                !name ||
                !userName ||
                !address ||
                !phone ||
                !email ||
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
                address,
                password,
            };

            const res = await fetch("https://outfitex.onrender.com/user", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newUser),
            });
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
        <section className="min-h-[calc(100vh-5rem)] w-full grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 lg:p-12 items-center">
            <div className="place-self-center p-4 lg:p-8">
                <div className="w-full h-full">
                    <img
                        src={signupImg}
                        alt="login image"
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>
            <div className="border rounded p-4 lg:p-8">
                <h1 className="text-5xl text-center">Signup</h1>
                <form onSubmit={handleSignup} className="w-full">
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
                    <div className="mb-3">
                        <label className="w-full font-semibold text-gray-500">
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            placeholder="454 Lakeland Park Drive Roswell, GA 30075"
                            className="w-full bg-gray-50 focus:outline-none p-3 rounded"
                        />
                    </div>
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
                <p className="text-center text-lg mt-4 mb-1 relative before:content-[''] after:content-[''] before:absolute before:w-[calc(50%-1.125rem)] before:h-[1px] before:top-1/2 before:left-0 before:bg-gray-300 after:absolute after:w-[calc(50%-1.125rem)] after:h-[1px] after:top-1/2 after:right-0 after:bg-gray-300">
                    Or
                </p>
                <div className="flex gap-4 justify-center items-center">
                    <p>Whan to become a Seller?</p>
                    <Link to="/seller-registration" className="text-amber-600">
                        Register
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signup;
