import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Box } from '@material-ui/core';
import Photograph from '../common/photograph/photograph.component';
import styles from './gallery.module.css';
import { photoList } from './gallery.photo';

function Gallery(props) {
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [col3, setCol3] = useState([]);
  const [col4, setCol4] = useState([]);

  useEffect(() => {
    // const chunkArr = _.chunk(
    //   photoList, 2
    // );
    let index = 0;
    const chunkArr = [];
    const photolistLength = parseInt(photoList.length / 4, 10);
    while (photoList[index]) {
      const photoListPiece = photoList.slice(
        index,
        index + photolistLength,
      );
      chunkArr.push(photoListPiece);
      index += photolistLength;
    }
    console.log(chunkArr);
    setCol1(chunkArr[0]);
    setCol2(chunkArr[1]);
    setCol3(chunkArr[2]);
    setCol4(chunkArr[3]);
  }, []);

  function displayPhoto(displayPhotoList) {
    return (
      <Box className={styles.flexColumn}>
        {displayPhotoList.map(element => (
          <Photograph src={element} />
        ))}
      </Box>
    );
  }

  return (
    <Box component="div" className={styles.flexContainer} spacing={3}>
      {displayPhoto(col1)}
      {displayPhoto(col2)}
      {displayPhoto(col3)}
      {displayPhoto(col4)}
    </Box>
  );
}

export default Gallery;
