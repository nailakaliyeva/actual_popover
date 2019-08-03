import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class FavoritePlanets extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<h1 className="text-center text-success">Favorite Planets</h1>
							<ul className="list-group">
								{store.favePlanets &&
									store.favePlanets.map((e, i) => {
										return (
											<li key={i} className="list-group-item d-flex justify-content-between">
												{e.name}
											</li>
										);
									})}
							</ul>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
