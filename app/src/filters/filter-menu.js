/**
 * @function FiltersMenu
 * 
 * @description
 *    Filter Menu dropdown
 * 
 * @author
 *  Nikhil Aggarwal, VectoScalar
 * 
 */

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
import styles from "dan-styles/FilterMenu.scss";

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
        to={toRoutes.VIEW_ALL_FILTERS}
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={constants.VIEW_ALL_FILTERS} />
        </div>
      </MenuItem>
      <Divider className={styles.divider} />
      <MenuItem
        component={Link}
        onClick={handleClose}
        to={toRoutes.ADANCED_ISSUE_SEARCH}
      >
        <div>
          <ListItemAvatar>
            <Avatar>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={constants.ADVANCED_ISSUE_SEARCH} />
        </div>
      </MenuItem>
    </Menu>
  );
}
