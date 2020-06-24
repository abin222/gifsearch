import React from 'react';
// import Fav from './favourite'
const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
    {/* <Fav/> */}

  </li>
);

export default Gif;