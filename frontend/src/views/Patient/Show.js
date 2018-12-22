import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Panel } from 'react-bootstrap';

export default class Patient extends Component {
	state = {
		patient: {
			name: 'John'
		}
	};

	render() {
		return <div>
			<div className="row">
				<Button bsStyle="link">
					<Link to="/">Back to list</Link>
				</Button>
				<Button className="pull-right" bsStyle="success">
					Add prescription
				</Button>
			</div>
			<h2>{this.state.patient.name}'s Prescriptions</h2>
			<div className="row">
				<Panel>
					<Panel.Body>
						<Link to="/">Prescription name</Link>
						<Link className="pull-right" to="/">PDF</Link>
					</Panel.Body>
				</Panel>
				<Panel>
					<Panel.Body>
						<Link to="/">Prescription name</Link>
						<Link className="pull-right" to="/">PDF</Link>
					</Panel.Body>
				</Panel>
			</div>
		</div>
	}
}