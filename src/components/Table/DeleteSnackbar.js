import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
const DeleteSnackbar = (props) => {
  const [state] = useState({
    vertical: "top",
    horizontal: "center",
    
  });
  let { vertical, horizontal } = state;
 
  return (
    <div>
      <Snackbar
        open={props.show}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert  severity="info">
          You deleted user
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DeleteSnackbar;
