import { get } from "lodash";
import { systemSettings } from "../src/menus/config/settings-system";
import { projectOptions } from "../src/projects/projectOptions";
import { productSettings } from "../src/menus/config/settings-products";
import { projectsSettings } from "../src/menus/config/settings-project";
import { issuesSettings } from "../src/menus/config/settings-issues";
import { appSettings } from "../src/menus/config/settings-apps";
import { accountSettings } from "../src/menus/config/settings-account-settings";
import { userManagementSettings } from "../src/menus/config/settings-user-management";
import { billingSettings } from "../src/menus/config/settings-billing";
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
  var sub = pathname.substring(1);
  const currentPage = sub.substring(sub.indexOf("/") + 1);
  const currentBase = pathname.match("/(.*)/");

  if (currentBase) {
    return { currentBase: currentBase[1], currentPage: currentPage };
  } else {
    return { currentBase: "", currentPage: "" };
  }
}

export function moduleJson(screen) {
  switch (screen) {
    case "system":
      return systemSettings;
    case "product":
      return productSettings;
    case "projects":
      return projectsSettings;
    case "issues":
      return issuesSettings;
    case "app":
      return appSettings;
    case "user-management":
      return userManagementSettings;
    case "tool-settings":
      return accountSettings;
    case "billing":
      return billingSettings;
    default:
      return projectOptions;
  }
}
