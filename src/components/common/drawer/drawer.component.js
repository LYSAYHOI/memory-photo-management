import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import styles from './drawer.module.css';

class Sidebar extends React.Component {
  render() {
    const { open, onClose } = this.props;
    return (
      <div>
        <Drawer open={open} onClose={onClose}>
          <div className={styles.root}>
            <List>
              <ListItem button>
                <ListItemText>Link 1</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>Link 2</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>Link 3</ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>Link 4</ListItemText>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
