import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
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
import styles from "dan-styles/TablePlayground.scss";
import { STARRED_TICKETS } from "../../utils/constants";
import { lighten, makeStyles } from "@material-ui/core/styles";

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
    headCells,
    onRequestSort,
    order,
    orderBy,
    setStarred,
    starred,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <IconButton aria-label="Menu" onClick={setStarred(!starred)}>
            <StarBorderIcon className={starred ? styles.starredColor : ""} />
          </IconButton>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            className={styles.tableCell}
            sortDirection={orderBy === headCell.id ? order : false}
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
  numSelected: PropTypes.number.isRequired,
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
  const { heading, setToggleStarredButton, starredStatus } = props;
  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {heading}
      </Typography>
      <div className={styles.starredTicketBtn}>
        <label className={styles.starredTicketHeading}>{STARRED_TICKETS}</label>
        <Switch
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
          onChange={setToggleStarredButton(!starredStatus)}
        />
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

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
    headCells,
    rows,
    setAllStarredTask,
    setStarredTask,
    starredTask,
    toggleAllStarredStatus,
    toggleStarredStatus,
  } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("ticketId");
  const [selected, setSelected] = React.useState([]);
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

  const handleClick = (row, ticketId, status) => {
    return () => {
      setStarredTask(row);
      toggleStarredStatus(ticketId, status);
    };
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

  const isSelected = (ticketId) => selected.indexOf(ticketId) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, dataModal.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          heading={props.heading}
          numSelected={selected.length}
          setToggleStarredButton={setToggleStarredButton}
          starredStatus={starredStatus}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={dataModal.length}
              headCells={headCells}
              setStarred={setStarred}
              starred={starred}
            />
            <TableBody>
              {stableSort(dataModal, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.ticketId);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      //onClick={(event) => handleClick(event, row.ticketId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={labelId}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <IconButton
                          aria-label="Menu"
                          className={
                            row.starredTicket ? styles.starredColor : ""
                          }
                          onClick={handleClick(
                            row,
                            row.ticketId,
                            !row.starredTicket
                          )}
                        >
                          <StarBorderIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="right" className={styles.tableCell}>
                        {row.ticketId}
                      </TableCell>
                      <TableCell align="right" className={styles.tableCell}>
                        {row.type}
                      </TableCell>
                      <TableCell align="right" className={styles.tableCell}>
                        {row.reporter}
                      </TableCell>
                      <TableCell align="right" className={styles.tableCell}>
                        {row.title}
                      </TableCell>
                      <TableCell align="right" className={styles.tableCell}>
                        {row.priority}
                      </TableCell>
                      <TableCell align="right" className={styles.tableCell}>
                        {row.assignedDate}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
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
