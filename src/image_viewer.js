import big from '../assets/big.jpg';
import small from '../assets/small.jpg'; // base 64 string since it was small

import '../styles/image_viewer.css'; // import css

// function to envoke this module
export default () => {
  // create a DOM image using the base 64 data for a small image
  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);

  // create an image tag using the compiled image
  const bigImage = document.createElement('img');
  bigImage.src = big;

  document.body.appendChild(bigImage);
};
