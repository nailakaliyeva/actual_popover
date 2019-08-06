import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Example from "./popover";

export class People extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="m-5">
							<div className="d-flex justify-content-between">
								<h1 className="text-info mb-2">Peoples names</h1>
								<Link to="/favoritePeople">
									<button className="btn btn-primary">Favorite People</button>
								</Link>{" "}
							</div>
							<ul className="list-group">
								{store.people.map((e, i) => {
									let func = () => actions.addToFavoritePeople(e);
									let color = "far fa-star";
									let tiger = store.favorites.find(fav => fav.name === e.name);
									if (tiger !== undefined) {
										color = "far fa-star text-warning";
										func = () => actions.deleteFromFav(e);
									}

									//tiger !== undefined ? "far fa-star text-warning" : "far fa-star";}

									return (
										<Example
											item={e}
											id={i}
											name={e.name}
											hairColor={e.hair_color}
											eyeColor={e.eye_color}
											height={e.height}
											fade={true}
											gender={e.gender}
											key={i}
											className="list-group-item d-flex justify-content-between"
											onClick={() => {
												this.setState({ show: e });
											}}>
											<i className={color} onClick={func} />
										</Example>
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
