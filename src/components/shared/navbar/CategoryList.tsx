import { Link } from "react-router-dom";
import Accordion from "../../ui/Accordion";
import { useEffect, useState } from "react";
import { Collection } from "../../../types";
import toast from "react-hot-toast";

const CategoryList = () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/collections`
                );
                if (!res.ok) {
                    let errmsg;
                    if (res.statusText) {
                        errmsg = res.statusText;
                    } else {
                        const data = await res.json();
                        errmsg = data.message
                            ? data.message
                            : "Failed to Fetch";
                    }

                    toast.error(errmsg);
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

    return (
        <div className="h-full w-full hidden md:flex flex-col gap-4">
            {!collections?.length
                ? null
                : collections.map((coll) => (
                      <li key={coll._id}>
                          <Accordion
                              title={coll.name}
                              name="collections"
                              id={coll.slug}
                              selectedCategory={selectedCategory}
                              setSelectedCategory={setSelectedCategory}
                          >
                              <ul className="flex flex-col gap-3">
                                  {coll?.categories?.map((cat, i) => (
                                      <li key={i}>
                                          <Link
                                              to={`/category/${cat.slug}?coll=${coll.slug}`}
                                              className="animated-border-b"
                                          >
                                              {cat.name}
                                          </Link>
                                      </li>
                                  ))}
                              </ul>
                          </Accordion>
                      </li>
                  ))}
        </div>
    );
};

export default CategoryList;
