import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// layouts
import Home from "my_site/Home";
import EnterGroup from "my_site/Enter_Group";
import CreateGroup from "my_site/Create_Group";
import Location from "my_site/Location";

// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCE1bi9JTS_fabGOU4QeVKj8rNpxip6b0c",
	projectId: "friends-location-meetup",
	databaseURL: "https://friends-location-meetup.firebaseio.com",
	authDomain: "friends-location-meetup.firebaseapp.com",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
	firebase
		.auth()
		.signInAnonymously()
		.then(() => {
			console.log("Successfully Signed into Firebase");
		})
		.catch((error) => {
			console.error("Error Signing Anonymously into Firebase");
		});
	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>{
		console.log("Locally Persistent Auth");
	})
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			var uid = user.uid;
			console.log("Signed In: ", uid);
		} else {
			console.log("Signed out");
		}
	});

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />

				<Route path="/enter_group" exact component={EnterGroup} />
				<Route path="/enter_group/:id" exact component={EnterGroup} />

				<Route path="/create_group" exact component={CreateGroup} />

				<Route path="/location" exact component={Location} />

				{/* add redirect for first page */}
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
