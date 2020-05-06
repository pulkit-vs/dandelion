export const userManagementSettings = [
  {
    key: "userManagement",
    name: "User Management",
    icon: "ios-appstore-outline",
    child: [
      {
        key: "users",
        name: "Users",
        icon: "ios-appstore-outline",
        link: "/settings/user-management/users",
      },
      {
        key: "groups",
        name: "Groups",
        icon: "ios-appstore-outline",
        link: "/settings/user-management/groups",
      },
      {
        key: "accessRequests",
        name: "Access requests",
        icon: "ios-appstore-outline",
        link: "/settings/user-management/site-access",
      },
    ],
  },
  {
    key: "siteSettings",
    name: "Site Settings",
    icon: "ios-appstore-outline",
    child: [
      {
        key: "siteAccess",
        name: "Site access",
        icon: "ios-appstore-outline",
        link: "/settings/user-management/site-access",
      },
      {
        key: "productAccess",
        name: "Product access",
        icon: "ios-appstore-outline",
        link: "/site-settings/product-access",
      },
      {
        key: "gSuite",
        name: "G Suite",
        icon: "ios-appstore-outline",
        link: "/site-settings/g-suite",
      },
      {
        key: "emoji",
        name: "Emoji",
        icon: "ios-appstore-outline",
        link: "/site-settings/emoji",
      },
      {
        key: "connectedApps",
        name: "Connected apps",
        icon: "ios-appstore-outline",
        link: "/site-settings/connected-apps",
      },
      {
        key: "security",
        name: "Security",
        icon: "ios-appstore-outline",
        link: "/site-settings/security",
      },
      {
        key: "storage",
        name: "Storage",
        icon: "ios-appstore-outline",
        link: "/site-settings/storage",
      },
    ],
  },
  {
    key: "subscriptionsAndBilling",
    name: "Subscriptions",
    icon: "ios-appstore-outline",
    child: [
      {
        key: "billing",
        name: "Billing",
        icon: "ios-appstore-outline",
        link: "/subscriptions/billing",
      },
      {
        key: "manageSubscriptions",
        name: "Manage subscriptions",
        icon: "ios-appstore-outline",
        link: "/subscriptions/manage-subscriptions",
      },
      {
        key: "discoverApplications",
        name: "Discover applications",
        icon: "ios-appstore-outline",
        link: "/subscriptions/discover-subscriptions",
      },
    ],
  },
  {
    key: "applicationSettings",
    name: "App Settings",
    icon: "ios-appstore-outline",
    child: [
      {
        key: "karya",
        name: "Karya",
        icon: "ios-appstore-outline",
        link: "/app-settings/karya",
      },
    ],
  },
  {
    key: "newAdminExperience",
    name: "Admin Experience",
    icon: "ios-appstore-outline",
    child: [
      {
        key: "giveFeedback",
        name: "Give feedback",
        icon: "ios-appstore-outline",
        link: "/admin-experience/give-feedback",
      },
    ],
  },
];
