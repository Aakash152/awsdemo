import React from "react";
import "./App.css";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <MovieProvider>
        <Routes />
      </MovieProvider>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of 87b2083... Second commit chnages in app.js and index.html
    </div>
  );
}

export default App;
