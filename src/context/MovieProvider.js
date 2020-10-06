import React, { createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  let InitialState = JSON.parse(localStorage.getItem("watchlist1") || []);
  let InitialState2 = JSON.parse(localStorage.getItem("watchedlist") || []);
  const [WatchList, SetWatchList] = React.useState(InitialState);

  const [Watched, SetWatched] = React.useState(InitialState2);

  console.log("hello", WatchList);

  React.useEffect(() => {
    localStorage.setItem("watchlist1", JSON.stringify(WatchList));
  }, [WatchList]);

  React.useEffect(() => {
    localStorage.setItem("watchedlist", JSON.stringify(Watched));
  }, [Watched]);

  const AddMovietoWatchList = (movie) => {
    SetWatchList([...WatchList, movie]);
  };
  const RemoveFromwatchList = (id) => {
    SetWatchList(WatchList.filter((movie) => movie.id !== id));
  };

  const AddMovietoWatchedList = (movie1) => {
    SetWatchList(WatchList.filter((movie) => movie.id !== movie1.id));
    SetWatched([...Watched, movie1]);
  };

  const MoveToWatchedList = (movie1) => {
    SetWatched(Watched.filter((movie) => movie.id !== movie1.id));
    SetWatchList([...WatchList, movie1]);
  };
  const RemoveFromwatchedList = (id) => {
    SetWatched(Watched.filter((movie) => movie.id !== id));
  };
  console.log("hell", Watched);
  return (
    <MovieContext.Provider
      value={{
        WatchList,
        Watched,
        AddMovietoWatchList,
        RemoveFromwatchList,
        AddMovietoWatchedList,
        MoveToWatchedList,
        RemoveFromwatchedList,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
