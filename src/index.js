import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from 'react-hot-loader';
import { store } from "./store.js";
import { router } from "./router.js";

const rootEl = document.getElementById('app');

// render the main component
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./router.js', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./router.js').store;
    store.replaceReducer(require('./store.js').store);
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      rootEl);
  });
}