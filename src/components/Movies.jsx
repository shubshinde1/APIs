import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/collection/10?language=en-US",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTZhYjMwOTE0MmY5NmQ2NmI5Y2Q0NjNiYmQ4NGU2NyIsInN1YiI6IjY2Mjc3ZWJhYjlhMGJkMDE2MWQ2NDZkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljjfagsuDEgjwhN7q5o0B6CG4RRrDjQAdG7lMKSBtYY",
            },
          }
        );
        setCollectionData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!collectionData) return <div>Loading...</div>;

  return (
    <div className="flex gap-10">
      <div className=" bg-neutral-900 flex gap-2 p-2 rounded-md">
        <div className="w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w200${collectionData.poster_path}`}
            alt={collectionData.name}
            className=""
          />
          <h2>{collectionData.name}</h2>
          <p>{collectionData.overview}</p>
          <p>Parts: {collectionData.parts.length}</p>
        </div>

        <ul className="bg-neutral-950 overflow-scroll sbar grid grid-cols-12 gap-2 w-2/3 p-2 rounded-md">
          {collectionData.parts.map((movie) => (
            <li
              key={movie.id}
              className=" col-span-4 bg-neutral-900 p-2 rounded-md flex flex-col gap-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className=""
              />
              <h4 className="bg-neutral-800 py-1 px-2 rounded-md ">
                Title - {movie.original_title}
              </h4>
              <p className="bg-neutral-800 py-1 px-2 rounded-md h-full">
                {movie.overview}
              </p>
              <p className="bg-neutral-800 py-1 px-2 rounded-md">
                Release Date: {movie.release_date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
