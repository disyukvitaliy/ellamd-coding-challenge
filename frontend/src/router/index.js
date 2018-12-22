import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import PatientList from '../views/Patient/List'
import Patient from '../views/Patient/Show'
import NotFound from '../views/NotFound'

export default class Index extends Component {
  render() {
    return <Switch>
      <Route exact path="/" component={PatientList} />
      <Route path="/patients/:id" component={Patient} />
			<Route component={NotFound}/>
    </Switch>
  }
}
