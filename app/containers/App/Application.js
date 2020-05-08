import React from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Templates/Dashboard";
import {
  Accordion,
  AddProject,
  AdvancedTable,
  Analytics,
  AppLayout,
  AreaCharts,
  AreaFilledChart,
  AssignedToMe,
  Autocomplete,
  Avatars,
  Badges,
  BarCharts,
  BarDirection,
  BlankPage,
  Breadcrumbs,
  Buttons,
  Calendar,
  Cards,
  Chat,
  CheckboxRadio,
  CheckoutPage,
  CompossedCharts,
  Contact,
  CreateIssues,
  CryptoDashboard,
  DateTimePicker,
  DialButton,
  DialogModal,
  Dividers,
  DoughnutCharts,
  DrawerMenu,
  Ecommerce,
  EditableCell,
  Email,
  Error,
  Grid,
  HelpSupport,
  Icons,
  ImageGrid,
  InfoUpdates,
  Infographics,
  Invoice,
  IonIcons,
  LineCharts,
  LineScatterChart,
  List,
  ManageTeam,
  MapDirection,
  MapMarker,
  MiniApps,
  NotFound,
  Paginations,
  Parent,
  PersonalDashboard,
  Photos,
  PieCharts,
  PopoverTooltip,
  Pricing,
  ProductPage,
  Profile,
  Progress,
  ProjectHome,
  RadarCharts,
  RadarPolarCharts,
  Rating,
  ReduxForm,
  ScatterCharts,
  SearchMap,
  Selectbox,
  Settings,
  SimpleTable,
  SliderCarousel,
  SliderRange,
  Snackbar,
  StarredTasks,
  Status,
  Steppers,
  StreetViewMap,
  Switches,
  TablePlayground,
  Tabs,
  Tags,
  TaskBoard,
  TextEditor,
  Textbox,
  Timeline,
  ToggleButton,
  TrafficIndicator,
  TreeTable,
  Typography,
  Upload,
  UsersSetting,
  AccessRequestsSetting,
  SiteAccessSetting,
  ProductAccessSetting,
  GSuiteAccessSetting,
  EmojiAccessSetting,
  ConnectedAppsAccessSetting,
  SecurityAccessSetting,
  StorageAccessSetting,
  BillingAccessSetting,
  ManageSubscriptionsAccessSetting,
  DiscoverApplicationsAccessSetting,
  KaryaAccessSetting,
  GiveFeedbackAccessSetting,
  GroupsSetting,
  BillEstimateSetting,
  BillDetailsSetting,
  BillHistorySetting,
  OverviewSetting,
  ManageSubscriptionsSetting,
  GeneralConfigurationSetting,
  AuditLogSetting,
  GlobalPermissionSetting,
  IssueCollectorsSetting,
  DefaultUserPreferencesSetting,
  SystemDashboardSetting,
  LookAndFeelSetting,
  BackupManagerSetting,
  ExternalSystemImportSetting,
  ProjectRolesSetting,
  RestoreSystemSetting,
  GlobalMailSetting,
  OutgoingMailSetting,
  NotificationHelperSetting,
  PermissionHelperSetting,
  SharedDashboardSetting,
  SharedFiltersSetting,
  AutomationRulesSetting,
  AttachmentsSetting,
  EventsSetting,
  WebhooksSetting,
  ServicesSetting,
  LexorankManagementSetting,
  KaryaSoftwareConfigurationSetting,
  ProductsAccessSetting,
  SendEmailSetting,
  ApplicationLinksSetting,
  DVCSAccountsSetting,
  ProjectCategoriesSetting,
  ProjectsSetting,
  IssueTypesSetting,
  IssueTypeSchemasSetting,
  SubTasksSetting,
  WorkflowsSetting,
  WorkflowsSchemesSetting,
  ScreensSetting,
  ScreenSchemesSetting,
  IssueTypeScreenSchemeSetting,
  CustomFieldsSetting,
  FieldConfigurationsSetting,
  FieldConfigurationSchemesSetting,
  TimeTrackingSetting,
  IssueLinkingSetting,
  StatutesSetting,
  ResolutionsSetting,
  PrioritiesSetting,
  IssueSecuritySchemesSetting,
  NotificationSchemesSetting,
  PermissionSchemesSetting,
  FindNewAppsSetting,
  ManageAppsSetting,
  OAuthCredentialsSetting,
  AccountPreferencesSetting,
  ConnectedAppsSetting,
  EmailSetting,
  ProductsSetting,
  ProfileAndVisibilitySetting,
  SecuritySetting,
} from "../pageListAsync";

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          {/* My work */}
          <Route exact path="/" component={ProjectHome} />
          <Route path="/mywork/assigned-task" component={AssignedToMe} />
          <Route path="/mywork/starred" component={StarredTasks} />
          <Route path="/mywork/starred" component={CryptoDashboard} />
          {/* Projects */}
          <Route path="/projects/add-project" component={AddProject} />
          <Route path="/projects/project-board" component={ProjectHome} />
          <Route path="/projects/backlog" component={Analytics} />
          <Route path="/projects/project-settings" component={InfoUpdates} />
          <Route path="/projects/project-access" component={Status} />
          <Route exact path="/projects/sprint-board" component={TaskBoard} />
          <Route path="/projects/roadmap" component={Grid} />
          <Route path="/projects/release" component={AppLayout} />
          {/* Create Task */}
          <Route path="/create-task" component={CreateIssues} />
          {/* Dashboards */}
          <Route
            path="/dashboards/view-all-dashboards"
            component={AssignedToMe}
          />
          <Route path="/dashboards/create-dashboard" component={TaskBoard} />
          {/* Account */}
          <Route path="/account/account-settings" component={StarredTasks} />
          <Route path="/account/profile" component={AddProject} />
          <Route path="/account/personal-settings" component={StarredTasks} />
          <Route path="/account/feedback" component={AddProject} />

          {/* Settings */}
          {/* <Route path="/settings/system" component={AddProject} /> */}
          {/* <Route path="/settings/product" component={AddProject} /> */}
          {/* <Route path="/settings/projects" component={AddProject} /> */}
          {/* <Route path="/settings/issues" component={AddProject} /> */}
          {/* <Route path="/settings/app" component={AddProject} /> */}
          {/* <Route exact path="/settings/tool-settings" component={ProfileAndVisibilitySetting} /> */}
          {/* <Route
            path="/settings/personal-tool-settings"
            component={AddProject}
          /> */}
          {/* <Route path="/settings/billing" component={AddProject} /> */}
          {/* Filters */}
          <Route path="/filters/view-all-filters" component={AddProject} />
          <Route
            path="/filters/advanced-issue-search"
            component={StarredTasks}
          />
          {/* Table */}
          <Route exact path="/tables" component={Parent} />
          <Route path="/tables/basic-table" component={SimpleTable} />
          <Route path="/tables/data-table" component={AdvancedTable} />
          <Route path="/tables/table-playground" component={TablePlayground} />
          <Route path="/tables/tree-table" component={TreeTable} />
          <Route path="/tables/editable-cell" component={EditableCell} />
          {/* UI Bundle */}
          <Route exact path="/people/manage-team" component={ManageTeam} />
          {/* <Route path="/create/create-task" component={ReduxForm} /> */}
          <Route path="/configurations/edit" component={AddProject} />
          {/* Form & Button */}
          <Route path="/forms/date-time-picker" component={DateTimePicker} />
          <Route path="/forms/checkbox-radio" component={CheckboxRadio} />
          <Route path="/forms/switches" component={Switches} />
          <Route path="/forms/selectbox" component={Selectbox} />
          <Route path="/forms/ratting" component={Rating} />
          <Route path="/forms/slider-range" component={SliderRange} />
          <Route path="/forms/buttons" component={Buttons} />
          <Route path="/forms/toggle-button" component={ToggleButton} />
          <Route path="/forms/dial-button" component={DialButton} />
          <Route path="/forms/textfields" component={Textbox} />
          <Route path="/forms/autocomplete" component={Autocomplete} />
          <Route path="/forms/upload" component={Upload} />
          <Route path="/forms/wysiwyg-editor" component={TextEditor} />
          {/* Ui Components */}
          <Route exact path="/ui" component={Parent} />
          <Route path="/ui/avatars" component={Avatars} />
          <Route path="/ui/accordion" component={Accordion} />
          <Route path="/ui/badges" component={Badges} />
          <Route path="/ui/list" component={List} />
          <Route path="/ui/popover-tooltip" component={PopoverTooltip} />
          <Route path="/ui/snackbar" component={Snackbar} />
          <Route path="/ui/typography" component={Typography} />
          <Route path="/ui/tabs" component={Tabs} />
          <Route path="/ui/card-papper" component={Cards} />
          <Route path="/ui/image-grid" component={ImageGrid} />
          <Route path="/ui/progress" component={Progress} />
          <Route path="/ui/dialog-modal" component={DialogModal} />
          <Route path="/ui/steppers" component={Steppers} />
          <Route path="/ui/paginations" component={Paginations} />
          <Route path="/ui/drawer-menu" component={DrawerMenu} />
          <Route path="/ui/breadcrumbs" component={Breadcrumbs} />
          <Route path="/ui/icons" component={Icons} />
          <Route path="/ui/ionicons" component={IonIcons} />
          <Route path="/ui/slider-carousel" component={SliderCarousel} />
          <Route path="/ui/tags" component={Tags} />
          <Route path="/ui/dividers" component={Dividers} />
          {/* Chart */}
          <Route exact path="/charts" component={Parent} />
          <Route path="/charts/line-charts" component={LineCharts} />
          <Route path="/charts/bar-charts" component={BarCharts} />
          <Route path="/charts/area-charts" component={AreaCharts} />
          <Route path="/charts/pie-charts" component={PieCharts} />
          <Route path="/charts/radar-charts" component={RadarCharts} />
          <Route path="/charts/scatter-charts" component={ScatterCharts} />
          <Route path="/charts/compossed-chart" component={CompossedCharts} />
          <Route
            path="/charts/doughnut-pie-charts"
            component={DoughnutCharts}
          />
          <Route path="/charts/bar-direction-charts" component={BarDirection} />
          <Route
            path="/charts/line-scatter-charts"
            component={LineScatterChart}
          />
          <Route
            path="/charts/area-filled-charts"
            component={AreaFilledChart}
          />
          <Route
            path="/charts/radar-polar-chart"
            component={RadarPolarCharts}
          />
          {/* Sample Apps */}
          <Route path="/pages/contact" component={Contact} />
          <Route path="/pages/chat" component={Chat} />
          <Route path="/pages/email" component={Email} />
          <Route path="/pages/timeline" component={Timeline} />
          <Route path="/pages/ecommerce" component={Ecommerce} />
          <Route path="/pages/product-detail" component={ProductPage} />
          <Route path="/pages/checkout" component={CheckoutPage} />
          <Route path="/pages/calendar" component={Calendar} />
          <Route path="/pages/invoice" component={Invoice} />
          {/* Pages */}
          <Route exact path="/pages" component={Parent} />
          <Route path="/pages/user-profile" component={Profile} />
          <Route path="/pages/blank-page" component={BlankPage} />
          <Route path="/pages/photo-gallery" component={Photos} />
          <Route path="/pages/pricing" component={Pricing} />
          <Route path="/pages/not-found" component={NotFound} />
          <Route path="/pages/error" component={Error} />
          <Route path="/pages/settings" component={Settings} />
          <Route path="/pages/help-support" component={HelpSupport} />
          {/* Map */}
          <Route exact path="/maps" component={Parent} />
          <Route path="/maps/map-marker" component={MapMarker} />
          <Route path="/maps/map-direction" component={MapDirection} />
          <Route path="/maps/map-searchbox" component={SearchMap} />
          <Route path="/maps/map-traffic" component={TrafficIndicator} />
          <Route path="/maps/street-view" component={StreetViewMap} />
          {/* User Management */}
          <Route path="/settings/user-management/user-management/users" component={UsersSetting} />
          <Route path="/settings/user-management/user-management/groups" component={GroupsSetting} />
          <Route path="/settings/user-management/user-management/access-requests" component={AccessRequestsSetting} />
          <Route path="/settings/user-management/site-settings/site-access" component={SiteAccessSetting} />
          <Route path="/settings/user-management/site-settings/product-access" component={ProductAccessSetting} />
          <Route path="/settings/user-management/site-settings/g-suite" component={GSuiteAccessSetting} />
          <Route path="/settings/user-management/site-settings/emoji" component={EmojiAccessSetting} />
          <Route path="/settings/user-management/site-settings/connected-apps" component={ConnectedAppsAccessSetting} />
          <Route path="/settings/user-management/site-settings/security" component={SecurityAccessSetting} />
          <Route path="/settings/user-management/site-settings/storage" component={StorageAccessSetting} />
          <Route path="/settings/user-management/subscriptions/billing" component={BillingAccessSetting} />
          <Route path="/settings/user-management/subscriptions/manage-subscriptions" component={ManageSubscriptionsAccessSetting} />
          <Route path="/settings/user-management/subscriptions/discover-applications" component={DiscoverApplicationsAccessSetting} />
          <Route path="/settings/user-management/app-settings/karya" component={KaryaAccessSetting} />
          <Route path="/settings/user-management/admin-experience/give-feedback" component={GiveFeedbackAccessSetting} />
          {/* Billing */}
          <Route path="/settings/billing/billing/bill-estimate" component={BillEstimateSetting} />
          <Route path="/settings/billing/billing/billing-details" component={BillDetailsSetting} />
          <Route path="/settings/billing/billing/billing-history" component={BillHistorySetting} />
          <Route path="/settings/billing/billing/overview" component={OverviewSetting} />
          <Route path="/settings/billing/billing/overview" component={ManageSubscriptionsSetting} />
          {/* System */}
          <Route path="/settings/system/general-configuration" component={GeneralConfigurationSetting} />
          <Route path="/settings/system/troubleshooting/audit-log" component={AuditLogSetting} />
          <Route path="/settings/system/security/project-roles" component={ProjectRolesSetting} />
          <Route path="/settings/system/security/global-permissions" component={GlobalPermissionSetting} />
          <Route path="/settings/system/security/issue-collectors" component={IssueCollectorsSetting} />
          <Route path="/settings/system/user-interface/default-user-preferences" component={DefaultUserPreferencesSetting} />
          <Route path="/settings/system/user-interface/system-dashboard" component={SystemDashboardSetting} />
          <Route path="/settings/system/user-interface/look-and-feel" component={LookAndFeelSetting} />
          <Route path="/settings/system/import-export/backup-manager" component={BackupManagerSetting} />
          <Route path="/settings/system/import-export/external-system-import" component={ExternalSystemImportSetting} />
          <Route path="/settings/system/import-export/restore-system" component={RestoreSystemSetting} />
          <Route path="/settings/system/mail/global-mail-settings" component={GlobalMailSetting} />
          <Route path="/settings/system/mail/outgoing-mail" component={OutgoingMailSetting} />
          <Route path="/settings/system/mail/send-email" component={SendEmailSetting} />
          <Route path="/settings/system/admin-helper/permission-helper" component={PermissionHelperSetting} />
          <Route path="/settings/system/admin-helper/notification-helper" component={NotificationHelperSetting} />
          <Route path="/settings/system/shared-items/shared-filters" component={SharedFiltersSetting} />
          <Route path="/settings/system/shared-items/shared-dashboard" component={SharedDashboardSetting} />
          <Route path="/settings/system/automation/automation-rules" component={AutomationRulesSetting} />
          <Route path="/settings/system/advanced/attachments" component={AttachmentsSetting} />
          <Route path="/settings/system/advanced/events" component={EventsSetting} />
          <Route path="/settings/system/advanced/web-hooks" component={WebhooksSetting} />
          <Route path="/settings/system/advanced/services" component={ServicesSetting} />
          <Route path="/settings/system/advanced/lexo-rank-management" component={LexorankManagementSetting} />
          {/* Product */}
          <Route path="/settings/product/products/product-access" component={ProductsAccessSetting} />
          <Route path="/settings/product/karya-software/karya-software-configuration" component={KaryaSoftwareConfigurationSetting} />
          <Route path="/settings/product/integrations/application-links" component={ApplicationLinksSetting} />
          <Route path="/settings/product/integrations/dvcs-accounts" component={DVCSAccountsSetting} />
          {/* Projects */}
          <Route path="/settings/projects/projects/projects" component={ProjectsSetting} />
          <Route path="/settings/projects/projects/project-categories" component={ProjectCategoriesSetting} />
          {/* Issues */}
          <Route path="/settings/issues/issue-types/issue-types" component={IssueTypesSetting} />
          <Route path="/settings/issues/issue-types/issue-type-shemas" component={IssueTypeSchemasSetting} />
          <Route path="/settings/issues/issue-types/sub-tasks" component={SubTasksSetting} />
          <Route path="/settings/issues/workflows/workflows" component={WorkflowsSetting} />
          <Route path="/settings/issues/workflows/workflows-schemes" component={WorkflowsSchemesSetting} />
          <Route path="/settings/issues/screens/screens" component={ScreensSetting} />
          <Route path="/settings/issues/screens/screens-schemes" component={ScreenSchemesSetting} />
          <Route path="/settings/issues/screens/issue-type-screen-scheme" component={IssueTypeScreenSchemeSetting} />
          <Route path="/settings/issues/fields/custom-fields" component={CustomFieldsSetting} />
          <Route path="/settings/issues/fields/field-configurations" component={FieldConfigurationsSetting} />
          <Route path="/settings/issues/fields/field-configuration-schemes" component={FieldConfigurationSchemesSetting} />
          <Route path="/settings/issues/issue-features/time-tracking" component={TimeTrackingSetting} />
          <Route path="/settings/issues/issue-features/issue-linking" component={IssueLinkingSetting} />
          <Route path="/settings/issues/issue-attributes/statuses" component={StatutesSetting} />
          <Route path="/settings/issues/issue-attributes/resolutions" component={ResolutionsSetting} />
          <Route path="/settings/issues/issue-attributes/priorities" component={PrioritiesSetting} />
          <Route path="/settings/issues/issue-attributes/issue-security-schemes" component={IssueSecuritySchemesSetting} />
          <Route path="/settings/issuesissue-attributes/notification-schemes" component={NotificationSchemesSetting} />
          <Route path="/settings/issues/issue-attributes/permission-schemes" component={PermissionSchemesSetting} />
          {/* App */}
          <Route path="/settings/app/karya-market/find-new-apps" component={FindNewAppsSetting} />
          <Route path="/settings/app/karya-market/manage-apps" component={ManageAppsSetting} />
          <Route path="/settings/app/karya-market/oauth-credentials" component={OAuthCredentialsSetting} />
          {/* Account Settings */}
          <Route path="/settings/tool-settings/profile-and-visibility" component={ProfileAndVisibilitySetting} />
          <Route path="/settings/tool-settings/email" component={EmailSetting} />
          <Route path="/settings/tool-settings/security" component={SecuritySetting} />
          <Route path="/settings/tool-settings/account-preferences" component={AccountPreferencesSetting} />
          <Route path="/settings/tool-settings/connected-apps" component={ConnectedAppsSetting} />
          <Route path="/settings/tool-settings/products" component={ProductsSetting} />
          {/* Default */}
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Application.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Application;
