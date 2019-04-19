import React, { Component } from 'react';
import axios from 'axios';
import Banner from './banner';
import placeholder from './placeholder.jpg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: '',
      breed: ''
    }
  }

  handleChange = (e) => {
    this.setState({ breed: e.target.value })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
      .then(res => {
        console.log(res);
        this.setState({ picture: res.data });
        console.log("picture: ", this.state.picture)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="main-div">
        <Banner />


        <form onSubmit={this.handleSubmit} className="dog-form">
          <div className="search-div">
            <h3>Type in your favourite dog breed to see pictures of your future pets</h3>
            <input type="text" onChange={this.handleChange} />
            <br />
            <input type="submit" value="Submit" />
          </div>
          <div className="image-div">
            {console.log(this.state.picture)}
            <img className="dog-image" src={
              this.state.picture === '' ? placeholder : this.state.picture.message
            } />
          </div>

        </form>
      </div>
    );
  }
}

export default App;
