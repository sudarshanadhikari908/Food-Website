import { useQuery } from "react-query";
import { fetchByCategory } from "../fetcher/CategoryList";
function CategoryListData(onError, slug) {
  return useQuery(["category-data", slug], () => fetchByCategory(slug), {
    onError: onError,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
}
export default CategoryListData;
