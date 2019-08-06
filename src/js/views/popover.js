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
		return (
			<div>
				<Button id={"Popover-" + this.props.id} type="button">
					{this.props.name}
				</Button>
				<Popover
					placement="bottom"
					isOpen={this.state.popoverOpen}
					target={"Popover-" + this.props.id}
					toggle={this.toggle}>
					<PopoverHeader>Popover Title</PopoverHeader>
					<PopoverBody>
						Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia
						quam venenatis vestibulum.
					</PopoverBody>
				</Popover>
			</div>
		);
	}
}
Example.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string
};
