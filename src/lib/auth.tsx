/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import type React from "react";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { setCookie, deleteCookie } from "cookies-next";
import { useLayout } from "@/hooks/zustand/layout";
import { getMeAction, loginAction } from "./auth.action";
import LoadingBlock from "@/components/ui/LoadingBlock";

export type TUser = {
  id: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  region?: { id: string; name: string };
  schoolId?: number;
  schoolName?: string;
  degreeId?: number;
  degreeName?: string;
  registerPrice?: number;
  school?: any;
};

type AuthContextType = {
  user: TUser | null;
  // event: IEventSetting | undefined;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getMe: () => void;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUser | null>(null);
  const { setIsSuccess, setError, isLoading, isLoadingBlock, setIsLoading } =
    useLayout();
  const router = useRouter();

  const logout = useCallback(() => {
    deleteCookie("CBO_Token");
    setUser(null);
    router.push("/login");
  }, [router]);

  const getMe = useCallback(async () => {
    try {
      const res = await getMeAction();

      const data = res?.user?.data;

      if (!data) {
        logout();
        return;
      }

      if (data.type === "Admin") {
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          type: data.type,
          region: data.region,
        });
      } else {
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          type: data.type,
          region: data.region,
          schoolName: data.school?.name,
          schoolId: data.school?.id,
          degreeId: data.school?.degree?.id,
          degreeName: data.school?.degree?.name,
          registerPrice: data.school?.degree?.register_price,
          school: data.school,
        });
      }
    } catch (error) {
      logout();
    }
  }, [logout]);

  useEffect(() => {
    getMe();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const res = await loginAction(email, password);

      if (res.success) {
        setCookie("CBO_Token", res.data.data.token, {
          maxAge: 60 * 60 * 24,
        });

        await getMe();

        setIsSuccess(true, "Selamat Kamu Berhasil Masuk");
        router.push("/dashboard");
      } else {
        const err = res.error as { status_code: number };

        if (err.status_code === 404) {
          setError(true, "Maaf Akun kamu tidak ditemukan");
        } else if (err.status_code === 422) {
          setError(true, "Sepertinya Password kamu salah");
        } else {
          setError(true, "Terjadi kesalahan saat login");
        }
      }
    } catch (error) {
      setError(true, "Terjadi kesalahan server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, logout, getMe, setUser }}
    >
      {isLoadingBlock && <LoadingBlock />}
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
