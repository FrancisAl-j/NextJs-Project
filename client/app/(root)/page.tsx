import Image from "next/image";
import Hero from "@/components/Hero";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <div>
      <Hero
        heading1="Providing smarter POS Hardware for your business"
        heading2="Experience sleek, efficient, and top-of-the-line POS hardware that takes your operations to the next level."
        isSearch
        query={query}
      />
      <h1 className="text-3xl ">Hello Next Project</h1>

      {/* Wrap of all blogs/products */}
      <section></section>
    </div>
  );
}
