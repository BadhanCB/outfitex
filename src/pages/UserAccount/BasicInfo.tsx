import placeholderPhoto from "../../assets/images/placeholder.svg";
import { FaCamera, FaUpload } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { getTokenFromCookie } from "../../lib/utils";
import toast from "react-hot-toast";
import { LiaSpinnerSolid } from "react-icons/lia";

const BasicInfo = () => {
    const { user, reAuthenticate } = useAuth();
    const { _id, userName, photo } = user;
    const [imgFiles, setImgFiles] = useState<FileList | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePhoto = async () => {
        const token = getTokenFromCookie();
        setIsLoading(true);
        if (imgFiles && _id && token) {
            const formData = new FormData();
            formData.append("photo", imgFiles[0]);

            const res = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/change-photo`,
                {
                    method: "POST",
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            if (!res.ok) {
                let errmsg;
                if (res.statusText) {
                    errmsg = res.statusText;
                } else {
                    const data = await res.json();
                    errmsg = data.message
                        ? data.message
                        : "Failed to Change Photo";
                }

                toast.error(errmsg);
                setIsLoading(false);
                return;
            }

            const data = await res.json();
            toast.success(data.message);
            setImgFiles(null);
            setIsLoading(false);
            reAuthenticate();
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 bg-white p-8 rounded shadow-lg">
            <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden relative">
                    <img
                        src={
                            imgFiles
                                ? URL.createObjectURL(imgFiles[0])
                                : photo?.data && photo?.type
                                ? `data:${photo.type};base64, ${photo.data}`
                                : placeholderPhoto
                        }
                        alt={userName}
                        className="w-full h-full object-cover object-center"
                    />
                    <label
                        htmlFor="photo"
                        className="bg-slate-500 flex justify-center items-center opacity-75 hover:opacity-100 cursor-pointer h-1/4 hover:h-2/5 w-full absolute z-20 bottom-0 left-0 transition tooltip-top"
                        data-tooltip="Change Photo"
                    >
                        <FaCamera className="text-2xl" />
                        <input
                            type="file"
                            name="photo"
                            id="photo"
                            className="hidden"
                            onChange={(e) =>
                                setImgFiles(
                                    e.target.files ? e.target.files : null
                                )
                            }
                        />
                    </label>
                </div>
                {imgFiles && (
                    <>
                        <button
                            onClick={() => setImgFiles(null)}
                            className="bg-orange-500 shadow p-3 mt-2 rounded-full hover:bg-orange-400"
                        >
                            <ImCancelCircle />
                        </button>
                        <button
                            disabled={isLoading}
                            onClick={handleChangePhoto}
                            className="bg-gray-900 shadow p-3 rounded-full mt-2 ml-2 hover:bg-gray-800 text-gray-50"
                        >
                            {isLoading ? (
                                <LiaSpinnerSolid className="animate-spin" />
                            ) : (
                                <FaUpload />
                            )}
                        </button>
                    </>
                )}
            </div>
            <h3 className="text-3xl">{userName}</h3>
        </div>
    );
};

export default BasicInfo;
