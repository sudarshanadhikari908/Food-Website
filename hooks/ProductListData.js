import { useQuery } from "react-query";
import { fetchProducts } from "../fetcher/AllProducts";

function ProductListData(onSuccess, onError) {
  return useQuery("home-products", fetchProducts, {
    onSuccess: onSuccess,
    onError: onError,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
}

export default ProductListData;
