import React from "react";
import "./Life.css";

const Life = () => {
	return (
		<section id="lifeContainer">
			<h1 id="lifeHeading">Life in our Universe</h1>
			<p id="originsParagraph">
				<h3>Origins of life</h3>
				Life has existed on Earth for approximately 4 billion years, thought to
				have originated from single celled organisms in an environment similar
				to the hot springs shown in the background
			</p>
			<p id="drakeEquation">
				<h3>The Drake Equation</h3>
				The Drake equation is used to estimate how many intelligent
				civilizations are out there in the galaxy. When plugging in values to
				the equation, the number varies wildly from 1,000 to 100 million.
				<img id="drakeImage" src="./images/drakeEquation.png" />
			</p>
			<div id="lifeVideoContainer">
				<video autoPlay muted loop>
					<source src="./images/hotSpring.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
};

export default Life;
