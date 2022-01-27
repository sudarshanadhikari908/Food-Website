import React from "react";

import { useRouter } from "next/router";
import CategoryListData from "@/hooks/CategoryListData";

function CategoryList() {
  const router = useRouter();
  const onSuccess = ({ data }) => {
    console.log(data);
  };

  const onError = (error) => {
    console.log(error);
  };
  const { slug } = router.query;
  console.log(slug);
  const { isLoading, data, error, isFetching } = CategoryListData(
    onSuccess,
    onError,
    slug
  );

  return <div></div>;
}

export default CategoryList;
