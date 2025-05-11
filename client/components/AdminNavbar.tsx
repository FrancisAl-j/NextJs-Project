import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const AdminNavbar = async () => {
  const session = await auth();
  return (
    <header className="w-full bg-black">
      <nav className="container flex justify-between m-auto items-center">
        <Link href="/">
          <img src="/CPOS.png" alt="CPOS-Logo" width={140} height={70} />
        </Link>

        {session && session?.user ? (
          <div>
            <button
              onClick={async () => {
                "use server";
                await signOut();
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={async () => {
              "use server";
              await signIn("github");
            }}
          >
            Sign in
          </button>
        )}
      </nav>
    </header>
  );
};

export default AdminNavbar;
