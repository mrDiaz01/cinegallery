import { Link } from "react-router-dom";
import { Button } from "../components";
import PageNotFoundImg from "../assets/404-page-not-found.png";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found/ CineGallery`;
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oopsy!
          </p>
          <div className="max-w-lg">
            <img src={PageNotFoundImg} />
          </div>
          <div className="flex justify-center my-10">
            <Link to="/">
              <Button>Back to where the magic happens</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
