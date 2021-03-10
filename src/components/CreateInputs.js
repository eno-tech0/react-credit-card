import React from 'react';
import createMask from './CreateMask';
import './components.css';

function CreateInput({type, title, change, select, inputId}) {

	function onChange(e) {
		if (e.target.id == 'number') {
			e.target.value = createMask('XXXX XXXX XXXX XXXX', e.target.value);
		} 
		if (e.target.id == 'cvv') {
			e.target.value = createMask('XXX', e.target.value);
		}

		change(e.target.value, e.target.id);
	}

	return (
		<div className="input-block">
			<h3 className="input-title">{title}</h3>
			<input className="input-content" 
					type={type} 
					id={inputId}
					onChange={onChange} 
					onFocus={() => select(inputId)}></input>
		</div>
	)
}

export default CreateInput;