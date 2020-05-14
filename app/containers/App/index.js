import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
import AppNotification from '../../src/components/app-notification';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  render() {
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              <Route path='/' render={(props) => <Application {...props} changeMode={changeMode} />} />
              <Route component={Auth} />
              <Route component={NotFound} />
            </Switch>
          )}
        </AppContext.Consumer>
        <AppNotification />
      </ThemeWrapper>
    );
  }
}

export default App;
