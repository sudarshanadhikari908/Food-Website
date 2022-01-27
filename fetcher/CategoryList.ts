import api from "@/api/api";
import { homeConfig } from "@/config/config";
export const fetchByCategory = async (slug: [string, number]) => {
  try {
    const response = await api.get(`api/v4/category/${slug}`, homeConfig);

    return response;
  } catch (e: any) {
    return Promise.reject(e.response.data.errors[0].message);
  }
};
