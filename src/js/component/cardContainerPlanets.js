import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./card";
const CardContainerPlanets = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<h1 className="text-danger">Planets</h1>
			<div className="container d-flex" style={{ overflow: "auto" }}>
				{store.listaPlanetas.map((item, index) => {
					<Card key={item.uid} name={item.name} url={item.url} />;
				})}
			</div>
		</>
	);
};

export default CardContainerPlanets;