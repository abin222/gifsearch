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
    let finalURL = `https://api.tenor.com/v1/search?q=${query}&key=N5LNF89MRDPG&limit=10`;
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
         this.setState({tenor: data.results});
      })
     .catch((error) => console.log('There was a problem in fetching data'));
    axios
    .get(
      `https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=dc6zaTOxFJmzC`
    )
    .then(response => {
      this.setState({
        gify: response.data.data,
        loading: false
      });
    })
    .catch(error => {
      console.log("Error fetching and parsing data", error);
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
              
            <GifList data={this.state.gify} />
            <Results gifData={this.state.tenor} />
            </div>
          )}

        </div>
        
      </div>
    );
  }
}
