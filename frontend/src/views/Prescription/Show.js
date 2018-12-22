import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Panel } from 'react-bootstrap';
import { inject, observer } from "mobx-react";

class Prescription extends Component {
	get patient () {
		let id = parseInt(this.props.match.params.patientId, 10)
		return this.props.patientStore.list.find(p => p.id === id)
	}

	get prescription () {
		let id = parseInt(this.props.match.params.id, 10)
		return this.patient.prescriptions.find(p => p.id === id)
	}

	render () {
		if (!this.patient) return null

		return <div>
			<div className="row">
				<Button bsStyle="link">
					<Link to={'/patients/' + this.patient.id}>Back to prescriptions</Link>
				</Button>

				<a href={`${window.location.origin}/web/prescriptions/${this.prescription.id}.pdf`} className="pull-right" target="_blank">
					<Button bsStyle="success">Download PDF</Button>
				</a>
			</div>
			<h2>Prescription #{this.prescription.id}</h2>
			<div><b>Name</b></div>
			<div>{this.patient.name}</div>
			<div><b>Address</b></div>
			<div>{this.patient.address}</div>
			<div><b>Date of Birth</b></div>
			<div>{this.patient.birthday}</div>
			<hr/>
			{this.prescription.ingredient_relations.map(ingredient_relation => <Panel key={ingredient_relation.ingredient.id}>
				<Panel.Body>
					<div className="pull-right">{ingredient_relation.percentage}</div>
					<div>{ingredient_relation.ingredient.name}</div>
					<div>{ingredient_relation.ingredient.description}</div>
				</Panel.Body>
			</Panel>)}
		</div>
	}
}

export default inject('patientStore')(observer(Prescription));