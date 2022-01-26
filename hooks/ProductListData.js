import { useQuery } from "react-query";
import { fetchProducts } from "../helpers/AllProducts";

function ProductListData(onSuccess, onError) {
  return useQuery("home-products", fetchProducts, {
    onSuccess: onSuccess,
    onError: onError,
  });
}

export default ProductListData;
