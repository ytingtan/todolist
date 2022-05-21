import React, { useState } from "react";

function TaskList(props) {
	return (
		<div>			
		<h2>Task List</h2>
			{props.tasks.length > 0 ? (		
			<table style={{ margin: "0 auto", width: "100%" }}>
			  <thead>
			  <tr>
			     <th>No.</th>
				   <th>Task</th>
				   <th>Completed</th>
				</tr>
				</thead>
				<tbody>
					{props.tasks.map((task, index) => (
					 // We should specify key here to help react identify
					 // what has updated
					 // https://reactjs.org/docs/lists-and-keys.html#keys
						 <tr key={task.description}>
						 <td>{index + 1}</td>
						 <td>{task.description}</td>
						 <td>
						 <input type="checkbox" checked={task.isComplete} />
						 </td>
						 </tr>
         ))}
         </tbody>
       </table>
					) : (
						<p> No tasks added. Please add a task. </p>
					)}
				</div>
			);
}

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
										<TaskList tasks={tasks} />
								</>
				);



}
