import React, {Component} from 'react';
import CreateNumbers from '../components/CreateNumbers';

export default class Card extends Component {

	constructor() {
		super();
		this.state = {
			bankLogo: null,
			brandLogo: null,
			checkNumber: ''
		}
	}

	getCardData = (card) => {
		fetch(`https://api.cardinfo.online?apiKey=bc08d4ecf7e651b3ec2f9a3d77c219f6&input=${card}`)
			.then(res => res.json())
			.then(res => { 
				console.log(res);
				if (res.bankLogoBigOriginalSvg) {
					this.setState({
						bankLogo: res.bankLogoBigOriginalSvg,
						brandLogo: res.brandLogoLightSvg,
						checkNumber: card
					})
				}
		});
	}

	render() {
		let view = null;
		const {number, name, month, year, cvv, cardSide, selectedElem} = this.props.state;
		const {bankLogo, brandLogo, checkNumber} = this.state;

		if (number.match(/\d/g) && number.length != checkNumber.length) {
			this.getCardData(+number.match(/\d/g).join(''));
		}

		// let newNumber = number;

		// while (newNumber.length < 19) {
		// 	if (number % 5) {
		// 		newNumber += ' XXXX';
		// 	} else {
		// 		newNumber += 'X';
		// 	}
		// }

		if (cardSide == 'front' || cardSide == 'default') {
			view = () => {
				return (
					<div className={`card-block card-front ${cardSide == 'front' ? 'anim-rotate-front' : ''}`}>
						<div className="card-header_front">
							<svg id="card-chip" enableBackground="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg">
								<path d="m437 471h-362c-41.355 0-75-33.645-75-75v-280c0-41.355 33.645-75 75-75h362c41.355 0 75 33.645 75 75v280c0 41.355-33.645 75-75 75z" fill="#6495f788"/>
								<path d="m116 75h280v362h-280z" fill="#ffee78" transform="matrix(0 -1 1 0 0 512)"/>
								<path d="m256 116h181v280h-181z" fill="#fcd232"/>
								<path d="m437 101h-362c-8.284 0-15 6.716-15 15v280c0 8.284 6.716 15 15 15h362c8.284 0 15-6.716 15-15v-280c0-8.284-6.716-15-15-15zm-227 200v-90h92v90zm-30-105v45h-90v-50h90zm-90 75h90v45 5h-90zm242-75v-5h90v50h-90zm0 120v-45h90v50h-90zm90-155h-105c-8.284 0-15 6.716-15 15v5h-31v-28.787l21.213-21.213h129.787zm-172.213-30-4.394 4.394c-2.813 2.812-4.393 6.627-4.393 10.606v35h-31v-5c0-8.284-6.716-15-15-15h-105v-30zm-159.787 220h105c8.284 0 15-6.716 15-15v-5h31v28.787l-21.213 21.213h-129.787zm172.213 30 4.394-4.394c2.813-2.812 4.393-6.627 4.393-10.606v-35h31v5c0 8.284 6.716 15 15 15h105v30z" fill="#fcd232"/>
								<path d="m437 101h-181v110h46v90h-46v110h181c8.284 0 15-6.716 15-15v-280c0-8.284-6.716-15-15-15zm-15 280h-159.787l4.394-4.394c2.813-2.812 4.393-6.627 4.393-10.606v-35h31v5c0 8.284 6.716 15 15 15h105zm0-60h-90v-5-45h90zm0-80h-90v-45-5h90zm0-80h-105c-8.284 0-15 6.716-15 15v5h-31v-28.787l21.213-21.213h129.787z" fill="#f7b90f"/>
							</svg>

							<img src={bankLogo ? bankLogo : './default.png'} alt="card-logo"></img>
						</div>
						<div className={`card-body_front ${selectedElem == 'number' ? 'selected' : ''}`}>
							<CreateNumbers number={number}/>
						</div>
						<div className="card-footer">
							<div className="card-footer_name">
								<span className="card-title">Card Holder</span>
								<h3 className={`${selectedElem == 'name' ? 'selected' : ''}`}>{name}</h3>
							</div>
							<div className="card-footer_expires">
								<span className="card-title">Expires</span>
								<h3 className={`${selectedElem == 'month' || selectedElem == 'year' ? 'selected' : ''}`}>{month}/{year}</h3>
							</div>
							<div className="card-logo">
								<img src={brandLogo ? brandLogo : './logo-card.png'}></img>
							</div>
						</div>
					</div>
				)
			}
		} else {
			view = () => {
				return (
					<div className={`card-block card-back ${cardSide == 'back' ? 'anim-rotate-back' : ''}`}>
						<div className="card-header_back"></div>
						<div className={`card-body_back ${selectedElem == 'cvv' ? 'selected black' : ''}`}>{cvv}</div>
					</div>
				)
			}
		}
		return (
			view()
		)
	}
}