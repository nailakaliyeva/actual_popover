import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import PropTypes from "prop-types";

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false
		};
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		let object = this.props.item;
		let array = Object.keys(object);

		return (
			<div>
				<li className="list-group-item d-flex justify-content-between">
					<h5 id={"Popover-" + this.props.id}>{this.props.name}</h5>
				</li>
				<Popover
					placement="right"
					trigger="hover focus"
					isOpen={this.state.popoverOpen}
					target={"Popover-" + this.props.id}
					toggle={this.toggle}>
					<PopoverHeader>{this.props.name}</PopoverHeader>
					<PopoverBody>
						{array.map((key, i) => {
							return (
								<div key={i}>
									{key}: {object[key]}
								</div>
							);
						})}
						<img src={this.props.image} width="170" height="120" />
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}
Example.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	hairColor: PropTypes.string,
	eyeColor: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.string,
	fade: PropTypes.bool,
	item: PropTypes.object,
	image: PropTypes.string
};
