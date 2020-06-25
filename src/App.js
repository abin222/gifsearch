import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import HeadInterface from "./Components/HeadInterface";
import GifList from "./Components/GifList"
import Results from './Components/TenorResults';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gify: [],
      tenor:[],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "goodmorning") => {
    let one =`https://api.tenor.com/v1/search?q=${query}&key=N5LNF89MRDPG&limit=10`;
    let two=`https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=dc6zaTOxFJmzC`;
  
   const requestOne = axios.get(one);
const requestTwo = axios.get(two);
    axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
    
      this.setState({
        tenor: responseOne,
        gify:responseTwo,
        loading: false
      });
    })
      )
    .catch(errors => {
      console.log("Error fetching and parsing data", errors);
    });
  };

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <HeadInterface />
            <SearchForm onSearch={this.performSearch} />
          
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              
//             <GifList data={this.state.gify} />
            <Results gifData={this.state.tenor} />
            </div>
          )}

        </div>
        
      </div>
    );
  }
}
