import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import DeleteUser from "./DeleteUser";
import { useSelector,useDispatch } from "react-redux";
import George from "../../images/George.png";
import Delete from "../../images/DeleteAdmin.png";
import Edit from "../../images/EditAdmin.png";
import axios from "axios";
import {deleteData} from "../../redux/actions/actions"
import moment from "moment";

const TableData = () => {
  const data = useSelector((state) => state.productReducer.items);
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(0);
  const [index,setIndex] = useState(0);
  const indexData = useSelector((state) => state.productReducer.items[index]);
 
  const dispatch = useDispatch();

  const hadleEditAdmin = (id,index) => {
    setOpen(true);
    setID(id)
    setIndex(index);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const deleteEmployee = (e) => {
    e.preventDefault();
    let user = {
      name: indexData.name,
      surname: indexData.surname,
      email: indexData.email,
      companyName: indexData.companyName,
      role: indexData.role,
      forecast: indexData.forecast,
      recentActivity: indexData.recentActivity,
      id:id,
      imageurl:indexData.imageurl
    };
  
    axios
      .post("https://herokuhosting2.herokuapp.com/deleteuser", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    handleCloseModal();
    alert(`You deleted ${user.name}`);
    dispatch(deleteData(id))
  };
  return (
    <div className="table">
      {open ? (
        <DeleteUser
          open={open}
          deleteEmployee={deleteEmployee}
          close={handleCloseModal}
        />
      ) : (
        ""
      )}
      <div className="table-wrapper">
        <Paper>
          <TableContainer>
            <Table aria-labelledby="tableTitle" aria-label="enhanced table">
              <EnhancedTableHead />
              <TableBody>
                {data.map((row,key) => {          
                  return (
                    <TableRow
                      hover
                      role="checkbox"         
                      key={key}
                    >
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
                              src={row.imageurl ? row.imageurl : George}
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
                        <span className="td">{moment.unix(row.recentActivity/1000).format("MMM DD, YYYY")}</span>                                  
                      </TableCell>
                      <TableCell>
                        <span className="td">
                          <img
                          src={Edit}
                          alt="Edit"
                          style={{ padding: "4px" }}                  
                        />
                        <img
                          src={Delete}
                          alt="Delete"
                          style={{ padding: "4px" }}
                          onClick={() =>hadleEditAdmin(row.id,key)}
                        />
                        </span>
                        
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
