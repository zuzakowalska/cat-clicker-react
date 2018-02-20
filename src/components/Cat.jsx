import React, { Component } from 'react';

class Cat extends Component {
  render() {
    return (
      <div className="card">
        <header>
          <h2>{ this.props.name }</h2>
          <button className="btn btn-primary" onClick={this.props.onEdit}>Edit</button>
        </header>
        <img src={ this.props.img } alt={ this.props.name } onClick={this.props.onClick}/>
        <h5>
          Click Count: { this.props.clicks }</h5>
      </div> 
    )
  }
} 

export default Cat;