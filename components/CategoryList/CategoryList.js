import React from "react";
import { useCategoryStore } from "../../zustandStore/categoryStore";
import { useRouter } from "next/router";

function CategoryList() {
  const router = useRouter();
  const slug = router.query.slug;

  const { data } = useCategoryStore((state) => state.categoryData);
  console.log(data);
  // const result = data?.map((d) =>
  //   d?.slug.filter((a) => {
  //     if (a === slug[0]) {
  //       return a;
  //     }
  //   })
  // );
  // console.log(result);

  // const hello = data.map((d) => {
  //   if (d.slug === slug) {
  //     return d.id;
  //   }
  // });

  return <div></div>;
}

export default CategoryList;
