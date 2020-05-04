import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";
import Check from "@material-ui/icons/CheckCircle";
import avatarApi from "dan-api/images/avatars";

export default function Dashboards(props) {
  const { open, handleClose } = props;
  return (
    <Menu
      id="dashboards-menu"
      open={open}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        style: {
          width: 200,
          position: "unset",
          marginLeft: 280,
          marginTop: 50,
        },
      }}
      onClose={handleClose}
    >
      <MenuItem
        onClick={handleClose}
        component={Link}
        to="/dashboards/view-all-dashboards"
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="View all dashboards" />
        </div>
      </MenuItem>
      <Divider style={{ width: "100%" }} />
      <MenuItem
        onClick={handleClose}
        component={Link}
        to="/dashboards/create-dashboard"
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Create Dashboard" />
        </div>
      </MenuItem>
    </Menu>
  );
}
