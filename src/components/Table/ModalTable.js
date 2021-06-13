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

  let { open, onHandleClose, onAddUser } = props;

  const control = () => {
    let invalids = form.current.querySelectorAll(":invalid").length;

    if (invalids === 0) {
     submitBtn.current.classList.add("active")
      submitBtn.current.removeAttribute("disabled");
     
    } else {
      submitBtn.current.classList.remove("active")
      submitBtn.current.setAttribute("disabled", "disabled");
      
    }
  };
  useEffect(() => {
    setTimeout(() => {
      control();
    }, 100);
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
            <TextField className="input-name" required label="Name" />
            <TextField className="input-surname" required label="Surname" />
            <TextField className="input-email" required label="E-mail" />
            <TextField
              className="input-company-name"
              required
              label="Company Name"
            />
            <TextField className="input-role" required label="Role" />
            <TextField className="input-forecast" required label="Forecast" />
            <TextField
              className="input-recent-activity"
              label="Recent activity"
              required
            />
          </div>
          <div className="buttons">
            <button onClick={onAddUser} ref={submitBtn}>
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