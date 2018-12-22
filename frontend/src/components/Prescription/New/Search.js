import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, FormControl } from 'react-bootstrap';
import { inject, observer } from "mobx-react";

class Search extends Component {
	state = {
		searchStr: ''
	}

	get matchedIngredients () {
		if (this.state.searchStr.length < 2) return []
		let searchStr = this.state.searchStr.toLowerCase()
		let selectedIngredientIds = this.props.selectedIngredients.map(i => i.id)
		return this.props.ingredientStore.list.filter(
			i => i.name.toLowerCase().includes(searchStr) && !selectedIngredientIds.includes(i.id)
		)
	}

	get matchedFormulations () {
		if (this.state.searchStr.length < 2) return []
		let searchStr = this.state.searchStr.toLowerCase()
		return this.props.formulationStore.list.filter(
			i => i.name.toLowerCase().includes(searchStr)
		)
	}

	onSelectIngredient = (ingredient) => () => {
		this.onSelect([{...ingredient, percentage: ingredient.minimum_percentage}])
	}

	onSelectFormulation = (formulation) => () => {
		this.onSelect(formulation.ingredient_relations.map(ir => ({...ir.ingredient, percentage: ir.percentage})))
	}

	onSelect = (ingredients) => {
		this.setState({searchStr: ''})
		this.props.onSelect(ingredients)
	}

	render () {
		return <div>
			<b>Ingredient or Formulation</b>
			<FormControl
				type="text"
				value={this.state.searchStr}
				onChange={(e) => this.setState({searchStr: e.target.value})}
			/>
			{
				(this.matchedIngredients.length > 0 || this.matchedFormulations.length > 0) &&
				<div className="search-popup">
					{this.matchedIngredients.length > 0 && <Panel>
						<Panel.Heading><b>Ingredients</b></Panel.Heading>
						<ListGroup>
							{this.matchedIngredients.map(ingredient =>
								<ListGroupItem key={ingredient.id} onClick={this.onSelectIngredient(ingredient)}>
									{ingredient.name}<br/>
									{ingredient.description}
								</ListGroupItem>)}
						</ListGroup>
					</Panel>}

					{this.matchedFormulations.length > 0 && <Panel>
						<Panel.Heading><b>Formulations</b></Panel.Heading>
						<ListGroup>
							{this.matchedFormulations.map(formulation =>
								<ListGroupItem key={formulation.id} onClick={this.onSelectFormulation(formulation)}>
									{formulation.name}<br/>
									{formulation.ingredient_relations.map(ir => ir.ingredient.name).join(', ')}
								</ListGroupItem>)}
						</ListGroup>
					</Panel>}
				</div>
			}
		</div>
	}
}

export default inject('ingredientStore', 'formulationStore')(observer(Search));