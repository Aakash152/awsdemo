import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { MovieContext } from "../context/MovieProvider";
const Watched = () => {
  const { Watched, MoveToWatchedList, RemoveFromwatchedList } = useContext(
    MovieContext
  );
  return (
    <div className="results movie-grid container">
      {Watched.length > 0 ? (
        <React.Fragment>
          {Watched.map((movie) => (
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
                  onClick={() => RemoveFromwatchedList(movie.id)}
                >
                  Delete
                </Button>
                <br />
                <Button
                  variant="primary"
                  onClick={() => MoveToWatchedList(movie)}
                >
                  Add to WatchList
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

export default Watched;
