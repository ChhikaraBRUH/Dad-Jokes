import React, { useState } from "react";
import API_KEY from "./apikey.js";
import "./styles.css";

export default function App() {
	const [setupTxt, setSetupTxt] = useState(
		"Want a dad joke? Smash the button below!"
	);
	const [punchlineTxt, setPunchlineTxt] = useState(null);

	function clickHandler() {
		setSetupTxt("Finding a new one...");
		setPunchlineTxt(null);

		fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
			method: "GET",
			headers: {
				"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
				"x-rapidapi-key": API_KEY
			}
		})
			.then((response) => response.json())
			.then((json) => {
				let mainElement = json.body[0];
				setSetupTxt(mainElement.setup);
				setPunchlineTxt(mainElement.punchline);
			})

			.catch((err) => {
				alert(
					"Error Occured. Try again later.\nError details in console logs."
				);
				console.error(err);
			});
	}

	return (
		<div className="App">
			<h1>Dad Jokes Generator</h1>

			<hr />

			<div id="setupTxt">{setupTxt}</div>

			<div id="punchlineTxt">{punchlineTxt}</div>

			<button className="btn" onClick={clickHandler}>
				New Dad Joke!
			</button>

			<hr />

			<div>
				Made with{"  "}
				<span role="img" aria-label="Red Heart">
					❤️{" "}
				</span>
				by <a href="https://bruh.dev">Chaitanya</a>
			</div>
			<a href="https://twitter.com/ChhikaraBRUH">
				<img
					alt="Twitter Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
				/>
			</a>
			<a href="https://github.com/ChhikaraBRUH">
				<img
					alt="GitHub Icon"
					src="https://image.flaticon.com/icons/png/512/733/733609.png"
				/>
			</a>
			<a href="https://linkedin.com/in/ChaitanyaChhikara">
				<img
					alt="LinkedIn Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
				/>
			</a>
		</div>
	);
}
