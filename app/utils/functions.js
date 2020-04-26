//functions
export function createData(
  tickedId, //should not be sorted
  type,
  reporter,
  title,
  priority,
  assignedDate
) {
  return { tickedId, type, reporter, title, priority, assignedDate };
}
