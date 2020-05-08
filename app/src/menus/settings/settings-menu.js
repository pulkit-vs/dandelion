export const settingsMenu = [
  {
    headerkey: "atlassianAdmin",
    heading: "TOOL ADMIN",
    child: [
      {
        key: "userManagement",
        name: "User Management",
        link: "/settings/user-management/users",
        icon:
          "https://i7.uihere.com/icons/746/134/366/management-b832946a3943486e5bf329849bc486a3.png",
        subtitle: "Add users, groups, and manage access requests.",
      },
      {
        key: "billing",
        name: "Billing",
        link: "/settings/billing",
        icon:
          "https://cdn.iconscout.com/icon/premium/png-256-thumb/billing-2166782-1838369.png",
        subtitle:
          "Update your billing details, manage your subscriptions and more.",
      },
    ],
  },
  {
    headerkey: "toolSettings",
    heading: "TOOL SETTINGS",
    child: [
      {
        key: "system",
        name: "System",
        link: "/settings/system",
        icon: "https://cdn.onlinewebfonts.com/svg/img_110101.png",
        subtitle: "Manage your general configurations and global permissions.",
      },
      {
        key: "product",
        name: "Product",
        link: "/settings/product",
        icon:
          "https://i7.uihere.com/icons/948/927/693/product-management-4389543a1ec767d92ed9b7c1cc76f570.png",
        subtitle: "Manage your tool's setting and integrations.",
      },
      {
        key: "projects",
        name: "Projects",
        link: "/settings/projects",
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Checklist_Noun_project_5166.svg/983px-Checklist_Noun_project_5166.svg.png",
        subtitle: "Manage your project categories.",
      },
      {
        key: "issues",
        name: "Issues",
        link: "/settings/issues",
        icon: "https://cdn.onlinewebfonts.com/svg/img_528187.png",
        subtitle:
          "Configure your issues types, workflows, screens, custom fields etc.",
      },
      {
        key: "app",
        name: "App",
        link: "/settings/app",
        icon: "ios-desktop-outline",
        subtitle: "Add and manage tool's Marketplace apps.",
      },
    ],
  },
  {
    headerkey: "personalSettings",
    heading: "PERSONAL SETTINGS",
    child: [
      {
        key: "toolAccountSettings",
        name: "Tool's account settings",
        link: "/settings/tool-settings",
        icon: "https://cdn.onlinewebfonts.com/svg/img_324273.png",
        subtitle:
          "Manage your language,time zone,and other profile information.",
      },
      {
        key: "personalToolSettings",
        name: "Personal Tool Settings",
        link: "/settings/personal-tool-settings",
        icon:
          "https://cdn1.iconfinder.com/data/icons/internet-28/48/13-512.png",
        subtitle: "Manage your email notification and tool's settings.",
      },
    ],
  },
];
