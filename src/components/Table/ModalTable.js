import React, { useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import "./styles/ModalTable.scss";
import "./styles/ModalTable-Media.scss";

const ModalTable = (props) => {
 
  const form = useRef(null);
  const [valid, setValid] = useState();

  let {
    open,
    onHandleClose,
    onAddUser,
    nameRef,
    surnameRef,
    emailRef,
    roleRef,
    forecastRef,
    companyNameRef,
  } = props;
  const control = () => {
    setValid(form.current.querySelectorAll(":invalid").length);
  };

  const completed = () => {
   form.current.querySelectorAll(".p").forEach(item => {
     item.style.display = "block"
   })
  };

  const handleHidden = () => {
    form.current.querySelectorAll(".p").forEach(item => {
      item.style.display = "none"
    })
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className="modal"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} className="fade">
        <form ref={form} onKeyUp={control}>
          <div className="form">
            <div className="text-field">
              <TextField
                className="input-name"
                ref={nameRef}
                onChange={(e) => (nameRef.current.value = e.target.value)}
                required
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
                required
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
                required
                label="E-mail"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-company-name"
                required
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
                required
                label="Role"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
            <div className="text-field">
              <TextField
                className="input-forecast"
                ref={forecastRef}
                onChange={(e) => (forecastRef.current.value = e.target.value)}
                type="number"
                required
                label="Forecast"
                onBlur={handleHidden}
              />
              <p className="p">Please, fill in this field</p>
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={valid === 0 ? onAddUser : completed}
              className="submit-btn"
            >
              Add
            </button>
            <button onClick={onHandleClose}>Close</button>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default ModalTable;
