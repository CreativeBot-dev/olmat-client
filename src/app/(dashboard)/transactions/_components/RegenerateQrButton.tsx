"use client";

import { Button } from "@/components/ui/button";
import { useLayout } from "@/hooks/zustand/layout";
import React from "react";
import { regenerateQrAction } from "../transaction.action";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

export default function RegenerateQrButton({ id }: { id: string }) {
  const router = useRouter();
  const { setIsSuccess, setError, setIsLoading, isLoading } = useLayout();
  const handleRegenerate = async (payId: string) => {
    setIsLoading(true);
    try {
      const res = await regenerateQrAction(payId);
      setIsSuccess(true, "QRIS telah diperbarui");
      router.push(`/transactions/${res.data.payment.invoice}`);
    } catch (error) {
      setError(true, "Gagal memperbarui QRIS");
      throw error as AxiosError;
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={() => handleRegenerate(id)}
      className="w-full"
      disabled={isLoading || !id}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <LoaderIcon className="animate-spin" /> Meminta QR Baru
        </div>
      ) : (
        "Minta QR Baru"
      )}
    </Button>
  );
}
