import React, { useState } from "react";
import "./styles/ContactsContent.scss";
import "./styles/ContactsContent-Media.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TableData from "../Table/TableData";
import ModalTable from "../Table/ModalTable";

import axios from "axios";
const ContactsContent = () => {

  let [open, setOpen] = useState(false);
  const [option, setOption] = useState("");
  let [isTrue, setIsTrue] = useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const handleAddContact = () => {
    setOpen((open = true));
    setIsTrue((isTrue = true));
    console.log(open);
  };
  const addEmployee = () => {
   
    let newUser = {
      name:
        document.querySelector(".input-name input").value +
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
     setTimeout(() =>{
      window.location.reload()
     },800)
      alert( "You added new user")
    
   
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
              <MenuItem value="">
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
     <TableData /> 
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
