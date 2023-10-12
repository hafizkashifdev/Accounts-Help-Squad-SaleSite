import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";

// @mui icons
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";
import DiagreamIcon from "../../assests/svg/diagram.svg";
import { ReactComponent as ViewIcon } from "../../assests/svg/view.svg";
import { ReactComponent as DeleteIcon } from "../../assests/svg/trash.svg";
import { ReactComponent as EditIcon } from "../../assests/svg/edit.svg";
import SettingIcon from "../../assests/svg/settings.svg";
import AddIcon from "../../assests/svg/add-circle.png";
import PrintIcon from "@mui/icons-material/Print";
// import { ShareIcon } from "react-icons/fa";

// ----------------------------------------------------------------------

const TableAction = ({ type = "edit", onClicked = () => { }, ...other }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <IconButton
      onClick={onClicked}
      sx={(theme) => styles.btnStyle(theme, type)}
      {...other}
      size="small"
      // onMouseEnter={()=> setHovered(true)}
      // onMouseLeave={()=> setHovered(false)}
    >
      {hovered ? hoveredIcons[type] : icons[type]}
    </IconButton>
  );
};

export default TableAction;

// ----------------------------------------------------------------------
// Styles
const styles = {
  btnStyle: (theme, type) => {
  },
  iconStyles: (theme, iconColor) => ({
    color: iconColor,
  }),
};

// ----------------------------------------------------------------------
// Icons Object

const icons = {
  edit: <EditIcon />,
  delete: <DeleteIcon />,
  view: <ViewIcon />,
  setting: <img src={SettingIcon} alt="view" />,
  add: <img src={AddIcon} alt="add" />,
  refresh: (
    <RefreshIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  diagram: (
    <Box fontSize="small" sx={(theme) => styles.iconStyles(theme, "#fff")}>
      <img src={DiagreamIcon} alt="diagramicon" height={25} width={25} />
    </Box>
  ),
  // share icon
  share: (
    <ShareIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  // print icon
  print: (
    <PrintIcon
      fontSize="medium"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  // header share icon
  headerShare: (
    <ShareIcon sx={{ color: "#fff", padding: "1px", fontSize: "25px" }} />
  ),
};
const hoveredIcons = {
  edit: <EditIcon />,
  delete: <DeleteIcon />,
  view: <ViewIcon />,
};