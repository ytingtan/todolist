import { useEffect, useState } from "react";
import Box from "../Box";
import styles from "./Header.module.css"

function OverviewBox(props) {
				const {tasks} = props;
				const [name, setName] = useState("Loading name...");

				const numOfUndone = tasks.filter((task) => !task.isComplete).length;

				useEffect(() => {
								const savedName = window.localStorage.getItem("name");
								setName(savedName ?? "John Doe");
				}, []);

				return (
								
								
								<Box>
								<h2>Overview</h2>
								<p>Welcome back{" "} 
								<strong
								role="button"
								onClick={() => {
												const newName = prompt("What is your name?", name);
												setName(newName);
												window.localStorage.setItem("name", newName);
								}}>{name || "<set a name>"}</strong>!
								</p> 
								<p>You have{" "} <strong>{numOfUndone} task{numOfUndone == 1 ? "" : "s"}</strong>{" "} that {numOfUndone == 1 ? " is " : " are "} not complete.</p>
								</Box>
								
				);
}

const CatFactBox = () => {
	const [catFact, setCatFact] = useState("Loading cat fact...");
	
	useEffect(() => {
					fetch("https://catfact.ninja/fact")
					.then((response) => response.json())
					.then((data) => setCatFact(data.fact))
					.catch((error) => 
									setCatFact(`Unable to retrieve cat fact. Error: ${error}`)
					);
	}, []);

	return (
				
				<Box>
				<h2>Cat Fact of the Day</h2>
				<p>{catFact}</p>
				</Box>
					
	);
}

export default function Header(props) {
				const { tasks } = props;
				return ( 
								<header>
								<h1>Orbitodolist</h1>
								<div style={{ display: "flex", flexFlow: "row nowrap" }}>
								<OverviewBox tasks={tasks} />
								<CatFactBox />
								</div>
								</header>
				);
}
