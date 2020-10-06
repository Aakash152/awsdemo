import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Routes />
      </MovieProvider>
    </div>
  );
}

export default App;
