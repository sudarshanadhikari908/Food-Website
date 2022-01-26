import React from "react";

import ProductListData from "../../hooks/ProductListData";

import { toast } from "react-toastify";

import Loader from "../../utils/Loader/Loader";
import Image from "next/image";

function HomePage() {
  const onSuccess = ({ data }) => {
    const [
      banner,
      category,
      product_collection1,
      brand_tags,
      product_collection,
      ad_banner,
      prod_collection,
    ] = data.data;
    console.log("I am from successs");
  };

  const onError = (error) => {
    console.log("I am from error");
    console.log(error);
    // toast.error(error.response.data.errors[0].detail);
  };

  const { isLoading, isError, data, error, isFetching } = ProductListData(
    onSuccess,
    onError
  );
  if (isLoading || isFetching) {
    return <Loader />;
  }

  // if (isError) {
  //   console.log(error.response);
  // }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src="https://uat.ordering-boafresh.ekbana.net/storage/Banner/619b229618f8b.png"
                  alt="Front of men&#039;s Basic Tee in black."
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
