import React from "react";

import ProductListData from "@/hooks/ProductListData";

import { toast } from "react-toastify";

import Loader from "@/utils/Loader/Loader";
import Banner from "./banner/Banner";
import Category from "./Category/Category";
import useHomeStore from "@/zustandStore/homeStore";
function HomePage() {
  const addData = useHomeStore((state) => state.addData);

  const onSuccess = ({ data }) => {
    addData(data?.data);
  };

  const onError = (error) => {
    toast.error(error.message);
  };

  const { isLoading, data, error, isFetching } = ProductListData(
    onSuccess,
    onError
  );

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <>
      {data ? (
        <div>
          <Banner />
          <Category />
        </div>
      ) : (
        <h2>{error.message}</h2>
      )}
    </>
  );
}

export default HomePage;
