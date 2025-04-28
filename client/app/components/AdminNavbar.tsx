import Link from "next/link";

const AdminNavbar = () => {
  return (
    <header className="w-full bg-black">
      <nav className="container flex justify-between m-auto items-center">
        <Link href="/">
          <img src="/CPOS.png" alt="CPOS-Logo" width={140} height={70} />
        </Link>

        <button>Sign in</button>
      </nav>
    </header>
  );
};

export default AdminNavbar;
