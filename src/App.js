import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Text2 from './Text2.jsx';

class Text extends Component{
  // text is the child component
  constructor(props){
    super(props)
    this.color = props.color
  // //   // props is an object.  color and text are keys being added to the props object.
    this.text = props.text
    
  }
  render(){
    return (
      <div>
        <h1 style={{color: this.props.color}}> {this.props.words} </h1>
      </div>
    )
  }
}

class App extends Component {
  // app is the parent component
  // try looking at styled components for fancier stuff(see Colin B)
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit code in src/App.js and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header>
        <p>
          <Text color= "white" words= "Lea"></Text>
        </p>

      </div>
      // <div>
    
        /* <Text2></Text2>
        <Text2></Text2> */
      // </div>
      
    );
  }
}

export default App;
