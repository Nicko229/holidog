import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="banner-main">
        <strong><p className="big">DOGIFY</p></strong>
        <p className="small">THE BREED EXPERTS</p>
      </div>
    )
  }
}

export default Banner;