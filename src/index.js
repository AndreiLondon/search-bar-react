// console.log("I am running");
import React, { Component } from 'react'
// Document Object Model
import ReactDOM from 'react-dom'
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Search Bar</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>

    );
  }
}

//Call method (I have to tell 2 things. What component do I want to render and where in the html I want to render)
ReactDOM.render(<App />, document.getElementById('root'));