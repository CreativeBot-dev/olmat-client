import type { Metadata } from "next";
import { getTransactionAction } from "./transaction.action";
import TransactionClient from "./_components/TransactionClient";
import { APPCONSTANT } from "@/constant/App.constant";

export const metadata: Metadata = {
  title: `Transactions - Math Olympiad ${APPCONSTANT.year}`,
  description: "Manage your Math Olympiad transactions",
};

interface IProps {
  searchParams: Promise<{ page: number; limit: number }>;
}

export default async function TransactionsPage({ searchParams }: IProps) {
  const page = (await searchParams).page || 1;
  const limit = (await searchParams).limit || 10;

  const res = await getTransactionAction(page, limit);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transaksi</h1>
        <p className="text-gray-500">Kelola transaksi pembayaranmu</p>
      </div>
      <TransactionClient
        transactions={res.data || []}
        metadata={res.metaData}
        params={{ page, limit }}
      />
    </div>
  );
}
