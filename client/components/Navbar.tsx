import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-black ">
      <nav className="container flex justify-between m-auto items-center py-5">
        <Link href="/">
          <img src="/CPOS.png" alt="CPOS-Logo" width={140} height={70} />
        </Link>

        <ul className="flex gap-5 items-center text-xl">
          <li>Home</li>
          <li>Products</li>
          <li>Business</li>
          <li>Support</li>
          <button className="bg-[#bb1227] py-2 px-5 cursor-pointer">
            Get A Quote
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
