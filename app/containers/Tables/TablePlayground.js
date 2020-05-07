import "antd/dist/antd.css";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Switch from "@material-ui/core/Switch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Empty } from "antd";
import { lighten, makeStyles } from "@material-ui/core/styles";

import styles from "dan-styles/TablePlayground.scss";
import { STARRED_TICKETS, STARRED } from "../../utils/constants";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    classes,
    dataModal,
    headCells,
    onRequestSort,
    order,
    orderBy,
    setStarred,
    showStarredButton,
    starred,
    starredStatus,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell style={{ width: "92px" }}>
          {showStarredButton ? (
            <IconButton
              aria-label="Menu"
              disabled={!dataModal.length > 0 || starredStatus ? true : false}
              onClick={setStarred(!starred)}
              style={{ marginLeft: "-12px" }}
            >
              <StarBorderIcon className={starred ? styles.starredColor : ""} />
            </IconButton>
          ) : (
            <label style={{ padding: 0 }}>{STARRED}</label>
          )}
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            align={headCell.numeric ? "right" : "left"}
            className={styles.tableCell}
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ textAlign: "left" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const {
    heading,
    projectHome,
    setToggleStarredButton,
    showStarredButton,
    starredStatus,
  } = props;
  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        component="div"
        id="tableTitle"
        variant="h6"
      >
        {heading}
      </Typography>
      {showStarredButton && (
        <div className={styles.starredTicketBtn}>
          <label className={styles.starredTicketHeading}>
            {projectHome ? "Starred Projects" : STARRED_TICKETS}
          </label>
          <Switch
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            name="checkedB"
            onChange={setToggleStarredButton(!starredStatus)}
          />
        </div>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const EnhancedTable = (props) => {
  const {
    handleTableRowClick,
    headCells,
    projectHome,
    rows,
    setAllStarredTask,
    setStarredTask,
    showStarredButton,
    starredTask,
    toggleAllStarredStatus,
    toggleStarredStatus,
  } = props;

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("ticketId");
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [starred, toggleStarred] = React.useState(false);
  const [starredStatus, toggleStarredButton] = React.useState(false);
  const dataModal = starredStatus ? starredTask : rows;

  const setToggleStarredButton = (starredStatus) => {
    return () => {
      toggleStarredButton(starredStatus);
    };
  };

  const setStarred = (starred) => {
    return () => {
      toggleStarred(starred);
      handleSelectAllClick(starred);
    };
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (starred) => {
    toggleAllStarredStatus(starred);
    setAllStarredTask(starred);
  };

  const handleClick = (row, projectId, status) => {
    // return () => {
    setStarredTask(row);
    toggleStarredStatus(projectId, status);
    // };
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, dataModal.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          heading={props.heading}
          projectHome={projectHome}
          setToggleStarredButton={setToggleStarredButton}
          showStarredButton={showStarredButton}
          starredStatus={starredStatus}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            {dataModal.length > 0 ? (
              <>
                <EnhancedTableHead
                  classes={classes}
                  dataModal={dataModal}
                  headCells={headCells}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                  order={order}
                  orderBy={orderBy}
                  rowCount={dataModal.length}
                  setStarred={setStarred}
                  showStarredButton={showStarredButton}
                  starred={starred}
                  starredStatus={starredStatus}
                />
                <TableBody>
                  {stableSort(dataModal, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          onClick={handleTableRowClick(
                            row.id,
                            row.data.projectName,
                            row.projectIcon
                          )}
                          role="checkbox"
                          tabIndex={-1}
                          key={labelId}
                        >
                          <TableCell padding="checkbox">
                            <IconButton
                              aria-label="Menu"
                              className={row.starred ? styles.starredColor : ""}
                              onClick={(event) => {
                                event.stopPropagation();
                                handleClick(row, row.id, !row.starred);
                              }}
                            >
                              <StarBorderIcon />
                            </IconButton>
                          </TableCell>
                          {Object.values(row.data).map((value, index) => {
                            return (
                              <TableCell
                                key={`table-cell-${index}`}
                                align="right"
                                style={{
                                  padding: "1%",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "200px",
                                  }}
                                >
                                  {row.projectIcon && index === 0 ? (
                                    <ListItemAvatar>
                                      <Avatar
                                        alt="User Name"
                                        src={row.projectIcon}
                                      />
                                    </ListItemAvatar>
                                  ) : null}
                                  <label style={{ marginLeft: "20px" }}>
                                    {value}
                                  </label>
                                </div>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </>
            ) : (
              <Empty />
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataModal.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
};

export default EnhancedTable;
