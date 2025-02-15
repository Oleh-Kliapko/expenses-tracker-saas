import { prisma } from "@/lib/db";
import { IExpense } from "@/modules/interfaces";
import Dashboard from "./dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const expenses: IExpense[] = await prisma.expense.findMany();

  return <Dashboard expenses={expenses} />;
}
