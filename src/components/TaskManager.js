import React, { useState } from "react";

export default function TaskManager() {

				const [tasks, setTasks] = useState([]);
				const [addTaskText, setAddTaskText] = useState("");
							
				function handleSubmit(event) {
					event.preventDefault();			
					const newTasks = [
									...tasks, {
									description: addTaskText,
									isComplete: false,
					}];
					setTasks(newTasks);
					console.log(newTasks);			 

				}

				return (
								<>
									<div>
										<h2>Add Tasks</h2>
										<form onSubmit={handleSubmit}>
											<label>
												Task:
												<input 
												style={{ margin: "0 1rem" }} 
												type="text" 
												value={addTaskText}
												onChange={(event) => {setAddTaskText(event.target.value);}}/>
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
								    {tasks.map((task, idx) => (
										<tr>
											<td>{idx + 1}</td>
											<td>{task.description}</td>
											<td>
												<input type="checkbox" checked={task.isComplete} />
											</td>
										</tr>
										))}
									</tbody>
								</table>
								<p>
								Add 2 more items of your choosing to the list, so that this looks
								like a legit todo list app.
								</p>
								</div>
								</>
				);



}
