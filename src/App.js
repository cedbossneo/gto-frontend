import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
              <Header/>
              <Content/>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
