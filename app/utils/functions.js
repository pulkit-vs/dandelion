import { get } from "lodash";
import { systemSettings } from "../src/menus/settings/settings-system";
import { projectOptions } from "../src/menus/projects/project-options";
import { productSettings } from "../src/menus/settings/settings-products";
import { projectsSettings } from "../src/menus/settings/settings-project";
import { issuesSettings } from "../src/menus/settings/settings-issues";
import { appSettings } from "../src/menus/settings/settings-apps";
import { accountSettings } from "../src/menus/settings/settings-tool-account";
import { userManagementSettings } from "../src/menus/settings/settings-user-management";
import { billingSettings } from "../src/menus/settings/settings-billing";
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

//BaseAddress
export function checkLocation(history) {
  const pathname = get(history, ["location", "pathname"], "");
  var currentBase = pathname.split("/")[1];

  console.log("currentBase", currentBase);
  //currentPage
  const currentPage = pathname.split("/")[2];
  console.log("currentPage", currentPage);

  if (currentBase) {
    return { currentBase: currentBase, currentPage: currentPage };
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
