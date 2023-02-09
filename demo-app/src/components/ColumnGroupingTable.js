import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { COLUMNS } from "./column";

export default function ColumnGroupingTable(props) {
  return (
    <>
      <div style={{ height: 523, width: "100%" }}>
        <DataGrid
          columns={COLUMNS}
          rows={props ? props.rows : []}
          pageSize={100}
          rowsPerPageOptions={[100]}
          checkboxSelection
          columnAutoWidth={true}
          showBorders={true}
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{
            boxShadow: 3,
            border: 3,
            borderColor: "primary.black",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </>
  );
}
