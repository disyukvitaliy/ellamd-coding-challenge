import React, { Component } from 'react';
import Router from './router'
import { BrowserRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Api from "./services/api";

import './App.css';

class App extends Component {
	componentDidMount () {
		Api.get('/patients').then(({data}) => this.props.patientStore.setList(data.patients))
		Api.get('/ingredients').then(({data}) => this.props.ingredientStore.setList(data.ingredients))
		Api.get('/formulations').then(({data}) => this.props.formulationStore.setList(data.formulations))
	}

  render() {
    return <BrowserRouter>
      <main className="container-fluid">
				<Router/>
      </main>
    </BrowserRouter>
  }
}

export default inject('patientStore', 'ingredientStore', 'formulationStore')(observer(App));
