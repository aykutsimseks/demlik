import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MaterialTheme from './MuiTheme';

// build the router
const router = (
	<MuiThemeProvider muiTheme={getMuiTheme(MaterialTheme)}>
	  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
	    <Route path="/" component={App}>
	      <IndexRoute component={Home}/>
	      <Route path="*" component={NotFound}/>
	    </Route>
	  </Router>
	</MuiThemeProvider>
);

// export
export { router };
