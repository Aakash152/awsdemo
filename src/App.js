import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Login/>
      </header>
    </div>
  );
}

export default App;
