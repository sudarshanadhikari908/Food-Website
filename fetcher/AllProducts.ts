import { homeConfig } from "../config/config";
import api from "@/api/api";

import { AxiosRequestHeaders } from "axios";

export const fetchProducts = async () => {
  try {
    const response: AxiosRequestHeaders = await api.get(
      "api/v4/newhome",
      homeConfig
    );

    return response;
  } catch (e: any) {
    return Promise.reject(new Error(e.response.data.errors[0].message));
  }
};
