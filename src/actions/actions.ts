"use server";

import { prisma } from "@/lib/db";
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { revalidatePath } from "next/cache";

export async function addExpense(formData: FormData) {
  const { id } = await checkAuthenticationAndMembership();

  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
      creatorId: id,
    },
  });

  revalidatePath("/app/dashboard");
}

export async function editExpense(formData: FormData, id: number) {
  await checkAuthenticationAndMembership();

  await prisma.expense.update({
    where: {
      id: id,
    },
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
    },
  });

  revalidatePath("/app/dashboard");
}

export async function deleteExpense(id: number) {
  await checkAuthenticationAndMembership();

  await prisma.expense.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/app/dashboard");
}
