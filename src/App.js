import React, { Component } from 'react';
import List from 'material-ui/List';

import logo from './logo.svg';
import './App.css';
import MaterialIcon from './componets/MaterialIcon';

class App extends Component {
  render() {
    const MenuIcons = [
      {
        name: 'Update',
        icon: 'Update',
      },
      {
        name: 'Add a photo',
        icon: 'AddAPhoto',
      },
      {
        name: 'Collections',
        icon: 'Collections',
      },
      {
        name: 'Collections',
        icon: 'Collections',
        path: './components/CustomIcon'
      },
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List>
          {MenuIcons.map(item => <MaterialIcon item={item}/>)}
        </List>
      </div>
    );
  }
}

export default App;
