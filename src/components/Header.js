import { useState } from "react";
function OverviewBox(props) {
				const {tasks} = props;
				const [name, setName] = useState("John Doe");

				const numOfUndone = tasks.filter((task) => !task.isComplete).length;
				return (
								
								<div className="HeaderBox">
								<h2>Overview</h2>
								<p>Welcome back{" "} 
								<strong
								role="button"
								onClick={() => {
												const newName = prompt("What is your name?");
												setName(newName);
								}}>{name || set-a-name-here}</strong>!
								</p> 
								<p>You have{" "} <strong>{numOfUndone} task{numOfUndone == 1 ? "" : "s"}</strong>{" "} that {numOfUndone == 1 ? " is " : " are "} not complete.</p>
								</div>
				);
}

const CatFactBox = () => (
				<div className="HeaderBox">
				<h2>Cat Fact of the Day</h2>
				Cat fact #1.
				</div>	
);

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
