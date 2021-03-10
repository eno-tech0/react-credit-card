import React from 'react';

function CreateNumbers({number}) {
	const arr = number.toString().split('');
	return arr.map((item, i) => {
		return (
			// <span className={arr.length == (++i) ? "anim-show" : ""}>{item}</span>
			<span key={i} className="anim-show">{item}</span>
		)
	})
}

export default CreateNumbers;