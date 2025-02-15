import { AuthBtn, PurchaseBtn } from "@/components/buttons";
import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  let isPayingMember = false;

  const user = await getUser();
  if (user) {
    const membership = await prisma.membership.findFirst({
      where: {
        userId: user.id,
        status: "ACTIVE",
      },
    });
    if (membership) {
      isPayingMember = true;
    }
  }

  return (
    <div className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="/preview.png"
        alt="Expenses Tracker app preview"
        width={700}
        height={472}
        style={{ width: "auto", height: "auto" }}
        className="rounded-md"
        priority
      />
      <div>
        <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
          Track your <span className="font-extrabold">expenses</span> with ease
        </h1>

        <p className="text-2xl font-medium max-w-[600px]">
          Use Expenses Tracker to easily keep track of your expenses. Get
          lifetime access for $1.
        </p>
        <div className="mt-10 space-x-3">
          {!isLoggedIn ? (
            <>
              <AuthBtn text="Login" />
              <AuthBtn text="Register" />
            </>
          ) : !isPayingMember ? (
            <PurchaseBtn />
          ) : (
            <Link
              href="/app/dashboard"
              className="bg-black text-white py-2 px-4 rounded-lg font-medium"
            >
              Go to dashboard
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
