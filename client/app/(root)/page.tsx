import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero heading1="Simple Heading" heading2="Simple Heading 2" />
      <h1 className="text-3xl ">Hello Next Project</h1>
    </div>
  );
}
