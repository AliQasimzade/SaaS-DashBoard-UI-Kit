import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./styles/ModalTable.scss";
import "./styles/ModalTable-Media.scss";

const EditAdminModal = (props) => {
  

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      className="modal"
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open} className="fade">
        <form autoComplete="off">      
          <div className="buttons">
            <button className="active" onClick={props.deleteEmployee}>
              Delete
            </button>
            <button onClick={props.close}>Close</button>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default EditAdminModal;
