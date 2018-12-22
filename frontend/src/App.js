import React, { Component } from 'react';
import Router from './router'
import { BrowserRouter } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return <BrowserRouter>
      <main className="container-fluid">
				<Router/>
      </main>
    </BrowserRouter>
  }
}

export default App;
