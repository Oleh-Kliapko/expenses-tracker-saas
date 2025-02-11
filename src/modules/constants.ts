import { IExpense, IRoute } from "./interfaces";

export const routes: IRoute[] = [
  {
    label: "Dashboard",
    path: "/app/dashboard",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export const expenses: IExpense[] = [
  { id: 1, description: "Rent", amount: 1000 },
  { id: 2, description: "Groceries", amount: 100 },
  { id: 3, description: "Gas", amount: 50 },
  { id: 4, description: "Insurance", amount: 200 },
];
