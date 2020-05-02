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
  CreateTask,
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
  Configurations,
  Contact,
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
  StarredTasks,
} from "../pageListAsync";

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          {/* My work */}
          <Route exact path="/" component={PersonalDashboard} />
          <Route path="/mywork/assigned-task" component={AssignedToMe} />
          <Route path="/mywork/starred" component={StarredTasks} />
          <Route path="/mywork/starred" component={CryptoDashboard} />
          {/* My work */}
          <Route path="/createTask" component={CreateTask} />
          {/* Projects */}
          <Route path="/projects/add-project" component={AddProject} />
          <Route path="/projects/project-board" component={ProjectHome} />
          <Route path="/projects/backlog" component={Analytics} />
          <Route path="/projects/project-settings" component={InfoUpdates} />
          <Route path="/projects/project-access" component={Status} />
          <Route exact path="/projects/sprint-board" component={TaskBoard} />
          <Route path="/projects/roadmap" component={Grid} />
          <Route path="/projects/release" component={AppLayout} />
          {/* Dashboards */}
          <Route
            path="/dashboards/view-all-dashboards"
            component={AssignedToMe}
          />
          {/* Account */}
          <Route path="/account/account-settings" component={StarredTasks} />
          <Route path="/account/profile" component={AddProject} />
          <Route path="/account/personal-settings" component={StarredTasks} />
          <Route path="/account/feedback" component={Configurations} />

          {/* Settings */}
          <Route path="/settings/system" component={Configurations} />
          <Route path="/settings/product" component={Configurations} />
          <Route path="/settings/projects" component={Configurations} />
          <Route path="/settings/issues" component={Configurations} />
          <Route path="/settings/app" component={Configurations} />
          <Route
            exact
            path="/settings/tool-settings"
            component={Configurations}
          />
          <Route
            path="/settings/personal-tool-settings"
            component={Configurations}
          />
          <Route path="/settings/user-management" component={Configurations} />
          <Route path="/settings/billing" component={Configurations} />
          {/* Filters */}
          <Route path="/filters/view-all-filters" component={Configurations} />
          <Route
            path="/filters/advanced-search-issues"
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
          <Route path="/create/create-task" component={ReduxForm} />
          <Route path="/configurations/edit" component={Configurations} />
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
