import React, { useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import "./styles/ModalTable.scss";
import "./styles/ModalTable-Media.scss";

const ModalTable = ({
  open,
  onHandleClose,
  onAddUser,
  nameRef,
  surnameRef,
  emailRef,
  roleRef,
  forecastRef,
  companyNameRef,
}) => {
  const form = useRef(null);
  const [count, setCount] = useState(0);

  const NotifEmptyInputs = (e, ok) => {
    e.preventDefault();

    document.querySelectorAll(".text-field").forEach((item) => {
      if (item.firstChild.querySelector("input").value === "") {
        item.lastChild.style.opacity = "1";
        ok = "no";
      }
    });
    if (ok === "ok") {
      onAddUser();
    }
  };

  const handleHidden = () => {
    form.current.querySelectorAll(".p").forEach((item) => {
      item.style.opacity = "0";
    });
  };

  return (
    <Modal
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className="modal"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} className="fade">
        <form ref={form}>
          <div className="form">
            <div className="text-field">
              <TextField
                className="input-name"
                ref={nameRef}
                onChange={(e) => (nameRef.current.value = e.target.value)}
                label="Name"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-surname"
                ref={surnameRef}
                onChange={(e) => (surnameRef.current.value = e.target.value)}
                label="Surname"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-email"
                ref={emailRef}
                onChange={(e) => (emailRef.current.value = e.target.value)}
                label="E-mail"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-company-name"
                label="Company Name"
                ref={companyNameRef}
                onChange={(e) =>
                  (companyNameRef.current.value = e.target.value)
                }
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-role"
                ref={roleRef}
                onChange={(e) => (roleRef.current.value = e.target.value)}
                label="Role"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-forecast"
                ref={forecastRef}
                onChange={(e) => {
                  forecastRef.current.value = e.target.value;
                  setCount(e.target.value.length);
                  if (count === 2) {
                    e.target.value = "";
                    setCount(0);
                  }
                }}
                type="number"
                label="Forecast"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={(e) => NotifEmptyInputs(e, "ok")}
              className="submit-btn"
            >
              Add
            </button>
            <button type="submit" onClick={onHandleClose}>Close</button>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default ModalTable;
