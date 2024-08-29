import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useEffect(() => {
    document.title = `${title} - CineGallery`;
  });

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex lg:justify-evenly justify-center flex-wrap gap-4 mt-10 ">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
