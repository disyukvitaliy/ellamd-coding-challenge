import React, { Component } from 'react';
import Router from './router'
import { BrowserRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Api from "./services/api";

import './App.css';

class App extends Component {
	componentDidMount () {
		Api.get('/patients').then(({data}) => this.props.patientStore.setList(data.patients))
	}

  render() {
    return <BrowserRouter>
      <main className="container-fluid">
				<Router/>
      </main>
    </BrowserRouter>
  }
}

export default inject('patientStore')(observer(App));
