import React from 'react';
import CreateOptions from './CreateOptions';

function CreateSelects({title, change, select}) {

	function onChange(e) {
		change(e.target.value, e.target.id);
		console.log(e.target.id);
	}

	return (
		<select id={title}
				className="select-content" 
				onChange={onChange}
				onFocus={(e) => select(e.target.id)}>
			<option value={title} className="select-option">{title}</option>
			<CreateOptions type={title}/>
		</select>
	)
}

export default CreateSelects;