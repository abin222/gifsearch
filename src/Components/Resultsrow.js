import React, { Component } from 'react';
// import Fav from './favourite'
class Resultsrow extends Component{
    render(){
      console.log(this.props);
      return(
        <li className="gif-wrap">
            <img src={this.props.url} />
            <span className="title">{this.props.title}</span>
            <span className="info">Click to copy emoji</span>
            {/* <Fav/> */}
        </li>
      );
    }
  }

  export default Resultsrow;