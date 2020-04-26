import { createData } from "../utils/functions";

export const RESTART_ON_REMOUNT = "@@saga-injector/restart-on-remount";
export const DAEMON = "@@saga-injector/daemon";
export const ONCE_TILL_UNMOUNT = "@@saga-injector/once-till-unmount";

export const headCells = [
  { id: "tickedId", numeric: false, disablePadding: true, label: "Ticket Id" },
  { id: "type", numeric: true, disablePadding: false, label: "Type" },
  { id: "reporter", numeric: true, disablePadding: false, label: "Reporter" },
  { id: "title", numeric: true, disablePadding: false, label: "Title" },
  { id: "priority", numeric: true, disablePadding: false, label: "Priority" },
  {
    id: "assignedDate",
    numeric: true,
    disablePadding: false,
    label: "Assigned Date",
  },
];

export const rows = [
  createData(
    "1",
    "AMN Scheduling",
    "AWON",
    "Software Project",
    "Nikhil Agarwal",
    "2 April, 2019"
  ),
  createData(
    "2",
    "AMN Scheduling",
    "AWON",
    "Software Project",
    "Nikhil Agarwal",
    "2 April, 2019"
  ),
  createData(
    "3",
    "AMN Scheduling",
    "AWON",
    "Software Project",
    "Nikhil Agarwal",
    "2 April, 2019"
  ),
  createData(
    "4",
    "AMN Scheduling",
    "AWON",
    "Software Project",
    "Nikhil Agarwal",
    "2 April, 2019"
  ),
  createData(
    "5",
    "AMN Wonolo",
    "AWON",
    "Software Project",
    "Nikhil Agarwal",
    "2 April, 2019"
  ),
  createData(
    "6",
    "AMN Wonolo",
    "AWON",
    "Software Project",
    "Nikhil Agarwal",
    "2 April, 2019"
  ),
];
