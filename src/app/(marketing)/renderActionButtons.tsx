import { AuthBtn, PurchaseBtn } from "@/components/buttons";
import Link from "next/link";

export default function renderActionButtons(
  isLoggedIn: boolean,
  isPayingMember: boolean
) {
  if (isLoggedIn && isPayingMember) {
    return (
      <Link
        href="/app/dashboard"
        className="bg-black text-white py-2 px-4 rounded-lg font-medium"
      >
        Go to dashboard
      </Link>
    );
  }

  if (isLoggedIn && !isPayingMember) {
    return <PurchaseBtn />;
  }

  return (
    <>
      <AuthBtn text="Login" />
      <AuthBtn text="Register" />
    </>
  );
}
