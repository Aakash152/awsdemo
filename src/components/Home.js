import React from "react";

const Home = () => {
  const [Values, SetValues] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    SetValues({
      ...Values,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    console.log(Values);

    SetValues({ name: "", email: "", password: "" });
    e.preventDefault();
  };
  return (
    <div>
      <p>Hello WelCome to AWS Hosting1</p>
      <form onSubmit={HandleSubmit}>
        <label>Name</label>{" "}
        <input
          type="text"
          name="name"
          value={Values.name}
          onChange={HandleChange}
        />
        <br />
        <label>Email</label>{" "}
        <input
          type="email"
          name="email"
          value={Values.email}
          onChange={HandleChange}
        />
        <br />
        <label>Password</label>{" "}
        <input
          type="password"
          name="password"
          value={Values.password}
          onChange={HandleChange}
        />
        <br />
        <button type="submit">Submit Data</button>
      </form>

      {Values.name && Values.email ? (
        <div>
          <p>Name: {Values.name}</p>
          <p>Email: {Values.email}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
