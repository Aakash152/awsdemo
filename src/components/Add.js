import React from "react";
import Display from "./Display";
//import { Container, Row, Col } from "react-bootstrap";

const API_KEY = "8f66fbf8431cac2bc3c85bf9cab3ae5a";
const Add = () => {
  const [Query, SetQuery] = React.useState("");
  const [Data, SetData] = React.useState([]);

  const HandleChange = (e) => {
    SetQuery(e.target.value);

    //console.log(Query);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          SetData(data.results);
        } else {
          SetData([]);
        }
      });
  };

  //  console.log(Data);
  return (
    <React.Fragment>
      <br /> <br /> <br /> <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Enter Name of Movie"
          name="moviename"
          value={Query}
          onChange={HandleChange}
        />
      </div>
      {Data.length > 0 ? (
        <ul className="results movie-grid container">
          {Data.filter((movie) => {
            return movie.poster_path != null;
          }).map((movie) => (
            <li key={movie.id}>
              <Display movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ display: "flex", justifyContent: "center" }}>
          Please Enter Movie Name
        </p>
      )}
    </React.Fragment>
  );
};

export default Add;
