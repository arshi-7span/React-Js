import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ColumnGroupingTable from "./ColumnGroupingTable";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SearchUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/user/getAllUser").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);

  const deleteUser = (id) => {
    axios
      .get("http://localhost:8081/user/delete/" + id)
      .then((response) => setUser([...user]));
  };

  return (
    <>
      {user ? (
        <>
          <ColumnGroupingTable rows={user} />
        </>
      ) : (
        <ColumnGroupingTable rows={user} />
      )}
    </>
  );
};

export default SearchUser;
