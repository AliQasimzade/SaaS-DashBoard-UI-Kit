import React, { useState, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import DeleteUser from "./DeleteUser";
import { useDispatch } from "react-redux";
import George from "../../images/George.png";
import Delete from "../../images/DeleteAdmin.png";
import Edit from "../../images/EditAdmin.png";
import axios from "axios";
import { deleteData } from "../../redux/actions/actions";
import moment from "moment";
import DeleteSnackbar from "./DeleteSnackbar";
import EditUser from "./EditUser";
import { changeUser } from "../../redux/actions/actions";

const TableData = (props) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);
  const forecastRef = useRef(null);
  const companyNameRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const handleDeleteAdmin = (id, index) => {
    setOpen(true);
    setIndex(index);
    setId(id);
    console.log(id);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const closeEdit = () => {
    setEdit(false);
  };
  const closeSnackbar = () => {
    setShow(false);
  };
  const deleteEmployee = (e) => {
    e.preventDefault();

    axios
      .post("https://herokuhosting2.herokuapp.com/deleteuser", { id: id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleCloseModal();
    setShow(true);

    props.delSize();
    setTimeout(() => {
      closeSnackbar();
    }, 800);
    dispatch(deleteData(index));
  };

  const editUser = (id, index) => {
    setEdit(true);
    setIndex(index);
    setId(id);
  };

  const editEmployee = () => {
    let editUser = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      role: roleRef.current.value,
      forecast: Number(forecastRef.current.value),
      companyName: companyNameRef.current.value,
      id: id,
      imageurl: imageRef.current,
      recentActivity: Date.now(),
    };

    console.log(editUser.imageurl);
    axios
      .post("https://herokuhosting2.herokuapp.com/edituser", editUser)
      .then((res) => {
        dispatch(changeUser(index, editUser));
      })
      .catch((err) => console.log(err));
    closeEdit();
  };
  return (
    <div className="table">
      {show ? <DeleteSnackbar show={show} /> : ""}
      {open ? (
        <DeleteUser
          open={open}
          deleteEmployee={deleteEmployee}
          close={handleCloseModal}
        />
      ) : (
        ""
      )}
      {edit ? (
        <EditUser
          edit={edit}
          index={index}
          nameRef={nameRef}
          surnameRef={surnameRef}
          emailRef={emailRef}
          roleRef={roleRef}
          forecastRef={forecastRef}
          companyNameRef={companyNameRef}
          close={closeEdit}
          editEmployee={editEmployee}
          imageRef={imageRef}
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
                {props.data.map((row, key) => {
                  return (
                    <TableRow hover role="checkbox" key={key}>
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
                        <span className="td">{row.forecast}%</span>
                      </TableCell>
                      <TableCell>
                        <span className="td">
                          {moment
                            .unix(row.recentActivity / 1000)
                            .format("MMM DD, YYYY")}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="td">
                          <img
                            src={Edit}
                            alt="Edit"
                            style={{ padding: "4px" }}
                            onClick={() => editUser(row.id, key)}
                          />
                          <img
                            src={Delete}
                            alt="Delete"
                            style={{ padding: "4px" }}
                            onClick={() => handleDeleteAdmin(row.id, key)}
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
