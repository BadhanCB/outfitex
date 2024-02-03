import { Link } from "react-router-dom";
import Accordion from "../../ui/Accordion";
import { useState } from "react";

const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <div className="h-full w-full hidden md:flex flex-col gap-4">
            <li>
                <Accordion
                    title="Woman"
                    name="category"
                    id="woman"
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                >
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="" className="animated-border-b">
                                Three Piece
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Shirt
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Pant
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Shoes
                            </Link>
                        </li>
                    </ul>
                </Accordion>
            </li>
            <li>
                <Accordion
                    title="Men"
                    name="category"
                    id="men"
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                >
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="" className="animated-border-b">
                                Shirt
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Pant
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Taxido
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Sun Glass
                            </Link>
                        </li>
                    </ul>
                </Accordion>
            </li>
            <li>
                <Accordion
                    title="Kids"
                    name="category"
                    id="kids"
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                >
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="" className="animated-border-b">
                                Toy
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Dress
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="animated-border-b">
                                Sun Glass
                            </Link>
                        </li>
                    </ul>
                </Accordion>
            </li>
        </div>
    );
};

export default CategoryList;
