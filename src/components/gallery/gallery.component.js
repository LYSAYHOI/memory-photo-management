import React from 'react';
import { Grid } from '@material-ui/core';
import Photograph from '../common/photograph/photograph.component';
import MyPhoto from '../../assets/photos/IMG_20190901_175951.jpg';
import MyPhoto2 from '../../assets/photos/IMG_20190901_184211.jpg';
import styles from './gallery.module.css';

function Gallery(props) {
  function random() {
    return Math.random() * 2 + 1;
  }
  return (
    <Photograph src={random() === 1 ? MyPhoto2 : MyPhoto2} />
    // <Grid container className={styles.root}>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto2 : MyPhoto} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    //   <Grid item md={3}>
    //     <Photograph src={random() === 1 ? MyPhoto : MyPhoto2} />
    //   </Grid>
    // </Grid>
  );
}

export default Gallery;
