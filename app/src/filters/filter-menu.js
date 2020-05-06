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

export default function FiltersMenu(props) {
  const { open, handleClose, filterMenuPosition } = props;
  return (
    <Menu
      id="filters-menu"
      open={open}
      PaperProps={{
        style: {
          marginLeft: filterMenuPosition - 40,
          marginTop: -225,
          width: 200,
        },
      }}
      onClose={handleClose}
    >
      <MenuItem
        component={Link}
        onClick={handleClose}
        to="/filters/view-all-filters"
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="View all filters" />
        </div>
      </MenuItem>
      <Divider style={{ width: "100%" }} />
      <MenuItem
        component={Link}
        onClick={handleClose}
        to="/filters/advanced-issue-search"
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Advance Issue Search" />
        </div>
      </MenuItem>
    </Menu>
  );
}
