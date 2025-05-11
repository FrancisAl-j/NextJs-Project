import Image from "next/image";
import Hero from "@/components/Hero";
import SearchForm from "../../components/SearchForm";
import Blogs from "@/components/Blogs";
import BlogType from "@/types/BlogType";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts: BlogType[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: "1" },
      _id: "1",
      description: "This is just for example",
      image:
        "https://img.freepik.com/free-photo/point-sale-machine-design-resource_53876-105925.jpg",
      category: "POS",
      title: "Bumblebee",
    },

    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: "1" },
      _id: "1",
      description: "This is just for example",
      image:
        "https://img.freepik.com/free-photo/point-sale-machine-design-resource_53876-105925.jpg",
      category: "Printer",
      title: "Printer",
    },
  ];

  return (
    <div>
      <Hero
        heading1="Providing smarter POS Hardware for your business"
        heading2="Experience sleek, efficient, and top-of-the-line POS hardware that takes your operations to the next level."
        isSearch
        query={query}
      />

      {/* Wrap of all blogs/products */}
      <section className="container m-auto my-5">
        {query ? (
          <p className="text-2xl font-semibold">{`Search results for ${query}`}</p>
        ) : (
          <p className="text-2xl font-semibold">Recommended for you</p>
        )}

        <section className="grid-container">
          {posts?.length !== 0 ? (
            posts.map((post: BlogType, index: number) => {
              return <Blogs key={index} post={post} />;
            })
          ) : (
            <></>
          )}
        </section>
      </section>
    </div>
  );
}
