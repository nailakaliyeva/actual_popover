import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { People } from "./views/people";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { FavoritePeople } from "./views/favoritePeople";
import { FavoritePlanets } from "./views/favoritePlanets";
import { FavoriteVehicles } from "./views/favoriteVehicles";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={People} />
							<Route path="/planets" component={Planets} />
							<Route path="/vehicles" component={Vehicles} />
							<Route path="/favoritePeople" component={FavoritePeople} />
							<Route path="/favoritePlanets" component={FavoritePlanets} />
							<Route path="/favoriteVehicles" component={FavoriteVehicles} />

							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
