import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieProvider";

const Header = () => {
  const { Watched, WatchList } = useContext(MovieContext);
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          height: "50px",
          alignItems: "center",
        }}
      >
        <li>
          <Link to="/">Add</Link>
        </li>
        <li>
          <Link to="/wl">WatchList</Link>{" "}
          <label style={{ color: "white" }}>{WatchList.length}</label>
        </li>
        <li>
          <Link to="/wt">Watched</Link>{" "}
          <label style={{ color: "white" }}>{Watched.length}</label>
        </li>
      </ul>
    </div>
  );
};

export default Header;
