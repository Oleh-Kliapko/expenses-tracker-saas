"use server";

import { prisma } from "@/lib/db";
// import { checkAuthenticationAndMembership } from "@/lib/server-utils";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import Stripe from "stripe";

export async function addExpense(formData: FormData) {
  //   const user = await checkAuthenticationAndMembership();

  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
      creatorId: "1", // user.id,
    },
  });

  revalidatePath("/app/dashboard");
}

export async function editExpense(formData: FormData, id: number) {
  //   await checkAuthenticationAndMembership();

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
  //   await checkAuthenticationAndMembership();

  await prisma.expense.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/app/dashboard");
}
