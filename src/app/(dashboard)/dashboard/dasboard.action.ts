"use server";

import api from "@/src/config/axiosServer";
import { AxiosError } from "axios";

export async function getDashboardAction(): Promise<{
  data: any;
  error: AxiosError | null;
}> {
  try {
    const res = await api.get("/dashboard");
    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error as AxiosError };
  }
}
