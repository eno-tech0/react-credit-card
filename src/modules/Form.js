import React, {Component} from 'react';
import CreateInput from '../components/CreateInputs';
import CreateSelects from '../components/CreateSelects';

export default class Form extends Component {
	// constructor() {
	// 	super();
	// }

	changeInputValue = (value, prop) => {
		this.props.changeFormState(value, prop);
	} 	

	changeSelectedInput = (id) => {
		this.props.changeSelectedProp(id);
	}

	render() {
		return (
			<>
				<form className="form">
					<CreateInput type="text" 
									title="Card Number" 
									change={this.changeInputValue}
									select={this.changeSelectedInput}
									inputId="number"/>
					<CreateInput type="text" 
									title="Card Name" 
									change={this.changeInputValue}
									select={this.changeSelectedInput}
									inputId="name"/>

					<div className="flex-block">
						<div className="input-block">
							<h3 className="input-title">Expiration Date</h3>
							<CreateSelects change={this.changeInputValue}
										select={this.changeSelectedInput}
										title="month"/>
							<CreateSelects change={this.changeInputValue}
										select={this.changeSelectedInput}
										title="year"/>		

						</div>
						<CreateInput type="password" 
									title="CVV" 
									change={this.changeInputValue}
									select={this.changeSelectedInput}
									inputId="cvv"/>
					</div>						

				</form>
			</>
		)
	}
}