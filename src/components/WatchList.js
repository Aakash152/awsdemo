import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";
import { Card, Button } from "react-bootstrap";
const WatchList = () => {
  const { WatchList, RemoveFromwatchList, AddMovietoWatchedList } = useContext(
    MovieContext
  );
  return (
    <div className="results movie-grid container">
      {WatchList.length > 0 ? (
        <React.Fragment>
          {WatchList.map((movie) => (
            <React.Fragment key={movie.id}>
              <Card style={{ display: "flex" }}>
                <Card.Img
                  style={{ width: "100%", height: "340px" }}
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
                <Card.Body style={{ height: "50px" }}>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={() => RemoveFromwatchList(movie.id)}
                >
                  Delete
                </Button>
                <br />
                <Button
                  variant="primary"
                  onClick={() => AddMovietoWatchedList(movie)}
                >
                  Add to Watched
                </Button>
              </Card>
            </React.Fragment>
          ))}
        </React.Fragment>
      ) : (
        <h2 className="no-movies">No Movies</h2>
      )}
    </div>
  );
};

export default WatchList;
