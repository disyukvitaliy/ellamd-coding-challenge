import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Panel } from 'react-bootstrap';
import Api from '../../services/api'


export default class PatientList extends Component {
	state = {
		list: []
	};

	componentDidMount () {
		Api.get('/patients')
			.then(response => this.setState({list: response.data.patients}))
	}

	render() {
		return <div>
			<div className="row">
				<Button className="pull-right" bsStyle="success">New prescription</Button>
			</div>
			<br/>
			<div className="row">
				{
					this.state.list.map(patient => <Panel key={patient.id}>
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