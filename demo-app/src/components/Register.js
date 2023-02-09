import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const submitRegisterData = (e) => {
    navigate("/");
    axios
      .post("http://localhost:8081/user/create", user)
      .then((response) => console.log(response.data));
  };

  return (
    <div>
      <div className="form">
        <img src="images/avatar.png" alt="" />
        <h2>Register</h2>
        <div>
          <TextField
            id="outlined-size-small"
            label="First name"
            variant="outlined"
            size="small"
            InputProps={{
              style: {
                color: "black",
                margin: "8px",
                padding: "1px",
              },
            }}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Last name"
            variant="outlined"
            size="small"
            InputProps={{
              style: {
                color: "black",
                margin: "8px",
                padding: "1px",
              },
            }}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Email address"
            variant="outlined"
            size="small"
            InputProps={{
              style: {
                color: "black",
                margin: "8px",
                padding: "1px",
              },
            }}
            onChange={(e) => {
              setUser({ ...user, emailAddress: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-size-small"
            label="Username"
            variant="outlined"
            size="small"
            InputProps={{
              style: {
                color: "black",
                margin: "8px",
                padding: "1px",
              },
            }}
            onChange={(e) => {
              setUser({ ...user, userName: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            type="password"
            id="outlined-size-small"
            label="Password"
            variant="outlined"
            size="small"
            InputProps={{
              style: {
                color: "black",
                margin: "8px",
                padding: "1px",
              },
            }}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            type="password"
            id="outlined-size-small"
            label="confirm password"
            size="small"
            variant="outlined"
            InputProps={{
              style: {
                color: "black",
                margin: "8px",
                padding: "1px",
              },
            }}
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            type="button"
            sx={{
              color: "black",
              borderColor: "black",
              margin: "8px",
              padding: "1px",
            }}
            onClick={(e) => submitRegisterData(e)}
          >
            Register
          </Button>
        </div>
        <div>
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
