import Avatar from "@material-ui/core/Avatar";
import Check from "@material-ui/icons/CheckCircle";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import { Link } from "react-router-dom";

export default function Dashboards(props) {
  const { open, handleClose, dashboardMenuPosition } = props;
  return (
    <Menu
      id="dashboards-menu"
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          marginLeft: dashboardMenuPosition - 40,
          marginTop: -225,
          width: 200,
        },
      }}
    >
      <MenuItem
        component={Link}
        onClick={handleClose}
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
        component={Link}
        onClick={handleClose}
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
