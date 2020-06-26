import React, { Component } from 'react';
import Fav from './favourite'
class Resultsrow extends Component{
    render(){
      console.log(this.props);
      return(
        <li className="gif-wrap">
           <img src={this.props.url} alt=""/>
            <Fav/>
        </li>
      );
    }
  }

  export default Resultsrow;
