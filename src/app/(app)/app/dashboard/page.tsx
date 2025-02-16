import { prisma } from "@/lib/db";
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { IExpense } from "@/modules/interfaces";
import { redirect } from "next/navigation";
import Dashboard from "./dashboard";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const paymentValueFromUrl = (await searchParams).payment;
  const { id } = await checkAuthenticationAndMembership(
    paymentValueFromUrl === "success" ? 5000 : 0
  );
  if (paymentValueFromUrl === "success") {
    return redirect("/app/dashboard");
  }

  const expenses: IExpense[] = await prisma.expense.findMany({
    where: {
      creatorId: id,
    },
  });

  return <Dashboard expenses={expenses} />;
}
