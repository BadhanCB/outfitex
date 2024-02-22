import { Dispatch, SetStateAction } from "react";

type Props = {
    colNum: number;
    setColNum: Dispatch<SetStateAction<number>>;
};

const ColumnSelectOption = ({ colNum, setColNum }: Props) => {
    return (
        <div className="hidden lg:flex gap-3">
            <button
                onClick={() => setColNum(2)}
                className={`flex gap-[2px] p-2 border rounded ${
                    colNum === 2 && "bg-slate-800"
                }`}
            >
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 2 && "bg-gray-50"
                    }`}
                ></div>
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 2 && "bg-gray-50"
                    }`}
                ></div>
            </button>
            <button
                onClick={() => setColNum(3)}
                className={`flex gap-[2px] p-2 border rounded ${
                    colNum === 3 && "bg-slate-800"
                }`}
            >
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 3 && "bg-gray-50"
                    }`}
                ></div>
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 3 && "bg-gray-50"
                    }`}
                ></div>
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 3 && "bg-gray-50"
                    }`}
                ></div>
            </button>
            <button
                onClick={() => setColNum(4)}
                className={`flex gap-[2px] p-2 border rounded ${
                    colNum === 4 && "bg-slate-800"
                }`}
            >
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 4 && "bg-gray-50"
                    }`}
                ></div>
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 4 && "bg-gray-50"
                    }`}
                ></div>
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 4 && "bg-gray-50"
                    }`}
                ></div>
                <div
                    className={`w-1 h-4 bg-gray-400 ${
                        colNum === 4 && "bg-gray-50"
                    }`}
                ></div>
            </button>
            <button
                onClick={() => setColNum(1)}
                className={`flex flex-col gap-[2px] p-2 border rounded ${
                    colNum === 1 && "bg-slate-800"
                }`}
            >
                <div
                    className={`w-6 h-1 ${
                        colNum === 1 ? "bg-gray-50" : "bg-gray-400"
                    }`}
                ></div>
                <div
                    className={`w-6 h-1 ${
                        colNum === 1 ? "bg-gray-50" : "bg-gray-400"
                    }`}
                ></div>
                <div
                    className={`w-6 h-1 ${
                        colNum === 1 ? "bg-gray-50" : "bg-gray-400"
                    }`}
                ></div>
            </button>
        </div>
    );
};

export default ColumnSelectOption;
