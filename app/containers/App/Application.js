import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
  PersonalDashboard,
  CryptoDashboard,
  Infographics,
  MiniApps,
  Analytics,
  InfoUpdates,
  Status,
  Parent,
  AppLayout,
  Grid,
  SimpleTable,
  AdvancedTable,
  TablePlayground,
  TreeTable,
  EditableCell,
  ReduxForm,
  DateTimePicker,
  CheckboxRadio,
  Switches,
  Selectbox,
  Rating,
  SliderRange,
  Buttons,
  DialButton,
  ToggleButton,
  Textbox,
  Autocomplete,
  Upload,
  TextEditor,
  Avatars,
  Accordion,
  Badges,
  List,
  PopoverTooltip,
  Snackbar,
  Typography,
  Tabs,
  Cards,
  ImageGrid,
  Progress,
  DialogModal,
  Steppers,
  Paginations,
  DrawerMenu,
  Breadcrumbs,
  Icons,
  IonIcons,
  SliderCarousel,
  Tags,
  Dividers,
  LineCharts,
  BarCharts,
  AreaCharts,
  PieCharts,
  RadarCharts,
  ScatterCharts,
  CompossedCharts,
  DoughnutCharts,
  BarDirection,
  LineScatterChart,
  AreaFilledChart,
  RadarPolarCharts,
  Contact,
  Chat,
  Email,
  TaskBoard,
  Ecommerce,
  Timeline,
  Calendar,
  ProductPage,
  Invoice,
  Profile,
  BlankPage,
  Photos,
  Pricing,
  CheckoutPage,
  Error,
  Settings,
  HelpSupport,
  MapMarker,
  MapDirection,
  SearchMap,
  TrafficIndicator,
  StreetViewMap,
  NotFound,
  Configurations,
  ManageTeam,
} from '../pageListAsync';

class Application extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          {/* My work */}
          <Route exact path="/" component={PersonalDashboard} />
          <Route path="/mywork/assigned-task" component={PersonalDashboard} />
          <Route path="/mywork/starred" component={CryptoDashboard} />
          {/* Projects */}
          <Route path="/projects/add-project" component={Infographics} />
          <Route path="/projects/project-board" component={MiniApps} />
          <Route path="/projects/backlog" component={Analytics} />
          <Route path="/projects/project-settings" component={InfoUpdates} />
          <Route path="/projects/project-access" component={Status} />
          <Route exact path="/projects/sprint-board" component={Parent} />
          <Route path="/projects/roadmap" component={Grid} />
          <Route path="/projects/release" component={AppLayout} />
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
          <Route path="/pages/taskboard" component={TaskBoard} />
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
