import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import './App.scss';
import authClient from './Auth'

import {withRouter, Route} from 'react-router-dom';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

class App extends React.Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      try {
        await authClient.handleAuthentication();
      } catch (err) {
        // ignore
      }
      this.props.history.replace('/');
    } else {
      try {
        await authClient.silentAuth();
        this.forceUpdate();
      } catch (err) {
        // Ignore
      }
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <Fragment>
        <CssBaseline />
        <AppHeader />
        <main className={classes.main}>
          <Route exact path="/" component={Home}/>
        </main>
      </Fragment>
    );
  }
};

export default withRouter(withStyles(styles)(App));
