import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import { settingsMenu } from "../menus/settings/settings-menu";

export default class Settings extends Component {
  constructor() {
    super();
    this.state = { openSettings: false };
  }

  render() {
    return (
      <Menu
        id="menu-notification"
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
            width: 400,
            maxHeight: "300px",
            overflow: "auto",
            width: "500px",
            padding: "12px",
            marginTop: "-270px",
            overflowX: "hidden",
          },
        }}
        open={true}
      >
        <label style={{ fontSize: "18px", fontWeight: 600 }}>Settings</label>
        <div style={{ marginTop: "10px" }} />
        {settingsMenu.map((setting, index) => {
          return (
            <div key={index}>
              <label style={{ fontSize: "12px", fontWeight: 500 }}>
                {setting.heading}
              </label>
              {/* <MenuItem key={setting.headerkey}> */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {setting.child.map((item) => {
                  return (
                    <MenuItem
                      style={{ display: "flex", alignItems: "center" }}
                      onClick={() => {
                        console.log("x", item);
                      }}
                      component={Link}
                      to={item.link}
                    >
                      <ListItemAvatar>
                        <Avatar alt="User Name" src={item.icon} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={item.subtitle}
                        style={{ whiteSpace: "break-spaces" }}
                      />
                    </MenuItem>
                  );
                })}
              </div>
              {/* </MenuItem> */}
            </div>
          );
        })}
      </Menu>
    );
  }
}
