"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

interface PaymentRealtimeListenerProps {
  invoice: string;
  status?: string;
}

export function PaymentRealtimeListener({
  invoice,
  status,
}: PaymentRealtimeListenerProps) {
  const router = useRouter();

  useEffect(() => {
    if (!invoice || status !== "pending") return;

    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket.emit("join-payment", invoice);
    });

    socket.on("payment-paid", (data) => {
      if (data.invoice === invoice && data.status === "paid") {
        router.refresh();
        socket.disconnect();
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [invoice, status, router]);

  return null;
}
