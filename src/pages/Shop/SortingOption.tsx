import { ChangeEventHandler } from "react";

type Props = {
    handleSortingChange: ChangeEventHandler<HTMLSelectElement>;
};

const SortingOption = ({ handleSortingChange }: Props) => {
    return (
        <div>
            <label htmlFor="sorting" className="text-gray-500">
                Sort By
            </label>
            <select
                onChange={handleSortingChange}
                name="sorting"
                id="sorting"
                className="px-4 py-2 border ml-2 rounded bg-gray-50 focus:outline-none"
            >
                <option value="">Default Sorting</option>
                <option value="popular">Popularity</option>
                <option value="latest">Latest</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
            </select>
        </div>
    );
};

export default SortingOption;
