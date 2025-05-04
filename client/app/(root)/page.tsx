import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        heading1="Providing smarter POS Hardware for your business"
        heading2="Experience sleek, efficient, and top-of-the-line POS hardware that takes your operations to the next level."
        isSearch
      />
      <h1 className="text-3xl ">Hello Next Project</h1>
    </div>
  );
}
