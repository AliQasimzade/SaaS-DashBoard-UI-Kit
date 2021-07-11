import React, { useState, useRef, useEffect } from "react";
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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productReducer.items);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const companyNameRef = useRef(null);
  const roleRef = useRef(null);
  const forecastRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [option, setOption] = useState("");
  useEffect(() => {
    setOption(props.count);
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
  };

  const addEmployee = () => {
    let pattern =
      /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)(\@gmail.com|@mail.ru|@list.ru|@yahoo.com|@box.az)/g.test(
        emailRef.current.value
      );

    if (pattern === true) {
      let newUser = {
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        email: emailRef.current.value,
        companyName: companyNameRef.current.value,
        role: roleRef.current.value,
        forecast: Number(forecastRef.current.value),
        recentActivity: Date.now(),
        id: props.count,
      };
      axios
        .post("https://herokuhosting2.herokuapp.com/update", newUser)
        .then((res) => dispatch(updateData(newUser)))
        .catch((err) => console.log(err));
      handleClose();
      setShow(true);
      setSeverity("success");
      props.newSize();
    } else {
      setShow(true);
      setSeverity("error");
    }
  };
  const handleClose = () => {
    setOpen(false);
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              onChange={handleChange}
            >
              <MenuItem value={props.count}>
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
      {data ? <TableData data={data} delSize={props.delSize} /> : ""}
      {open ? (
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
