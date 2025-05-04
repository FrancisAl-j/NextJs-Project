"use client";

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
      className="cursor-pointer bg-red-300 px-2 rounded-full text-red-700 font-bold "
    >
      <Link href="/">X</Link>
    </button>
  );
};

export default FormReset;
