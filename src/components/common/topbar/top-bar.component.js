import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core';
import styles from './top-bar.module.css';

class Topbar extends React.Component {
  render() {
    const { onToggleSidebar } = this.props;
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={onToggleSidebar}>
              <FontAwesomeIcon icon="bars" color="#ffffff" />
            </IconButton>
            <Typography variant="h6">Photos management</Typography>
            <Avatar className={styles.avatar}>
              <IconButton>H</IconButton>
            </Avatar>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Topbar;
