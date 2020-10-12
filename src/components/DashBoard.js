import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const DashBoard = ({ LogOut }) => {
  return (
    <div>
      <p>Home</p>
      <Button
        component={Link}
        to="/"
        onClick={LogOut}
        fullWidth
        variant="contained"
        color="secondary"
      >
        LogOut
      </Button>
    </div>
  );
};

export default DashBoard;
