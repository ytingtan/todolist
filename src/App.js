import { useState } from "react";
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";
import "./styles.css";

export default function App() {
				const [tasks, setTasks] = useState([]);
				/**const [name, setName] = useState("John Doe");**/
				return (
								<div className="App">
								<Header tasks={tasks} />
								<main>
								<TaskManager tasks={tasks} setTasks={setTasks}/>
								</main>
								</div>
				);



}
