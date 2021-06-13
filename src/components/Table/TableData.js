import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import EnhancedTableHead from "./EnhancedTableHead";
import { useSelector } from "react-redux";

const TableData = () => {
  const data = useSelector((state) => state.productReducer.items);
  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleDeleteAllClick = (event) => {
    document.querySelector("body thead").classList.remove("active");
    if (event.target.checked) {
      const newSelecteds = 0;
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };
  const handleClick = (event, email) => {
    const selectedIndex = selected.indexOf(email);

    let newSelected = [];
    if (selectedIndex <= -1) {
      document.querySelector("body thead").classList.add("active");
    } else if (selectedIndex === 0) {
      document.querySelector("body thead").classList.remove("active");
    }
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, email);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;
  return (
    <div className="table">
      <div className="table-wrapper">
        <Paper>
          <EnhancedTableToolbar
            numSelected={selected.length}
            onDeleteAllClick={handleDeleteAllClick}
          />
          <TableContainer>
            <Table aria-labelledby="tableTitle" aria-label="enhanced table">
              <EnhancedTableHead onSelectAllClick={handleSelectAllClick} />
              <TableBody>
                {data.map((row) => {
                  const isItemSelected = isSelected(row.email);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      key={row.id}
                      selected={isItemSelected}
                      onClick={(event) => handleClick(event, row.email)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          className="check-list"
                          checked={isItemSelected}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        <span className="td">
                          <div
                            className="user-image"
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              marginRight: "8px",
                            }}
                          >
                            <img
                              src={row.imageurl}
                              alt="profile"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <p>
                            <span style={{ marginRight: "3px" }}>
                              {row.name}
                            </span>
                            <span> {row.surname}</span>
                          </p>
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="td">{row.email}</span>
                      </TableCell>
                      <TableCell>
                        <span className="td">{row.companyName}</span>
                      </TableCell>
                      <TableCell>
                        <span className="td">{row.role}</span>
                      </TableCell>
                      <TableCell>
                        <span className="td">{row.forecast}</span>
                      </TableCell>
                      <TableCell>
                        <span className="td">{row.recentActivity}</span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default TableData;
