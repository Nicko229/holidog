import React, { Component } from 'react';
import axios from 'axios';
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
      <div>
        <form onSubmit={this.handleSubmit}>

          <img src={this.state.picture.message} alt="dog picture" />
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
