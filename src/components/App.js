import React from "react";
import injectTapEventPlugin from 'react-tap-event-plugin';
import "../stylesheets/main.scss";

injectTapEventPlugin();

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
