import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";

import PatientList from '../views/Patient/List'
import PatientNew from '../views/Patient/New'
import Patient from '../views/Patient/Show'
import PrescriptionNew from '../views/Prescription/New'
import Prescription from '../views/Prescription/Show'
import NotFound from '../views/NotFound'

export default class Index extends Component {
  render() {
    return <Switch>
			<Route path="/patients/:id/prescriptions/new" component={PrescriptionNew} />
			<Route path="/patients/:patientId/prescriptions/:id" component={Prescription} />
			<Route exact path="/" component={PatientList} />
      <Route path="/patients/new" component={PatientNew} />
      <Route path="/patients/:id" component={Patient} />
			<Route component={NotFound}/>
    </Switch>
  }
}
