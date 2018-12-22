import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { inject, observer } from "mobx-react";
import { Form, Field } from "react-final-form";
import Validator from '../../services/validator'
import Api from '../../services/api'

const validator = new Validator({
	name: { required: true },
	address: { required: true },
	birthday: { required: true }
})

class PatientNew extends Component {
	onSubmit = (values) => {
		Api.post('/patients.json', { patient: values }).then(({data}) => {
			let newList = this.props.patientStore.list.concat(data.patient)
			this.props.patientStore.setList(newList)
			this.props.history.push('/patients/' + data.patient.id)
		}).catch(() => {
		//	TODO: handle me
		})
	}

	render () {
		return <Form
			onSubmit={this.onSubmit}
			validate={validator.validate}
			render={({handleSubmit}) => <form onSubmit={handleSubmit}>
			<div className="row">
				<Button bsStyle="link">
					<Link to="/">Cancel</Link>
				</Button>
				<Button type="submit" className="pull-right" bsStyle="success">
					Save
				</Button>
				<h2>New patient</h2>
				<Field name="name">
					{({ input, meta }) => <FormGroup>
						<ControlLabel>Name</ControlLabel>
						<FormControl {...input}	type="text"/>
						{meta.error && meta.touched && <span>{meta.error}</span>}
					</FormGroup>}
				</Field>
				<Field name="address">
					{({ input, meta }) => <FormGroup>
						<ControlLabel>Address</ControlLabel>
						<FormControl {...input}	type="text"/>
						{meta.error && meta.touched && <span>{meta.error}</span>}
					</FormGroup>}
				</Field>
				<Field name="birthday">
					{({ input, meta }) => <FormGroup>
						<ControlLabel>Day of birth</ControlLabel>
						<FormControl {...input}	type="date"/>
						{meta.error && meta.touched && <span>{meta.error}</span>}
					</FormGroup>}
				</Field>
			</div>
		</form>}/>
	}
}

export default inject('patientStore')(observer(PatientNew));