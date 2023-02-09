import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    console.log(user);
  });

  const submitLoginData = (e) => {
    axios.post("http://localhost:8081/user/login", user).then((response) => {
      if (response.data) {
        navigate("/search");
        setIsValid(false);
        setErrMsg("");
      } else {
        setIsValid(false);
        setErrMsg("Please enter valid username and password");
      }
    });
  };

  return (
    <div className="form">
      <img src="images/avatar.png" alt="" />
      {errMsg == "" ? <></> : <h1>{errMsg}</h1>}
      <h2>Login</h2>
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
            setUser({ ...user, username: e.target.value });
          }}
          value={user.username}
        />
      </div>
      <div>
        <TextField
          id="outlined-size-small"
          label="Password"
          variant="outlined"
          size="small"
          InputProps={{
            style: {
              color: "black",
              margin: "8px",
            },
          }}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          value={user.password}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          sx={{ color: "black", borderColor: "black", margin: "8px" }}
          onClick={(e) => submitLoginData(e)}
        >
          Login
        </Button>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default LoginForm;
