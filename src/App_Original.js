import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				{/* add routes with layouts */}
				<Route path="/admin" component={Admin} />
				<Route path="/auth" component={Auth} />
				{/* add routes without layouts */}
				<Route path="/landing" exact component={Landing} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/" exact component={Index} />
				{/* add redirect for first page */}
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
