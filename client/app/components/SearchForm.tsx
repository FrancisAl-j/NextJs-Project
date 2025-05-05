import Form from "next/form";
import FormReset from "./FormReset";

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
        <button type="submit" className="text-black">
          S
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
