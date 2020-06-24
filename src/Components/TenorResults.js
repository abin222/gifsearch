import React, { Component } from 'react';
import Resultsrow from './Resultsrow';

class Results extends Component{
    render(){
      let gifsData = this.props.gifData;
        return(
          <ul className="gif-list">
            {
              gifsData.map((res, i) => {
                return res.media.map((item, j) => {
                  return <Resultsrow key={j}
                      url={item.gif.url}
                      title={res.itemurl}
                      preview={item.gif.preview}
                   />;
                })
              })
            }
          </ul>
        );
    }
  }

  export default Results;