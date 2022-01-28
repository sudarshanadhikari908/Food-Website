import { useQuery } from "react-query";
import { fetchSearchResult } from "../fetcher/Search";
function SearchData(onError, type, keyword) {
  return useQuery(
    ["search-data", type, keyword],
    () => fetchSearchResult(type, keyword),
    {
      onError: onError,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    }
  );
}
export default SearchData;
