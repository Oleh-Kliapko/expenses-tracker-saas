"use client";

import { useExpenseForm } from "@/hooks/useExpenseForm";
import { IExpense } from "@/modules/interfaces";
import { useEffect, useState } from "react";
import { SubmitBtn } from "./buttons";

type ExpensesFormProps = {
  expense: IExpense | null;
  resetEditingExpense: () => void;
};

export default function ExpensesForm({
  expense,
  resetEditingExpense,
}: ExpensesFormProps) {
  const {
    description,
    setDescription,
    amount,
    setAmount,
    buttonText,
    handleSubmit,
  } = useExpenseForm(expense, resetEditingExpense);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      description.trim() !== "" && amount.trim() !== "" && Number(amount) > 0
    );
  }, [description, amount]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-8 rounded overflow-hidden"
    >
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 outline-none"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-3 py-2 outline-none"
      />
      <SubmitBtn text={buttonText} disabled={isFormValid} />
    </form>
  );
}
