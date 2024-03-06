import { MyStorage } from "./Storage";
export { allTasks, Task };

const taskOne = {
	title: "Buy dog food",
	dueDate: "01/02/2024",
	priority: "low",
	description:
		"Dog will run out of food in a couple days, will go to the store to buy more.",
	project: "Personal",
};

const taskTwo = {
	title: "Send email to Paul",
	dueDate: "01/04/2024",
	priority: "medium",
	description: "Need to send Paul a list of revisions that need to be done.",
	project: "Work",
};

const allTasks = [taskOne, taskTwo];

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
		let localTasks = JSON.parse(localStorage.tasks);
		localTasks.splice(localTasks.indexOf(this), 1);
		let updatedLocalTasks = JSON.stringify(localTasks);
		MyStorage.setTaskStorage(updatedLocalTasks);
	}

	addTask() {
		allTasks.push(this);
		let stringAllTasks = JSON.stringify(allTasks);
		MyStorage.setTaskStorage(stringAllTasks);
	}
}
