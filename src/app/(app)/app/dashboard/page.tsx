import { prisma } from "@/lib/db";
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { IExpense } from "@/modules/interfaces";
import Dashboard from "./dashboard";

export default async function Page() {
  const { id } = await checkAuthenticationAndMembership();

  const expenses: IExpense[] = await prisma.expense.findMany({
    where: {
      creatorId: id,
    },
  });

  return <Dashboard expenses={expenses} />;
}
