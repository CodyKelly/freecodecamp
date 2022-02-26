import logo from './logo.svg';
import './App.css';
import { QuoteBox } from './features/quotebox/QuoteBox';
import React from 'react';

const palette = ["#e9d758","#afa2ff","#f75c03","#d90368","#70e4ef"];

function getRandomColor() {
  return palette[Math.floor(Math.random() * palette.length)];
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: getRandomColor(),
    }

    this.handleClick = this.handleClick.bind();
  }
  
  handleClick() {
    const color = getRandomColor();
    this.setState({color: color});
    document.body.style = "background-color: " + color + ";";
  }

  render() {
    return (
      <div className='App'>
        <QuoteBox clickHandler={this.handleClick} color={this.state.color}/>
      </div>
    );
  }
}
