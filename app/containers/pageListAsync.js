/* eslint-disable */

import React from "react";
import Loading from "dan-components/Loading";
import loadable from "../utils/loadable";

// Landing Page
export const HomePage = loadable(() => import("./LandingPage/HomePage"), {
  fallback: <Loading />,
});
export const SliderPage = loadable(() => import("./LandingPage/SliderPage"), {
  fallback: <Loading />,
});
export const BlogHome = loadable(() => import("./Pages/Blog"), {
  fallback: <Loading />,
});
export const Article = loadable(() => import("./Pages/Blog/Article"), {
  fallback: <Loading />,
});

// Dashboard
export const PersonalDashboard = loadable(
  () => import("./Dashboard/PersonalDashboard"),
  {
    fallback: <Loading />,
  }
);
export const CrmDashboard = loadable(() => import("./Dashboard/CrmDashboard"), {
  fallback: <Loading />,
});
export const CryptoDashboard = loadable(
  () => import("./Dashboard/CryptoDashboard"),
  {
    fallback: <Loading />,
  }
);

// Widgets
export const Infographics = loadable(() => import("./Widgets/Infographics"), {
  fallback: <Loading />,
});
export const MiniApps = loadable(() => import("./Widgets/MiniApps"), {
  fallback: <Loading />,
});
export const Analytics = loadable(() => import("./Widgets/Analytics"), {
  fallback: <Loading />,
});
export const InfoUpdates = loadable(() => import("./Widgets/InfoUpdates"), {
  fallback: <Loading />,
});
export const Status = loadable(() => import("./Widgets/Status"), {
  fallback: <Loading />,
});

// Layouts
export const AppLayout = loadable(() => import("./Layouts/AppLayout"), {
  fallback: <Loading />,
});
export const Responsive = loadable(() => import("./Layouts/Responsive"), {
  fallback: <Loading />,
});
export const Grid = loadable(() => import("./Layouts/Grid"), {
  fallback: <Loading />,
});

// Tables
export const SimpleTable = loadable(() => import("./Tables/BasicTable"), {
  fallback: <Loading />,
});
export const AdvancedTable = loadable(() => import("./Tables/AdvancedTable"), {
  fallback: <Loading />,
});
export const TreeTable = loadable(() => import("./Tables/TreeTable"), {
  fallback: <Loading />,
});
export const EditableCell = loadable(() => import("./Tables/EditableCell"), {
  fallback: <Loading />,
});
export const TablePlayground = loadable(
  () => import("./Tables/TablePlayground"),
  {
    fallback: <Loading />,
  }
);

// Forms
export const ReduxForm = loadable(() => import("./Forms/ReduxForm"), {
  fallback: <Loading />,
});
export const DateTimePicker = loadable(() => import("./Forms/DateTimePicker"), {
  fallback: <Loading />,
});
export const CheckboxRadio = loadable(() => import("./Forms/CheckboxRadio"), {
  fallback: <Loading />,
});
export const Switches = loadable(() => import("./Forms/Switches"), {
  fallback: <Loading />,
});
export const Selectbox = loadable(() => import("./Forms/Selectbox"), {
  fallback: <Loading />,
});
export const Rating = loadable(() => import("./Forms/Rating"), {
  fallback: <Loading />,
});
export const SliderRange = loadable(() => import("./Forms/SliderRange"), {
  fallback: <Loading />,
});
export const Buttons = loadable(() => import("./Forms/Buttons"), {
  fallback: <Loading />,
});
export const ToggleButton = loadable(() => import("./Forms/ToggleButton"), {
  fallback: <Loading />,
});
export const DialButton = loadable(() => import("./Forms/DialButton"), {
  fallback: <Loading />,
});
export const Textbox = loadable(() => import("./Forms/Textbox"), {
  fallback: <Loading />,
});
export const Autocomplete = loadable(() => import("./Forms/Autocomplete"), {
  fallback: <Loading />,
});
export const TextEditor = loadable(() => import("./Forms/TextEditor"), {
  fallback: <Loading />,
});
export const Upload = loadable(() => import("./Forms/Upload"), {
  fallback: <Loading />,
});

// UI Components
export const Badges = loadable(() => import("./UiElements/Badges"), {
  fallback: <Loading />,
});
export const Avatars = loadable(() => import("./UiElements/Avatars"), {
  fallback: <Loading />,
});
export const Accordion = loadable(() => import("./UiElements/Accordion"), {
  fallback: <Loading />,
});
export const List = loadable(() => import("./UiElements/List"), {
  fallback: <Loading />,
});
export const PopoverTooltip = loadable(
  () => import("./UiElements/PopoverTooltip"),
  {
    fallback: <Loading />,
  }
);
export const Snackbar = loadable(() => import("./UiElements/Snackbar"), {
  fallback: <Loading />,
});
export const Typography = loadable(() => import("./UiElements/Typography"), {
  fallback: <Loading />,
});
export const Tabs = loadable(() => import("./UiElements/Tabs"), {
  fallback: <Loading />,
});
export const Cards = loadable(() => import("./UiElements/Cards"), {
  fallback: <Loading />,
});
export const ImageGrid = loadable(() => import("./UiElements/ImageGrid"), {
  fallback: <Loading />,
});
export const Progress = loadable(() => import("./UiElements/Progress"), {
  fallback: <Loading />,
});
export const DialogModal = loadable(() => import("./UiElements/DialogModal"), {
  fallback: <Loading />,
});
export const Steppers = loadable(() => import("./UiElements/Steppers"), {
  fallback: <Loading />,
});
export const DrawerMenu = loadable(() => import("./UiElements/DrawerMenu"), {
  fallback: <Loading />,
});
export const Paginations = loadable(() => import("./UiElements/Paginations"), {
  fallback: <Loading />,
});
export const Breadcrumbs = loadable(() => import("./UiElements/Breadcrumbs"), {
  fallback: <Loading />,
});
export const Icons = loadable(() => import("./UiElements/Icons"), {
  fallback: <Loading />,
});
export const IonIcons = loadable(() => import("./UiElements/IonIcons"), {
  fallback: <Loading />,
});
export const SliderCarousel = loadable(
  () => import("./UiElements/SliderCarousel"),
  {
    fallback: <Loading />,
  }
);
export const Tags = loadable(() => import("./UiElements/Tags"), {
  fallback: <Loading />,
});
export const Dividers = loadable(() => import("./UiElements/Dividers"), {
  fallback: <Loading />,
});

// Chart
export const LineCharts = loadable(() => import("./Charts/LineCharts"), {
  fallback: <Loading />,
});
export const BarCharts = loadable(() => import("./Charts/BarCharts"), {
  fallback: <Loading />,
});
export const AreaCharts = loadable(() => import("./Charts/AreaCharts"), {
  fallback: <Loading />,
});
export const PieCharts = loadable(() => import("./Charts/PieCharts"), {
  fallback: <Loading />,
});
export const RadarCharts = loadable(() => import("./Charts/RadarCharts"), {
  fallback: <Loading />,
});
export const ScatterCharts = loadable(() => import("./Charts/ScatterCharts"), {
  fallback: <Loading />,
});
export const CompossedCharts = loadable(
  () => import("./Charts/CompossedCharts"),
  {
    fallback: <Loading />,
  }
);
export const DoughnutCharts = loadable(
  () => import("./Charts/DoughnutCharts"),
  {
    fallback: <Loading />,
  }
);
export const BarDirection = loadable(() => import("./Charts/BarDirection"), {
  fallback: <Loading />,
});
export const LineScatterChart = loadable(
  () => import("./Charts/LineScatterChart"),
  {
    fallback: <Loading />,
  }
);
export const AreaFilledChart = loadable(
  () => import("./Charts/AreaFilledChart"),
  {
    fallback: <Loading />,
  }
);
export const RadarPolarCharts = loadable(
  () => import("./Charts/RadarPolarCharts"),
  {
    fallback: <Loading />,
  }
);

// Pages
export const Login = loadable(() => import("./Pages/Users/Login"), {
  fallback: <Loading />,
});
export const LoginV2 = loadable(() => import("./Pages/Users/LoginV2"), {
  fallback: <Loading />,
});
export const LoginV3 = loadable(() => import("./Pages/Users/LoginV3"), {
  fallback: <Loading />,
});
export const Register = loadable(() => import("./Pages/Users/Register"), {
  fallback: <Loading />,
});
export const RegisterV2 = loadable(() => import("./Pages/Users/RegisterV2"), {
  fallback: <Loading />,
});
export const RegisterV3 = loadable(() => import("./Pages/Users/RegisterV3"), {
  fallback: <Loading />,
});
export const ComingSoon = loadable(() => import("./Pages/ComingSoon"), {
  fallback: <Loading />,
});
export const Profile = loadable(() => import("./Pages/UserProfile"), {
  fallback: <Loading />,
});
export const Timeline = loadable(() => import("./Pages/Timeline"), {
  fallback: <Loading />,
});
export const BlankPage = loadable(() => import("./Pages/BlankPage"), {
  fallback: <Loading />,
});
export const Pricing = loadable(() => import("./Pages/Pricing"), {
  fallback: <Loading />,
});
export const Ecommerce = loadable(() => import("./Pages/Ecommerce"), {
  fallback: <Loading />,
});
export const ProductPage = loadable(
  () => import("./Pages/Ecommerce/ProductPage"),
  {
    fallback: <Loading />,
  }
);
export const CheckoutPage = loadable(
  () => import("./Pages/Ecommerce/CheckoutPage"),
  {
    fallback: <Loading />,
  }
);
export const Contact = loadable(() => import("./Pages/Contact"), {
  fallback: <Loading />,
});
export const ResetPassword = loadable(
  () => import("./Pages/Users/ResetPassword"),
  {
    fallback: <Loading />,
  }
);
export const LockScreen = loadable(() => import("./Pages/Users/LockScreen"), {
  fallback: <Loading />,
});
export const Chat = loadable(() => import("./Pages/Chat"), {
  fallback: <Loading />,
});
export const Email = loadable(() => import("./Pages/Email"), {
  fallback: <Loading />,
});
export const Photos = loadable(() => import("./Pages/Photos"), {
  fallback: <Loading />,
});
export const Calendar = loadable(() => import("./Pages/Calendar"), {
  fallback: <Loading />,
});
export const TaskBoard = loadable(() => import("./Pages/TaskBoard"), {
  fallback: <Loading />,
});
export const Invoice = loadable(() => import("./Pages/Invoice"), {
  fallback: <Loading />,
});

export const ManageTeam = loadable(() => import("../src/people/manage-team"), {
  fallback: <Loading />,
});

// Maps
export const MapMarker = loadable(() => import("./Maps/MapMarker"), {
  fallback: <Loading />,
});
export const MapDirection = loadable(() => import("./Maps/MapDirection"), {
  fallback: <Loading />,
});
export const SearchMap = loadable(() => import("./Maps/SearchMap"), {
  fallback: <Loading />,
});
export const TrafficIndicator = loadable(
  () => import("./Maps/TrafficIndicator"),
  {
    fallback: <Loading />,
  }
);
export const StreetViewMap = loadable(() => import("./Maps/StreetViewMap"), {
  fallback: <Loading />,
});

// Other
export const NotFound = loadable(() => import("./NotFound/NotFound"), {
  fallback: <Loading />,
});
export const NotFoundDedicated = loadable(
  () => import("./Pages/Standalone/NotFoundDedicated"),
  {
    fallback: <Loading />,
  }
);
export const Error = loadable(() => import("./Pages/Error"), {
  fallback: <Loading />,
});
export const Maintenance = loadable(() => import("./Pages/Maintenance"), {
  fallback: <Loading />,
});
export const Parent = loadable(() => import("./Parent"), {
  fallback: <Loading />,
});
export const Settings = loadable(() => import("./Pages/Settings"), {
  fallback: <Loading />,
});
export const HelpSupport = loadable(() => import("./Pages/HelpSupport"), {
  fallback: <Loading />,
});
export const ProjectHome = loadable(
  () => import("../src/projects/projectHome"),
  {
    fallback: <Loading />,
  }
);
export const AssignedToMe = loadable(
  () => import("../src/myWork/assigned-to-me"),
  {
    fallback: <Loading />,
  }
);
export const AddProject = loadable(
  () => import("../src/projects/add-project"),
  {
    fallback: <Loading />,
  }
);

export const StarredTasks = loadable(
  () => import("../src/myWork/starredTasks"),
  {
    fallback: <Loading />,
  }
);

export const CreateIssues = loadable(
  () => import("../src/issues/create-issue"),
  {
    fallback: <Loading />,
  }
);

// Settings

// User Management
export const UsersSetting = loadable(() => import("../src/settings/user-management/user-management/users"), {
  fallback: <Loading />,
});

export const GroupsSetting = loadable(() => import("../src/settings/user-management/user-management/groups"), {
  fallback: <Loading />,
});

export const AccessRequestsSetting = loadable(() => import("../src/settings/user-management/user-management/access-request"), {
  fallback: <Loading />,
});

export const SiteAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/site-access"), {
  fallback: <Loading />,
});

export const ProductAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/product-access"), {
  fallback: <Loading />,
});

export const GSuiteAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/g-suite"), {
  fallback: <Loading />,
});

export const EmojiAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/emoji"), {
  fallback: <Loading />,
});

export const ConnectedAppsAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/connected-apps"), {
  fallback: <Loading />,
});

export const SecurityAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/security"), {
  fallback: <Loading />,
});

export const StorageAccessSetting = loadable(() => import("../src/settings/user-management/site-settings/storage"), {
  fallback: <Loading />,
});

export const BillingAccessSetting = loadable(() => import("../src/settings/user-management/subscriptions/billing"), {
  fallback: <Loading />,
});

export const ManageSubscriptionsAccessSetting = loadable(() => import("../src/settings/user-management/subscriptions/manage-subscriptions"), {
  fallback: <Loading />,
});

export const DiscoverApplicationsAccessSetting = loadable(() => import("../src/settings/user-management/subscriptions/discover-applications"), {
  fallback: <Loading />,
});

export const KaryaAccessSetting = loadable(() => import("../src/settings/user-management/app-settings/karya"), {
  fallback: <Loading />,
});

export const GiveFeedbackAccessSetting = loadable(() => import("../src/settings/user-management/admin-experience/give-feedback"), {
  fallback: <Loading />,
});

// Billing

export const BillEstimateSetting = loadable(() => import("../src/settings/billing/billing/bill-estimate"), {
  fallback: <Loading />,
});

export const BillDetailsSetting = loadable(() => import("../src/settings/billing/billing/billing-details"), {
  fallback: <Loading />,
});

export const BillHistorySetting = loadable(() => import("../src/settings/billing/billing/billing-history"), {
  fallback: <Loading />,
});

export const OverviewSetting = loadable(() => import("../src/settings/billing/billing/overview"), {
  fallback: <Loading />,
});

export const ManageSubscriptionsSetting = loadable(() => import("../src/settings/billing/billing/manage-subscriptions"), {
  fallback: <Loading />,
});

// System

export const GeneralConfigurationSetting = loadable(() => import("../src/settings/system/system/general-configuration"), {
  fallback: <Loading />,
});

export const AuditLogSetting = loadable(() => import("../src/settings/system/troubleshooting/audit-log"), {
  fallback: <Loading />,
});

export const GlobalPermissionSetting = loadable(() => import("../src/settings/system/security/global-permissions"), {
  fallback: <Loading />,
});

export const IssueCollectorsSetting = loadable(() => import("../src/settings/system/security/issue-collectors"), {
  fallback: <Loading />,
});

export const ProjectRolesSetting = loadable(() => import("../src/settings/system/security/project-roles"), {
  fallback: <Loading />,
});

export const DefaultUserPreferencesSetting = loadable(() => import("../src/settings/system/user-interface/default-user-preferences"), {
  fallback: <Loading />,
});

export const LookAndFeelSetting = loadable(() => import("../src/settings/system/user-interface/look-and-feel"), {
  fallback: <Loading />,
});

export const SystemDashboardSetting = loadable(() => import("../src/settings/system/user-interface/system-dashboard"), {
  fallback: <Loading />,
});

export const BackupManagerSetting = loadable(() => import("../src/settings/system/import-export/backup-manager"), {
  fallback: <Loading />,
});

export const ExternalSystemImportSetting = loadable(() => import("../src/settings/system/import-export/external-system-import"), {
  fallback: <Loading />,
});

export const RestoreSystemSetting = loadable(() => import("../src/settings/system/import-export/restore-system"), {
  fallback: <Loading />,
});

export const GlobalMailSetting = loadable(() => import("../src/settings/system/mail/global-mail-settings"), {
  fallback: <Loading />,
});

export const OutgoingMailSetting = loadable(() => import("../src/settings/system/mail/outgoing-mail"), {
  fallback: <Loading />,
});

export const SendEmailSetting = loadable(() => import("../src/settings/system/mail/send-email"), {
  fallback: <Loading />,
});

export const NotificationHelperSetting = loadable(() => import("../src/settings/system/admin-helper/notification-helper"), {
  fallback: <Loading />,
});

export const PermissionHelperSetting = loadable(() => import("../src/settings/system/admin-helper/permission-helper"), {
  fallback: <Loading />,
});

export const SharedDashboardSetting = loadable(() => import("../src/settings/system/shared-items/shared-dashboards"), {
  fallback: <Loading />,
});

export const SharedFiltersSetting = loadable(() => import("../src/settings/system/shared-items/shared-filters"), {
  fallback: <Loading />,
});

export const AutomationRulesSetting = loadable(() => import("../src/settings/system/automation/automation-rules"), {
  fallback: <Loading />,
});

export const AttachmentsSetting = loadable(() => import("../src/settings/system/advanced/attachments"), {
  fallback: <Loading />,
});

export const EventsSetting = loadable(() => import("../src/settings/system/advanced/events"), {
  fallback: <Loading />,
});

export const LexorankManagementSetting = loadable(() => import("../src/settings/system/advanced/lexorank-management"), {
  fallback: <Loading />,
});

export const ServicesSetting = loadable(() => import("../src/settings/system/advanced/services"), {
  fallback: <Loading />,
});

export const WebhooksSetting = loadable(() => import("../src/settings/system/advanced/webhooks"), {
  fallback: <Loading />,
});

export const ProductsAccessSetting = loadable(() => import("../src/settings/product/products/product-access"), {
  fallback: <Loading />,
});

export const KaryaSoftwareConfigurationSetting = loadable(() => import("../src/settings/product/karya-software/karya-software-configuration"), {
  fallback: <Loading />,
});