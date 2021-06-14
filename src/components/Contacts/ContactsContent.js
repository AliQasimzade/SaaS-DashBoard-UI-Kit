import React, { useState } from "react";
import "./styles/ContactsContent.scss";
import "./styles/ContactsContent-Media.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TableData from "../Table/TableData";
import ModalTable from "../Table/ModalTable";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/actions/actions";

const ContactsContent = () => {
  const data = useSelector((state) => state.productReducer.items);
  const dispatch = useDispatch();
  let [open, setOpen] = useState(false);
  const [option, setOption] = useState(0);
  let [isTrue, setIsTrue] = useState(false);

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
    setOpen((open = true));
    setIsTrue((isTrue = true));
    console.log(open);
  };
  const addEmployee = () => {
    let newUser = {
      name: document.querySelector(".input-name input").value +
        " " +
        document.querySelector(".input-surname input").value,
      email: document.querySelector(".input-email input").value,
      companyName: document.querySelector(".input-company-name input").value,
      role: document.querySelector(".input-role input").value,
      forecast: document.querySelector(".input-forecast input").value,
      recentActivity: document.querySelector(".input-recent-activity input")
        .value,
    };

    axios
      .post("https://herokuhosting2.herokuapp.com/users", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 100);
    alert("You added new user");
  };
  const handleClose = () => {
    setOpen((open = false));
    console.log(open);
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
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default ContactsContent;
