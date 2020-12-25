import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import planetDescriptions from "../constants/planetDescriptions";
import HomeScreen from "./HomeScreen";
import SpaceCraft from "./SpaceCraft";
import Landing from "./Landing";
import About from "./About";

function App() {
	const [planets, setPlanets] = useState([]);
	const [images, setImages] = useState([]);
	const [showChild, setShowChild] = useState(true);
	const [matchingPlanet, setMatchingPlanet] = useState([]);

	const onImageClick = (e) => {
		const selectedPlanet = e.target.id;
		console.log(selectedPlanet);
		console.log(planets);
		const match = planets.filter(
			(planet) => planet.englishName === selectedPlanet
		); //Display detailed planet information on-click
		setMatchingPlanet(match[0]);
		setShowChild(false);
	};

	const setShow = () => {
		setShowChild(true);
	};

	const getPlanets = async () => {
		const data = await fetch("https://api.le-systeme-solaire.net/rest/bodies"); //Await for first fetch promise to resolve
		const planets = await data.json(); //Await for data.json to resolve and save this planets
		setPlanets(
			planets.bodies.filter(
				(planet) =>
					planet.isPlanet &&
					planet.name.indexOf("1") === -1 &&
					planet.name.indexOf("Pluto") === -1
			)
		); //Fetch Planet Data from API
	};

	useEffect(() => {
		getPlanets();
	}, []);

	useEffect(() => {
		const getImages = async () => {
			const allImages = [];
			for await (const planet of planets) {
				const data = `/images/compressed/${planet.englishName}.png`; //Load images from folder on component mount
				allImages.push(data);
			}
			setImages(allImages);
		};
		getImages();
	}, [planets]);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route
						path="/main"
						exact
						render={(props) => (
							<div id="homeScreenContainer">
								<HomeScreen
									{...props}
									planets={planets}
									images={images}
									onImageClick={onImageClick}
									showChild={showChild}
									planetDescriptions={planetDescriptions}
									matchingPlanet={matchingPlanet}
									setShow={setShow}
								/>
							</div>
						)}
					/>

					<Route path="/" exact component={Landing} />
					<Route path="/about" exact component={About} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
