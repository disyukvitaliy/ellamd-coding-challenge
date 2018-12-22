import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Panel } from 'react-bootstrap';
import { inject, observer } from "mobx-react";


class PatientList extends Component {
	render() {
		return <div>
			<div className="row">
				<Button className="pull-right" bsStyle="success">New prescription</Button>
			</div>
			<br/>
			<div className="row">
				{
					this.props.patientStore.list.map(patient => <Panel key={patient.id}>
						<Panel.Heading>
							<Link to={'/patients/' + patient.id}>
								{patient.name}
							</Link>
						</Panel.Heading>
						<Panel.Body>
							{patient.prescriptions.length} prescriptions
						</Panel.Body>
					</Panel>)
				}
			</div>
		</div>
	}
}

export default inject('patientStore')(observer(PatientList));