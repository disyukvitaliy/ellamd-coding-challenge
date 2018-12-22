import React, { Component } from 'react';

import { Route } from "react-router-dom";

import PatientList from '../views/Patient/List'
import Patient from '../views/Patient/Show'

export default class Index extends Component {
  render() {
    return <div>
      <Route exact path="/" component={PatientList} />
      <Route path="/patients/:id" component={Patient} />
    </div>
  }
}
