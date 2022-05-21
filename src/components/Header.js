import { useState } from "react";
function OverviewBox() {
	const [name, setName] = useState("default name");

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
	<p>You have <strong>4 tasks </strong> that are not complete.</p>
	</div>
);
}

const CatFactBox = () => (
	<div className="HeaderBox">
	<h2>Cat Fact of the Day</h2>
	Cat fact #1.
	</div>	
);

export default function Header() {
	return ( 
		<header>
	<h1>Orbitodolist</h1>
	<div style={{ display: "flex", flexFlow: "row nowrap" }}>
		<OverviewBox />
		<CatFactBox />
	</div>
	</header>
	);
}
