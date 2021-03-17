import React, { useState, useEffect } from "react";

import CardCounter from "./cardCounter.jsx";
import { string } from "prop-types";

//create your first component
export function Home() {
	const [arrStringSeconds, setArrStringSeconds] = useState([]);
	let secondsAux = 0;
	let stringSeconds = "";
	let cardsArray = [0, 0, 0, 0, 0, 0];

	useEffect(() => {
		setInterval(() => {
			let arrayCopy = [...cardsArray];
			secondsAux = secondsAux + 1;
			stringSeconds = secondsAux.toString();
			for (let i = 0; i < cardsArray.length; i++) {
				if (stringSeconds[stringSeconds.length - 1 - i] != undefined) {
					arrayCopy[cardsArray.length - 1 - i] =
						stringSeconds[stringSeconds.length - 1 - i];
				}
			}

			setArrStringSeconds(arrayCopy);
		}, 1000);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Seconds Counter</h1>

			<div className=" d-flex justify-content-center">
				{cardsArray.map((item, i) => {
					return (
						<CardCounter
							key={i}
							counter={
								i !== 0 ? (
									arrStringSeconds[i]
								) : (
									<i className="far fa-clock"></i>
								)
							}
						/>
					);
				})}
			</div>

			<p>
				Made by{"  "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
