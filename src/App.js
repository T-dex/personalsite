import React, { Component } from 'react';
import Footer from './components/footerLinks2/socialLinks.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <div className="Logo"><h1> Dex Mills Designs</h1><p>test</p></div> </div>
        <p className="App-intro">
          Lorum fucking ipsom
        </p>
      <div className="app-footer"> <Footer/><p> The Dinosaur Engineering Expierence 2017</p></div>
      </div>
    );
  }
}

export default App;
