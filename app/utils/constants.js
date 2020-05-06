import { createData } from "../utils/functions";

export const RESTART_ON_REMOUNT = "@@saga-injector/restart-on-remount";
export const DAEMON = "@@saga-injector/daemon";
export const ONCE_TILL_UNMOUNT = "@@saga-injector/once-till-unmount";

export const headCells = [
  { id: "ticketId", numeric: false, disablePadding: true, label: "Ticket Id" },
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

export const BASE_URL = '/v1/';

export const APIS = {
  PROJECTS: "projects"
};

export const projectHomeTickets = [
  {
    ticketId: "1",
    type: "AMN Scheduling",
    reporter: "AWON",
    title: "Software Project",
    priority: "Nikhil Agarwal",
    assignedDate: "2 April, 2019",
    starredTicket: true,
  },
  {
    ticketId: "2",
    type: "AMN Scheduling",
    reporter: "AWON",
    title: "Software Project",
    priority: "Nikhil Agarwal",
    assignedDate: "2 April, 2019",
    starredTicket: true,
  },
  {
    ticketId: "3",
    type: "AMN Scheduling",
    reporter: "AWON",
    title: "Software Project",
    priority: "Nikhil Agarwal",
    assignedDate: "2 April, 2019",
    starredTicket: false,
  },
  {
    ticketId: "4",
    type: "AMN Scheduling",
    reporter: "AWON",
    title: "Software Project",
    priority: "Nikhil Agarwal",
    assignedDate: "2 April, 2019",
    starredTicket: true,
  },
  {
    ticketId: "5",
    type: "AMN Scheduling",
    reporter: "AWON",
    title: "Software Project",
    priority: "Nikhil Agarwal",
    assignedDate: "2 April, 2019",
    starredTicket: false,
  },
  {
    ticketId: "6",
    type: "AMN Scheduling",
    reporter: "AWON",
    title: "Software Project",
    priority: "Nikhil Agarwal",
    assignedDate: "2 April, 2019",
    starredTicket: false,
  },
];

export const assignedToMeTickets = [
  {
    starred: true,
    data: {
      ticketId: "1",
      type: "AMN Scheduling",
      reporter: "AWON",
      title: "Software Project",
      priority: "Nikhil Agarwal",
      assignedDate: "2 April, 2019",
    },
  },
  {
    starred: true,
    data: {
      ticketId: "2",
      type: "AMN Scheduling",
      reporter: "AWON",
      title: "Software Project",
      priority: "Nikhil Agarwal",
      assignedDate: "2 April, 2019",
    },
  },
  {
    starred: false,
    data: {
      ticketId: "3",
      type: "AMN Scheduling",
      reporter: "AWON",
      title: "Software Project",
      priority: "Nikhil Agarwal",
      assignedDate: "2 April, 2019",
    },
  },
  {
    starred: true,
    data: {
      ticketId: "4",
      type: "AMN Scheduling",
      reporter: "AWON",
      title: "Software Project",
      priority: "Nikhil Agarwal",
      assignedDate: "2 April, 2019",
    },
  },
  {
    starred: false,
    data: {
      ticketId: "5",
      type: "AMN Scheduling",
      reporter: "AWON",
      title: "Software Project",
      priority: "Nikhil Agarwal",
      assignedDate: "2 April, 2019",
    },
  },
  {
    starred: false,
    data: {
      ticketId: "6",
      type: "AMN Scheduling",
      reporter: "AWON",
      title: "Software Project",
      priority: "Nikhil Agarwal",
      assignedDate: "2 April, 2019",
    },
  },
];

export const projectCardData = [
  {
    projectId: 1,
    projectName: "Project 1",
    projectKey: "PRO1",
    projectDescription: "abcd  efg",
    projectType: "Classic",
    projectCategory: "Software",
    projectTemplateId: "Kanban",
    projectOwner: "Nikhil",
    projectLead: "Afzal",
    projectIcon:
      "https://images.vexels.com/media/users/3/142786/isolated/preview/eb28a63ef3e2232795b9ad0610f17726-m-letter-origami-isotype-by-vexels.png",
  },
  {
    projectId: 2,
    projectName: "Project 2",
    projectKey: "PRO2",
    projectDescription: "abcd  efg",
    projectType: "Classic",
    projectCategory: "Software",
    projectTemplateId: "Kanban",
    projectOwner: "Nikhil",
    projectLead: "Shubham",
    projectIcon:
      "https://images.vexels.com/media/users/3/142786/isolated/preview/eb28a63ef3e2232795b9ad0610f17726-m-letter-origami-isotype-by-vexels.png",
  },
  {
    projectId: 3,
    projectName: "Project 3",
    projectKey: "PRO2",
    projectDescription: "abcd  efg",
    projectType: "Classic",
    projectCategory: "Software",
    projectTemplateId: "Kanban",
    projectOwner: "Nikhil",
    projectLead: "Shubham",
    projectIcon:
      "https://images.vexels.com/media/users/3/142786/isolated/preview/eb28a63ef3e2232795b9ad0610f17726-m-letter-origami-isotype-by-vexels.png",
  },
];

export const STARRED_TICKETS = "Starred Tickets";

export const STARRED = "Starred";

export const projectList = [
  {
    starred: true,
    id: 1,
    projectIcon:
      "https://images.vexels.com/media/users/3/142786/isolated/preview/eb28a63ef3e2232795b9ad0610f17726-m-letter-origami-isotype-by-vexels.png",
    data: {
      projectName: "Project 1",
      projectKey: "PRO 1",
      projectLead: "Nikhil sir",
      projectType: "Classic",
      projectCategory: "Software",
    },
  },
  {
    starred: true,
    id: 2,
    projectIcon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/NYCS-bull-trans-B.svg/480px-NYCS-bull-trans-B.svg.png",
    data: {
      projectName: "Project 2",
      projectKey: "PRO 2",
      projectLead: "Nikhil sir",
      projectType: "Classic",
      projectCategory: "Software",
    },
  },
  {
    starred: true,
    id: 3,
    projectIcon:
      "https://images.vexels.com/media/users/3/181139/isolated/preview/91cd77a7d5a18ee8546d2b5824d06bb2-halloween-bloody-letter-h-by-vexels.png",
    data: {
      projectName: "Project 3",
      projectKey: "PRO 3",
      projectLead: "Nikhil sir",
      projectType: "Advanced",
      projectCategory: "Software",
    },
  },
];

export const projectHeadCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  { id: "key", numeric: true, disablePadding: false, label: "Key" },
  { id: "lead", numeric: true, disablePadding: false, label: "Lead" },
  { id: "type", numeric: true, disablePadding: false, label: "Type" },
  { id: "category", numeric: true, disablePadding: false, label: "Category" },
];

export const VS_PROJECTS = "VS Projects";

export const SWITCH_PROJECT = "Switch Project";
