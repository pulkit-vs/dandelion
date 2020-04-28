//functions
export function createData(
  ticketId, //should not be sorted
  type,
  reporter,
  title,
  priority,
  assignedDate
) {
  return { ticketId, type, reporter, title, priority, assignedDate };
}
