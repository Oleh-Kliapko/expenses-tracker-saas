import { prisma } from "@/lib/db";
import { IExpense } from "@/modules/interfaces";
import Dashboard from "./dashboard";

export default async function Page() {
  const expenses: IExpense[] = await prisma.expense.findMany();

  return <Dashboard expenses={expenses} />;
}
