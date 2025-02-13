"use client";

import ExpensesForm from "@/components/expenses-form";
import ExpensesList from "@/components/expenses-list";
import { IExpense } from "@/modules/interfaces";
import { useState } from "react";

type DashboardClientProps = {
  expenses: IExpense[];
};

export default function Dashboard({ expenses }: DashboardClientProps) {
  const [editingExpense, setEditingExpense] = useState<IExpense | null>(null);

  const resetEditingExpense = () => {
    setEditingExpense(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>

      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList expenses={expenses} onEdit={setEditingExpense} />
        <ExpensesForm
          expense={editingExpense}
          resetEditingExpense={resetEditingExpense}
        />
      </div>
    </div>
  );
}
