"use client";

import { IExpense } from "@/modules/interfaces";
import { DeleteBtn, EditBtn } from "./buttons";

type ExpensesListProps = {
  expenses: IExpense[];
  onEdit: (expense: IExpense) => void;
};

export default function ExpensesList({ expenses, onEdit }: ExpensesListProps) {
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex items-center px-4 py-2 border-b">
          <p>{expense.description}</p>
          <p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
          <EditBtn expense={expense} onEdit={onEdit} />
          <DeleteBtn id={expense.id} />
        </li>
      ))}
    </ul>
  );
}
