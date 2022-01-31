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
          if (result.length === "0") {
            return <h2>not found</h2>;
          } else {
            return (
              <div
                key={result}
                className=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
              >
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
