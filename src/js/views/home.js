import React from "react";
import CardContainerCharacters from "../component/cardContainerCharacters";
import CardContainerPlanets from "../component/cardContainerPlanets";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<CardContainerCharacters />
		<CardContainerPlanets />
	</div>
);
