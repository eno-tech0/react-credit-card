import React from 'react';

function CreateOptions({type}) {
	let view = null;

	if (type === 'month') {
		view = [...Array(12)].map((_, i) => {
			const id = `select-${type}-${i}`;
			const item = ++i < 10 ? `0${i++}` : i++;
			return (
				<>
					<option key={id} value={item} className="select-option">{item}</option>
				</>
			)
		})
	} else {
		view = [...Array(15)].map((_, i) => {
			const id = `select-${type}-${i}`;
			let nowYear = new Date().getFullYear().toString().substr(2,2);
			return (
				<>
					<option key={id} value={+nowYear + i} className="select-option">{+nowYear + i}</option>
				</>
			)
		})
	}

	return view;
}

export default CreateOptions;
