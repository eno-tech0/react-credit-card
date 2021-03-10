import React, {Component} from 'react';
import './modules/modules.css';
import Form from './modules/Form';
import Card from './modules/Card';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			number: 'XXXX XXXX XXXX XXXX',
			name: 'Ivan Ivanov',
			month: 'MM',
			year: 'YY',
			cvv: '',
			cardSide: 'default',
			selectedElem: null
		}
	}
	changeFormState = (value, prop) => {
		switch(prop) {
			case 'number':
				this.setState({
					number: value
				});
				break;
			case 'name' :
				this.setState({
					name: value
				});
				break;
			case 'month':
				this.setState({
					month: value
				})
				break;
			case 'year':
				this.setState({
					year: value
				})
				break;
			case 'cvv':
				this.setState({
					cvv: value
				})
			break;
		}
	}

	changeSelectedProp = (selected) => {
		this.setState({
			selectedElem: selected,
			cardSide: 'front'
		})

		if (selected == 'cvv') {
			this.setState({
				cardSide: 'back'
			})
		}
	}

	render() {
		return (
			<div className="app">
				<Card state={this.state}/>
				<Form changeFormState={this.changeFormState} 
						changeSelectedProp={this.changeSelectedProp}/>
			</div>
		)
	}
}