import React, { useState, useRef } from "react";
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

const ContactsContent = () => {
  const data = useSelector((state) => state.productReducer.items);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const companyNameRef = useRef(null);
  const roleRef = useRef(null);
  const forecastRef = useRef(null);
  const recentActivityRef = useRef(null);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
    if (event.target.value === 0) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getData")
        .then((res) => dispatch(addData(res.data.Lists)))
        .catch((err) => console.log(err));
    } else if (event.target.value === 1) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getData")
        .then((res) => dispatch(addData(res.data.Lists.slice(0, 3))))
        .catch((err) => console.log(err));
    } else if (event.target.value === 2) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getData")
        .then((res) => dispatch(addData(res.data.Lists.slice(0, 6))))
        .catch((err) => console.log(err));
    }
  };

  const handleAddContact = () => {
    setOpen(true);
    setIsTrue(true);
  };
  const addEmployee = (e) => {
    e.preventDefault();
    let newUser = {
      name: nameRef.current.value + " " + surnameRef.current.value,
      email: emailRef.current.value,
      companyName: companyNameRef.current.value,
      role: roleRef.current.value,
      forecast: forecastRef.current.value,
      recentActivity: recentActivityRef.current.value,
    };

    axios
      .post("https://herokuhosting2.herokuapp.com/users", newUser)
      .then((res) => dispatch(updateData(newUser)))
      .catch((err) => console.log(err));
    handleClose();

    alert("You added new user");
  };
  const handleClose = () => {
    setOpen(false);
    setIsTrue(false);
  };
  return (
    <div className="contacts-content">
      <div className="add-contact">
        <div className="company-select">
          <span>Company: </span>
          <FormControl style={{ paddingLeft: "3px" }}>
            <Select
              value={option}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={0}>
                <span>All</span>
              </MenuItem>
              <MenuItem value={1}>
                <span>3</span>
              </MenuItem>
              <MenuItem value={2}>
                <span>6</span>
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
          recentActivityRef={recentActivityRef}
          companyNameRef={companyNameRef}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default ContactsContent;
