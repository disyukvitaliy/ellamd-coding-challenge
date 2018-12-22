import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Panel } from 'react-bootstrap';
import { inject, observer } from "mobx-react";

class Patient extends Component {
	get patient () {
		let id = parseInt(this.props.match.params.id, 10)
		return this.props.patientStore.list.find(p => p.id === id)
	}

	render () {
		if (!this.patient) return null

		return <div>
			<div className="row">
				<Button bsStyle="link">
					<Link to="/">Back to list</Link>
				</Button>
				<Link to={`/patients/${this.patient.id}/prescriptions/new`}>
					<Button className="pull-right" bsStyle="success">
						Add prescription
					</Button>
				</Link>
			</div>
			<h2>{this.patient.name}'s Prescriptions</h2>
			<div className="row">
				{this.patient.prescriptions.map(prescription => <Panel key={prescription.id}>
					<Panel.Body>
						<Link to={`/patients/${this.patient.id}/prescriptions/${prescription.id}`}>Prescription #{prescription.id}</Link>
						<a href={`${window.location.origin}/web/prescriptions/${prescription.id}.pdf`} className="pull-right" target="_blank">PDF</a>
					</Panel.Body>
				</Panel>)}
			</div>
		</div>
	}
}

export default inject('patientStore')(observer(Patient));