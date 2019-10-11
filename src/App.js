import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import Menu from './components/menu/menu.component';
import Gallery from './components/gallery/gallery.component';

library.add(faBars);
function App() {
  return (
    <div className="">
      <Menu />
      <Gallery />
    </div>
  );
}

export default App;
