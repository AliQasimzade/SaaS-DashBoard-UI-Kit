import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import deleteIcon from "../../images/delete-icon.png";
const EnhancedTableToolbar = (props) => {
  let { numSelected, onDeleteAllClick } = props;

  return (
    <Toolbar style={{ borderBottom: "1px solid #EBEFF2" }}>
      {numSelected > 0 ? (
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "4px",
              background: "#109CF1",
              color: "#fff",
              fontSize: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 24px 0 14px",
            }}
          >
            {numSelected}
          </span>
          <span style={{ marginRight: "16px" }}>{numSelected} selected</span>
        </Typography>
      ) : (
        ""
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={onDeleteAllClick}>
            <img src={deleteIcon} alt="deleteIcon" />
          </IconButton>
        </Tooltip>
      ) : (
        ""
      )}
    </Toolbar>
  );
};
export default EnhancedTableToolbar;
