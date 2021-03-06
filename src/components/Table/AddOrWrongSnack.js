import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
const AddOrWrongSnack = (props) => {
  const [state] = useState({
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;
  return (
    <div>
      <Snackbar
        open={props.show}
        autoHideDuration={6000}
        onClose={props.closeSnackbar}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={props.closeSnackbar} severity="success">
          {`You added ${props.name}`}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddOrWrongSnack;
