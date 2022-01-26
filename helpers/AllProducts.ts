import { homeConfig } from "../config/config";
import api from "../api/api";
import IHomeheader from "@/interface/homeHeader";
import { AxiosRequestHeaders } from "axios";

export const fetchProducts = async () => {
  try {
    const response: AxiosRequestHeaders = await api.get(
      "api/v4/newhome",
      homeConfig
    );

    return response;
  } catch (e: any) {
    return Promise.reject(new Error(e.response.data.message));
  }
};
