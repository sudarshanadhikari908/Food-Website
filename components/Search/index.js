import React from "react";
import SearchData from "@/hooks/SearchData";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Search = () => {
  const router = useRouter();
  const { type, keyword } = router.query;

  const onError = (error) => {
    toast.error(error.message);
  };

  const { isLoading, data } = SearchData(onError, type, keyword);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data ? (
        data?.data.map((result) => {
          if (!result) {
            return <h2>not found</h2>;
          } else {
            return (
              <div
                key={result.id}
                className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
              >
                {/* <div className="rounded overflow-hidden shadow-lg ">
                  <Image
                    className="w-full"
                    src={result.images.backgroundImage}
                    alt={cat.title}
                    width="300"
                    height="300"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{cat.title}</div>
                    <Link href={`/category/${cat.slug}`}>
                      <a>Shop Now</a>
                    </Link>
                  </div> */}
                {/* </div> */}
                {result.title}
              </div>
            );
          }
        })
      ) : (
        <h2>Error</h2>
      )}
    </>
  );
};

export default Search;
