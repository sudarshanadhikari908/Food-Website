import api from "@/api/api";
import { homeConfig } from "@/config/config";
export const fetchSearchResult = async (type: string, keyword: string) => {
  try {
    const { data } = await api.get(
      `api/v4/${type}?query=${keyword}`,
      homeConfig
    );

    return data;
  } catch (e: any) {
    return Promise.reject(e.response.data.errors[0].message);
  }
};
