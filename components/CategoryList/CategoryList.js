import React from "react";
import { useRouter } from "next/router";
import CategoryListData from "@/hooks/CategoryListData";
import Loader from "@/utils/Loader/Loader";
import { toast } from "react-toastify";
import { useCartStore } from "@/zustandStore/cartStore";
import Image from "next/image";

function CategoryList() {
  const router = useRouter();
  const addData = useCartStore((state) => state.addData);

  const onError = (error) => {
    toast.error(error.message);
  };
  const { slug } = router.query;

  const { isLoading, data, error, isFetching } = CategoryListData(
    onError,
    slug
  );

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      {data ? (
        data?.data.subcategories.map((cat) => {
          return (
            <div
              key={cat.id}
              className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
            >
              <div className="rounded overflow-hidden shadow-lg ">
                <Image
                  className="w-full"
                  src={cat.icon}
                  alt={cat.backgroundImage}
                  width="250"
                  height="250"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{cat.title}</div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => addData(cat)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2>{error.message}</h2>
      )}
    </>
  );
}

export default CategoryList;
