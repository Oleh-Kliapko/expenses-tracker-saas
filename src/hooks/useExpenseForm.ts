import { addExpense, editExpense } from "@/actions/actions";
import { IExpense } from "@/modules/interfaces";
import { useEffect, useState } from "react";

export function useExpenseForm(
  expense: IExpense | null,
  resetEditingExpense: () => void
) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [buttonText, setButtonText] = useState("Add Expense");

  useEffect(() => {
    if (expense) {
      setDescription(expense.description);
      setAmount(expense.amount.toString());
      setButtonText("Edit Expense");
    } else {
      setDescription("");
      setAmount("");
      setButtonText("Add Expense");
    }
  }, [expense]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("amount", amount.toString());

    if (expense) {
      await editExpense(formData, expense.id);
      resetEditingExpense();
    } else {
      await addExpense(formData);
    }

    setDescription("");
    setAmount("");
    setButtonText("Add Expense");
  };

  return {
    description,
    setDescription,
    amount,
    setAmount,
    buttonText,
    handleSubmit,
  };
}
