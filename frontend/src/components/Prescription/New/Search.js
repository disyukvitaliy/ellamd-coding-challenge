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

	onSelect = (ingredient) => {
		this.setState({searchStr: ''})
		this.props.onSelect(ingredient)
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
				this.matchedIngredients.length > 0 &&
				<div className="search-popup">
					<Panel>
						<Panel.Heading><b>Ingredients</b></Panel.Heading>
						<ListGroup>
							{this.matchedIngredients.map(ingredient =>
								<ListGroupItem key={ingredient.id} onClick={() => this.onSelect(ingredient)}>
									{ingredient.name}<br/>
									{ingredient.description}
								</ListGroupItem>)}
						</ListGroup>
					</Panel>
				</div>
			}
		</div>
	}
}

export default inject('ingredientStore')(observer(Search));