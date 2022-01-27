import api from "@/api/api";
import { homeConfig } from "@/config/config";
export const fetchByCategory = async (slug: [string, number]) => {
  await console.log(slug, "I am from fetcher");

  try {
    const { data } = await api.get(`api/v4/category/${slug}`, homeConfig);

    return data;
  } catch (e: any) {
    return Promise.reject(e.response.data.errors[0].message);
  }
};
