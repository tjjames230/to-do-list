import { MyStorage } from "./Storage";

export { allTasks, Task, updateTaskProject };

const allTasks = [];

class Task {
	constructor(title, dueDate, priority, description = "", project = null) {
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
		this.description = description;
		this.project = project;
	}

	deleteTask() {
		allTasks.splice(allTasks.indexOf(this), 1);
		const localTasks = JSON.parse(localStorage.tasks);
		localTasks.splice(localTasks.indexOf(this), 1);
		const updatedLocalTasks = JSON.stringify(localTasks);
		MyStorage.setTaskStorage(updatedLocalTasks);
	}

	addTask() {
		allTasks.push(this);
		const stringAllTasks = JSON.stringify(allTasks);
		MyStorage.setTaskStorage(stringAllTasks);
	}
}

function updateTaskProject(value) {
	console.log("update task projects");
	for (let i = 0; i < allTasks.length; i++) {
		if (allTasks[i].project === value) {
			allTasks[i].project = "";
		}
	}
}
