"use client";

import { deleteExpense } from "@/actions/actions";
import { IExpense } from "@/modules/interfaces";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

type DeleteBtnProps = {
  id: number;
};

type EditBtnProps = {
  expense: IExpense;
  onEdit: (expense: IExpense) => void;
};

export function DeleteBtn({ id }: DeleteBtnProps) {
  return (
    <button
      onClick={async () => await deleteExpense(id)}
      className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600"
    >
      X
    </button>
  );
}

export function EditBtn({ expense, onEdit }: EditBtnProps) {
  return (
    <button
      onClick={() => onEdit(expense)}
      className="text-[10px] h-[20px] w-[20px] bg-green-500 text-white rounded hover:bg-green-600 mr-2"
    >
      ✏️
    </button>
  );
}

export function SubmitBtn({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white px-2 py-2 font-bold"
    >
      {text}
    </button>
  );
}

export function AuthBtn({ text }: { text: string }) {
  return (
    <LoginLink
      className={`text-white py-2 px-4 rounded-lg font-medium ${
        text === "Login" ? "bg-black" : "bg-black/30"
      }`}
    >
      {text}
    </LoginLink>
  );
}

export function LogoutBtn() {
  return (
    <LogoutLink className="text-white/70 text-[12px] ml-[10px]">
      Logout
    </LogoutLink>
  );
}

export function PurchaseBtn() {
  return (
    <button
      onClick={async () => {}}
      className="bg-black text-white px-4 py-2 rounded-lg font-medium"
    >
      Purchase
    </button>
  );
}
