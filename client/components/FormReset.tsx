"use client";

import { X } from "lucide-react";
import Link from "next/link";

const FormReset = () => {
  const reset = () => {
    const form = document.querySelector(".form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <button
      type="reset"
      onClick={reset}
      className="cursor-pointer bg-red-300 p-1 rounded-full text-red-700 font-bold "
    >
      <Link href="/">
        <X className="size-4" />
      </Link>
    </button>
  );
};

export default FormReset;
