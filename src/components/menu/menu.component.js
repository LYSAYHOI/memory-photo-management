import React from 'react';
import Topbar from '../common/topbar/top-bar.component';
import Sidebar from '../common/drawer/drawer.component';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSidebar: false,
    };
  }

  toggleSidebar = () => {
    const { isOpenSidebar } = this.state;
    this.setState(prevState => ({
      ...prevState,
      isOpenSidebar: !isOpenSidebar,
    }));
  };

  render() {
    const { isOpenSidebar } = this.state;
    return (
      <div>
        <Topbar onToggleSidebar={this.toggleSidebar} />
        <Sidebar open={isOpenSidebar} onClose={this.toggleSidebar} />
      </div>
    );
  }
}

export default Menu;
