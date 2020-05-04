import { get } from "lodash";
//functions
export function createData(
  ticketId, //should not be sorted
  type,
  reporter,
  title,
  priority,
  assignedDate
) {
  return {
    ticketId,
    type,
    reporter,
    title,
    priority,
    assignedDate,
  };
}

export function checkLocation(history) {
  const pathname = get(history, ["location", "pathname"], "");
  const currentPage = pathname.match("/(.*)/");
  if (currentPage) {
    return currentPage[1];
  } else {
    return "";
  }
}
