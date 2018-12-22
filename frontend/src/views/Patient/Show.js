import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Panel } from 'react-bootstrap';
import { inject, observer } from "mobx-react";

class Patient extends Component {
	render () {
		let patient = this.props.patientStore.list.find(p => p.id === parseInt(this.props.match.params.id, 10))
		if (!patient) return null

		return <div>
			<div className="row">
				<Button bsStyle="link">
					<Link to="/">Back to list</Link>
				</Button>
				<Button className="pull-right" bsStyle="success">
					Add prescription
				</Button>
			</div>
			<h2>{patient.name}'s Prescriptions</h2>
			<div className="row">
				{patient.prescriptions.map(prescription => <Panel key={prescription.id}>
					<Panel.Body>
						<Link to="/">Prescription #{prescription.id}</Link>
						<a href={`${window.location.origin}/web/prescriptions/${prescription.id}.pdf`} className="pull-right" target="_blank">PDF</a>
					</Panel.Body>
				</Panel>)}
			</div>
		</div>
	}
}

export default inject('patientStore')(observer(Patient));