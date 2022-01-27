import React from "react";
import useHomeStore from "../../../zustandStore/homeStore";
import Link from "next/link";

function Category() {
  const data = useHomeStore((state) => state.homeData);

  const category = data?.data[1].categories;

  return (
    <>
      <div>
        <div className="bg-white">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {data?.data[1].sectionDetails.title}
          </h2>
          {category.map((cat) => {
            return (
              <div
                key={cat.id}
                className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
              >
                <div className="rounded overflow-hidden shadow-lg ">
                  <img
                    className="w-full"
                    src={cat.backgroundImage}
                    alt={cat.title}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{cat.title}</div>
                    <Link href={`/category/${cat.slug}`}>
                      <a>Shop Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
