import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      picture: ''
    }
  }


  // componentDidMount = () => {
  //   axios.get('https://dog.ceo/api/breed/Affenpinscher/images/random')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ picture: res.data });
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  handleSubmit = () => {
    axios.get('https://dog.ceo/api/breed/Affenpinscher/images/random')
      .then(res => {
        console.log(res);
        this.setState({ picture: res.data });
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>

        <button onClick={this.handleSubmit} />
        <img src={this.state.picture.message} alt="dog picture" />

      </div>
    );
  }
}

export default App;
