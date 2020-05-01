import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import logo from 'dan-images/logo.svg';
import MainMenu from './MainMenu';
import styles from './sidebar-jss';

class SidebarContent extends React.Component {
  state = {
    transform: 0,
  };

  componentDidMount = () => {
    // Scroll content to top
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    const mainContent = document.getElementById('sidebar');
    mainContent.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    this.setState({
      transform: scroll
    });
  }

  render() {
    const {
      classes,
      turnDarker,
      drawerPaper,
      toggleDrawerOpen,
      loadTransition,
      leftSidebar,
      dataMenu,
      status,
      anchorEl,
      openMenuStatus,
      closeMenuStatus,
      changeStatus,
      isLogin
    } = this.props;
    const { transform } = this.state;

    const setStatus = st => {
      switch (st) {
        case 'online':
          return (
            <div>
              <img src="https://cdn.theorg.com/f740c607-065b-45a4-a725-76393fcc8747_medium.jpg" alt={brand.name} style={{ width: "15px", height: "15px", marginRight: "4%" }} />
              AMN
            </div>
          );
        case 'idle':
          return classes.idle;
        case 'bussy':
          return classes.bussy;
        default:
          return classes.offline;
      }
    };
    return (
      <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
        <div className={classes.drawerHeader}>
          <NavLink to="/app" className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
            <img src="https://cdn.theorg.com/f740c607-065b-45a4-a725-76393fcc8747_medium.jpg" alt={brand.name} />
            AMN Healthcare
          </NavLink>
          {isLogin && (
            <div
              className={classNames(classes.profile, classes.user)}
              style={{ opacity: 1 - (transform / 100), marginTop: transform * -0.3 }}
            >
              <Avatar
                alt={dummy.user.name}
                src="data:image/jpeg;base64,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"
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
              <div style={{width:"100%"}}>
                <h4 style={{width:"100%"}}>Wonolo</h4>
                <Button size="small" onClick={openMenuStatus} style={{width:"100%"}}>
                <img src="https://cdn.theorg.com/f740c607-065b-45a4-a725-76393fcc8747_medium.jpg" alt={brand.name} style={{width:"15px", height:"15px", marginRight:"4%"}}/>
                    AMN Scheduling
                </Button>
                <Menu
                  id="status-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={closeMenuStatus}
                  className={classes.statusMenu}
                >
                  <MenuItem onClick={() => changeStatus('online')} style={{width:"100%"}}>
                  <img src="https://cdn.theorg.com/f740c607-065b-45a4-a725-76393fcc8747_medium.jpg" alt={brand.name} style={{width:"15px", height:"15px", marginRight:"4%"}}/>
                    AMN Scheduling
                  </MenuItem>
                  <MenuItem onClick={() => changeStatus('idle')}>
                  <img src="data:image/jpeg;base64,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" alt={brand.name} style={{width:"15px", height:"15px", marginRight:"4%"}}/>
                    Accolite
                  </MenuItem>
                  {/* <MenuItem onClick={() => changeStatus('bussy')}>
                    <i className={classNames(classes.dotStatus, classes.bussy)} />
                    Bussy
                  </MenuItem>
                  <MenuItem onClick={() => changeStatus('offline')}>
                    <i className={classNames(classes.dotStatus, classes.offline)} />
                    Offline
                  </MenuItem> */}
                </Menu>
              </div>
            </div>
          )}
        </div>
        <div
          id="sidebar"
          className={
            classNames(
              classes.menuContainer,
              leftSidebar && classes.rounded,
              isLogin && classes.withProfile
            )
          }
        >
          <MainMenu loadTransition={loadTransition} dataMenu={dataMenu} toggleDrawerOpen={toggleDrawerOpen} />
        </div>
      </div>
    );
  }
}

SidebarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerPaper: PropTypes.bool.isRequired,
  turnDarker: PropTypes.bool,
  toggleDrawerOpen: PropTypes.func,
  loadTransition: PropTypes.func,
  leftSidebar: PropTypes.bool.isRequired,
  dataMenu: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  openMenuStatus: PropTypes.func.isRequired,
  closeMenuStatus: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  isLogin: PropTypes.bool
};

SidebarContent.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

export default withStyles(styles)(SidebarContent);
