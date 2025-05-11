import Form from "next/form";
import FormReset from "./FormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="form">
      <input
        name="query" // The name is imporntant should be the same as the props or "query"
        type="text"
        defaultValue={query}
        placeholder="Search Blogs..."
        className="search-form bg-white text-black"
      />

      <div className="absolute top-2 right-2 flex gap-2">
        {query && <FormReset />}
        <button
          type="submit"
          className="cursor-pointer bg-black p-1 rounded-full text-white font-bold"
        >
          <Search className="size-4" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
