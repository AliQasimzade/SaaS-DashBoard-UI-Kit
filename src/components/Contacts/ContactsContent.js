import React, { useState, useRef, useLayoutEffect } from "react";
import "./styles/ContactsContent.scss";
import "./styles/ContactsContent-Media.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TableData from "../Table/TableData";
import ModalTable from "../Table/ModalTable";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../../redux/actions/actions";
import AddOrWrongSnack from "../Table/AddOrWrongSnack";
const ContactsContent = (props) => {
  const data = useSelector((state) => state.productReducer.items);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const companyNameRef = useRef(null);
  const roleRef = useRef(null);
  const forecastRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  const [show, setShow] = useState(false);
  const [severity, setSeverity] = useState("error");

  useLayoutEffect(() => {
    setOption(props.size);
  }, [props]);
  const closeSnackbar = () => {
    setShow(false);
  };
  const handleChange = (event) => {
    setOption(event.target.value);

    axios
      .post("https://herokuhosting2.herokuapp.com/chart", {
        index: event.target.value,
      })
      .then((res) => dispatch(addData(res.data)))
      .catch((err) => console.log(err));
  };

  const handleAddContact = () => {
    setOpen(true);
    setIsTrue(true);
  };

  const addEmployee = (e) => {
    let pattern =
      /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/.test(
        emailRef.current.value
      );

    if (pattern === true) {
      let newUser = {
        name: nameRef.current.value + " " + surnameRef.current.value,
        email: emailRef.current.value,
        companyName: companyNameRef.current.value,
        role: roleRef.current.value,
        forecast: forecastRef.current.value + "%",
        recentActivity: Date.now(),
      };
      axios
        .post("https://herokuhosting2.herokuapp.com/users", newUser)
        .then((res) => dispatch(updateData(newUser)))
        .catch((err) => console.log(err));
      handleClose();
      setShow(true);
      setSeverity("success");
    } else {
      setShow(true);
      setSeverity("error");
    }
  };
  const handleClose = () => {
    setOpen(false);
    setIsTrue(false);
  };
  return (
    <div className="contacts-content">
      {show ? (
        <AddOrWrongSnack
          show={show}
          closeSnackbar={closeSnackbar}
          severity={severity}
        />
      ) : (
        ""
      )}
      <div className="add-contact">
        <div className="company-select">
          <span>Company: </span>
          <FormControl style={{ paddingLeft: "3px" }}>
            <Select
              value={option}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={props.size}>
                <span>All</span>
              </MenuItem>
              <MenuItem value={3}>
                <span>3</span>
              </MenuItem>
              <MenuItem value={1}>
                <span>1</span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <button onClick={handleAddContact}>Add contact</button>
      </div>
      {data ? <TableData /> : ""}
      {isTrue ? (
        <ModalTable
          open={open}
          onHandleClose={handleClose}
          onAddUser={addEmployee}
          nameRef={nameRef}
          surnameRef={surnameRef}
          emailRef={emailRef}
          roleRef={roleRef}
          forecastRef={forecastRef}
          companyNameRef={companyNameRef}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default ContactsContent;
