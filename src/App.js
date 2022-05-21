import { useState } from "react";
import "./styles.css";

export default function App() {
	const [name, setName] = useState("John Doe");
	return (
		<div className="App">
			<header>
				<h1>Orbitodolist</h1>
				<div style={{ display: "flex", flexFlow: "row nowrap" }}>
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
					<div className="HeaderBox">
						<h2>Cat Fact of the Day</h2>
						Cat fact #1.
					</div>
				</div>
			</header>

		<main>
		<div>
		<h2>Add Tasks</h2>
		<form>
		<label>
		Task:
		<input style={{ margin: "0 1rem" }} type="text" value={""} />
		</label>
		<input type="submit" value="Add" />
		</form>
		</div>

		<div>
		<h2>Task List</h2>
		<table style={{ margin: "0 auto", width: "100%" }}>
		<thead>
		<tr>
		<th>No.</th>
		<th>Task</th>
		<th>Completed</th>
		</tr>
		</thead>
		<tbody>
		<tr>
		<td>1</td>
		<td>Brew my morning coffee</td>
		<td>
		<input type="checkbox" checked={true} />
		</td>
		</tr>
		</tbody>
		<tbody>
		<tr>
		<td>2</td>
		<td>Task 2</td>
		<td>
		<input type="checkbox" checked={true} />
		</td>
		</tr>
		</tbody>
		<tbody>
		<tr>
		<td>3</td>
		<td>Task 3</td>
		<td>
		<input type="checkbox" checked={false} />
		</td>
		</tr>
		</tbody>
		</table>
		<p>
		Add 2 more items of your choosing to the list, so that this looks
		like a legit todo list app.
		</p>
		</div>
		</main>
		</div>
	);



}
