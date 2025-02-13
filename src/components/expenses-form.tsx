import { addExpense, editExpense } from "@/actions/actions";
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
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [buttonText, setButtonText] = useState("Add Expense");

  useEffect(() => {
    if (expense) {
      setDescription(expense.description);
      setAmount(expense.amount);
      setButtonText("Edit Expense");
    } else {
      setDescription("");
      setAmount(0);
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
    setAmount(0);
    setButtonText("Add Expense");
  };

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
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full px-3 py-2 outline-none"
      />
      <SubmitBtn text={buttonText} />
    </form>
  );
}
