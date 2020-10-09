import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        {/* <Login />
        <Register /> */}
        <Routing />
      </header>
    </div>
  );
}

export default App;
