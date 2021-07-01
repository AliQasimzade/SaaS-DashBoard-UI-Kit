import React, { useRef, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import "./styles/ModalTable.scss";
import "./styles/ModalTable-Media.scss";

const ModalTable = (props) => {
  const submitBtn = useRef(null);
  const form = useRef(null);

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
  if (form.current.querySelectorAll(":invalid").length === 0) {
    submitBtn.current.classList.add("active");
    submitBtn.current.removeAttribute("disabled");
  } else {
    submitBtn.current.classList.remove("active");
    submitBtn.current.setAttribute("disabled", "disabled");
  }
}
  useEffect(() => {
    setTimeout(() => {
      control()
    },100)  
  }, []);

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
        <form autoComplete="off" ref={form} onKeyUp={control}>
          <div className="form">
            <TextField
              className="input-name"
              ref={nameRef}
              onChange={(e) => (nameRef.current.value = e.target.value)}
              required
              label="Name"
            />
            <TextField
              className="input-surname"
              ref={surnameRef}
              onChange={(e) => (surnameRef.current.value = e.target.value)}
              required
              label="Surname"
            />
            <TextField
              className="input-email"
              ref={emailRef}
              onChange={(e) => (emailRef.current.value = e.target.value)}
              required
              label="E-mail"
            />
            <TextField
              className="input-company-name"
              required
              label="Company Name"
              ref={companyNameRef}
              onChange={(e) => (companyNameRef.current.value = e.target.value)}
            />
            <TextField
              className="input-role"
              ref={roleRef}
              onChange={(e) => (roleRef.current.value = e.target.value)}
              required
              label="Role"
            />
            
            <TextField
              className="input-forecast"
              ref={forecastRef}
              onChange={(e) => (forecastRef.current.value = e.target.value)}
              type="number"
              required
              label="Forecast"
            />
          </div>
          <div className="buttons">
            <button onClick={onAddUser} ref={submitBtn} className="submit-btn">
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
