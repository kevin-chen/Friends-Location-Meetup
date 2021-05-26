import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// layouts
import Home from "my_site/Home";
import EnterGroup from "my_site/Enter_Group";
import CreateGroup from "my_site/Create_Group";
import Location from "my_site/Location";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />

        <Route path="/enter_group" exact component={EnterGroup} />
        <Route path="/enter_group/:id" exact component={EnterGroup}/>

        <Route path="/create_group" exact component={CreateGroup} />

        <Route path="/location" exact component={Location} />
        
				{/* add redirect for first page */}
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
