import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const headCells = [
  { id: "name", label: "Name" },
  { id: "Email", label: "Email" },
  { id: "Company name", label: "Company name" },
  { id: "Role", label: "Role" },
  { id: "Forecast", label: "Forecast" },
  { id: "Recent activity", label: "Recent activity" },
  { id: "Edit-Delete", label: "Delete/Edit" },
];
const EnhancedTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            style={headCell.id === "name" ? { paddingLeft: "10px" } : {}}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
