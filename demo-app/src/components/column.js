import { Button } from "@mui/material";
import axios from "axios";

export const COLUMNS = [
  { field: "id", headerName: "ID", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "email",
    width: 130,
  },
  {
    field: "userName",
    headerName: "User Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 400,
    renderCell: (params) => {
      return (
        <Button
          onClick={(e) => onButtonClick(e, params.row)}
          variant="contained"
        >
          Delete
        </Button>
      );
    },
  },
];

const onButtonClick = (e, row) => {
  e.stopPropagation();
  axios
    .get("http://localhost:8081/user/delete/" + row.id)
    .then((response) => console.log(response.data));
  //do whatever you want with the row
};
