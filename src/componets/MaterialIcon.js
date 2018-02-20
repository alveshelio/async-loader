import React from 'react';
import { asyncComponent } from 'react-async-component';
import { ListItem } from 'material-ui/List';

const MaterialIcon = ({ item }) => {
  let Icon = null;
  if (item.path) {
    Icon = asyncComponent({
      resolve: () => import('./CustomIcon'),
    })
  } else {
    let resolved = require(`material-ui-icons/${item.icon}`).default;
    if (!resolved) {
      throw Error(`Could not find material-ui-icons/${item.icon}`)
    }
    Icon = asyncComponent({
      resolve: () => import(`material-ui-icons/${item.icon}`),
    })
  }
  return <ListItem>{React.createElement(Icon)}</ListItem>
};

export default MaterialIcon;
