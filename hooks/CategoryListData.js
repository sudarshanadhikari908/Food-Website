import { useQuery } from "react-query";
import { fetchByCategory } from "../fetcher/CategoryList";
function CategoryListData(onSuccess, onError, slug) {
  console.log("I am from hooks", typeof slug);
  return useQuery(["category-data", slug], fetchByCategory(slug), {
    onSuccess: onSuccess,
    onError: onError,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
}
export default CategoryListData;
