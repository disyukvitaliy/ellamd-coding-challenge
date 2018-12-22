import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Button } from 'react-bootstrap';
import { inject, observer } from "mobx-react";
import Api from '../../services/api'
import Search from '../../components/Prescription/New/Search'
import Selected from '../../components/Prescription/New/Selected'

class PatientNew extends Component {
	state = {
		ingredients: []
	}
	
	get patient () {
		let id = parseInt(this.props.match.params.id, 10)
		return this.props.patientStore.list.find(p => p.id === id)
	}

	onIngredientsAdd = (ingredients) => {
		let selectedIds = this.state.ingredients.map(i => i.id)

		let newIngredients = ingredients.filter(i => !selectedIds.includes((i.id)))

		this.setState({
			ingredients: this.state.ingredients.concat(newIngredients)
		})
	}

	onIngredientRemove = (id) => () => {
		this.setState({
			ingredients: this.state.ingredients.filter(i => i.id !== id)
		})
	}

	onPercentageChange = (ingredient) => (e) => {
		let percentage = e.target.value
		if (percentage < ingredient.minimum_percentage) percentage = ingredient.minimum_percentage
		if (percentage > ingredient.maximum_percentage) percentage = ingredient.maximum_percentage
		this.setState({
			ingredients: this.state.ingredients.map(
				i => i.id === ingredient.id ? {...i, percentage} : i
			)
		});
	}

	onSubmit = (e) => {
		e.preventDefault();

		Api.post(
			`/patients/${this.patient.id}/prescriptions.json`,
			{ prescription: { ingredients: this.state.ingredients } }
			).then(({data}) => {
			let patient = {
				...this.patient,
				prescriptions: this.patient.prescriptions.concat(data.prescription)
			}

			let newList = this.props.patientStore.list.map(p => p.id === patient.id ? patient : p)
			this.props.patientStore.setList(newList)
			this.props.history.push('/patients/' + patient.id)
		}).catch(() => {
		//	TODO: handle me
		})
	}

	render () {
		if (!this.patient) return null

		return <form onSubmit={this.onSubmit}>
			<Row className="new-prescription">
				<Button bsStyle="link">
					<Link to={'/patients/' + this.patient.id}>Cancel</Link>
				</Button>
				<Button
					type="submit"
					disabled={!this.state.ingredients.length}
					className="pull-right"
					bsStyle="success"
				>Save</Button>
				<h2>{this.patient.name}'s new prescription</h2>
				<Search
					onSelect={this.onIngredientsAdd}
					selectedIngredients={this.state.ingredients}/>
				<br/>
				<Selected
					ingredients={this.state.ingredients}
					onPercentageChange={this.onPercentageChange}
					onIngredientRemove={this.onIngredientRemove}
				/>
			</Row>
		</form>
	}
}

export default inject('patientStore')(observer(PatientNew));