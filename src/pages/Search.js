import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Result for: ${queryTerm}`;
  });

  return (
    <main>
      <section>
        <p className="text-center md:text-left text-3xl py-2 dark:text-white">
          {movies.length === 0
            ? `No results found for: "${queryTerm}"`
            : `Results for "${queryTerm}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex lg:justify-start justify-center flex-wrap gap-4	">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
