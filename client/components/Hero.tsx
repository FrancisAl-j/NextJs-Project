import SearchForm from "./SearchForm";

interface HeroSection {
  heading1: string;
  heading2: string;
  isSearch?: boolean;
  query?: string;
}
const Hero = ({ heading1, heading2, isSearch = false, query }: HeroSection) => {
  return (
    <div className="hero-section grid place-items-center">
      <div className=" h-[70svh] w-full bg-[#00000080] top-0 left-0 absolute z-10"></div>
      <div className="z-[999] relative flex flex-col items-center">
        <h1 className=" text-3xl">{heading1}</h1>
        <h2>{heading2}</h2>

        {isSearch && <SearchForm query={query} />}
      </div>
    </div>
  );
};

export default Hero;
