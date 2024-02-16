import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.svg";
import { FormEvent, FormEventHandler } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { setTokenToCookie } from "../../lib/utils";

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleLogin: FormEventHandler<HTMLFormElement> = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        try {
            const form = e.target as HTMLFormElement & {
                email: { value: string };
                password: { value: string };
            };

            if (!form.email.value || !form.password.value) {
                toast.error("Provide all information");
                return;
            }

            const res = await fetch("http://localhost:5379/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email.value,
                    password: form.password.value,
                }),
            });

            if (res.ok) {
                const data = await res.json();
                if (data.info) {
                    toast.success(data.message);
                    setUser(data.info);
                    setTokenToCookie(data.token);
                    navigate("/shop", { replace: true });
                }
            } else {
                const data = await res.json();
                toast.error(data.message);
            }
        } catch (error) {
            let errorMessage = "Failed to Login";
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
                        src={loginImg}
                        alt="login image"
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>
            <div className="border rounded p-4 lg:p-8">
                <h1 className="text-5xl text-center">Login</h1>
                <form onSubmit={handleLogin} className="w-full">
                    <div className="mb-3">
                        <label className="w-full font-semibold text-gray-500">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
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
                    <button
                        type="submit"
                        className="px-8 py-3 bg-orange-600 hover:bg-orange-500 rounded text-white w-full"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-center">
                    {`Don't have an account?`}{" "}
                    <Link to="/signup" className="text-red-600 font-medium">
                        Signup
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

export default Login;
