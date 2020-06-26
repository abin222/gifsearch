import React, { Component } from 'react';
import axios from 'axios';
// import {IoIosHeart,IoIosHeartEmpty } from 'react-icons'
const Fav = props => { 
   
    
  function apiSend() {
    axios.post(
'./api/api.php',{
  data: {
    id: this.props.id,
    url: this.props.url,
    title: this.props.title,
  size: this.props.size
  }
})
  }
    
      return(
    <div>
       <button onClick={() => apiSend()}>Favourite</button>
    </div>
      );
    }

  export default Fav;
