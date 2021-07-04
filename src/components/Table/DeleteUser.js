import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./styles/ModalTable.scss";
import "./styles/ModalTable-Media.scss";

const DeleteUser = (props) => {

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
      <Fade in={props.open} className="fade" style={{height:"fit-content",width:"fit-content", padding:"10px"}}>
        <form autoComplete="off">      
        <h2>Are you sure ?</h2>
          <div className="buttons">
            <button className="active" onClick={props.deleteEmployee}>
              Yes
            </button>
            <button onClick={props.close}>No</button>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default DeleteUser;
