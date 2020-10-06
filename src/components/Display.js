import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { MovieContext } from "../context/MovieProvider";
import "../css/Display.css";
const Display = ({ movie }) => {
  // console.log("Display", movie);

  const { WatchList, Watched, AddMovietoWatchList } = useContext(MovieContext);
  let storedmovie = WatchList.find((o) => o.id === movie.id);
  let storedWatch = Watched.find((o) => o.id === movie.id);
  const WatchListDisable = storedmovie ? true : storedWatch ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <Card style={{ display: "flex" }}>
            <Card.Img
              style={{ width: "100%", height: "340px" }}
              variant="top"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
            <Card.Body style={{ height: "145px" }}>
              <Card.Title>{movie.title}</Card.Title>

              <Button
                variant="primary"
                disabled={WatchListDisable}
                onClick={() => AddMovietoWatchList(movie)}
              >
                Add to WatchList
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <div className="filler-poster">No Poster</div>
        )}
      </div>
    </div>
  );
};

export default Display;
