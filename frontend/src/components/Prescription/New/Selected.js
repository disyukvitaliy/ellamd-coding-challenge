import React, { Component } from 'react';
import { Panel, Row, Col, FormControl } from 'react-bootstrap';

export default class Selected extends Component {
	render () {
		return <div>
			{this.props.ingredients.map(ingredient => <Panel key={ingredient.id}>
				<Panel.Body>
					<Row>
						<Col sm={9}>
							{ingredient.name}<br/>
							{ingredient.description}
						</Col>
						<Col sm={3}>
							<FormControl
								type="number"
								step="0.01"
								value={ingredient.percentage}
								onChange={this.props.onPercentageChange(ingredient)}
								min={ingredient.minimum_percentage}
								max={ingredient.maximum_percentage}
							/>
							<div>min: {ingredient.minimum_percentage}, max: {ingredient.maximum_percentage}</div>
							<div onClick={this.props.onIngredientRemove(ingredient.id)}>remove ingredient</div>
						</Col>
					</Row>
				</Panel.Body>
			</Panel>)}
		</div>
	}
}
