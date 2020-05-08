import { accountSettings } from "../src/menus/settings/settings-tool-account";
import { appSettings } from "../src/menus/settings/settings-apps";
import { billingSettings } from "../src/menus/settings/settings-billing";
import { get } from "lodash";
import { issuesSettings } from "../src/menus/settings/settings-issues";
import { productSettings } from "../src/menus/settings/settings-products";
import { projectOptions } from "../src/menus/projects/project-options";
import { projectsSettings } from "../src/menus/settings/settings-project";
import { systemSettings } from "../src/menus/settings/settings-system";
import { userManagementSettings } from "../src/menus/settings/settings-user-management";

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
  //CurrentBaseAddress
  const currentBase = pathname.split("/")[1];
  //CurrentPageAddress
  const currentPage = pathname.split("/")[2];

  if (currentBase) {
    return { currentBase: currentBase, currentPage: currentPage };
  } else {
    return { currentBase: "", currentPage: "" };
  }
}

export function moduleJson(screen) {
  //Select jsons as per selected module
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
