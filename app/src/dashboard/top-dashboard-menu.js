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
import { constants, toRoutes } from "../../utils/constants";
import styles from "dan-styles/TopDashboardMenu.scss";


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
        to={toRoutes.VIEW_ALL_DASHBOARDS}
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary = {constants.VIEW_ALL_DASHBOARDS} />
        </div>
      </MenuItem>
      <Divider className={styles.divider} />
      <MenuItem
        component={Link}
        onClick={handleClose}
        to={toRoutes.CREATE_DASHBOARD}
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary = {constants.CREATE_DASHBOARD} />
        </div>
      </MenuItem>
    </Menu>
  );
}
