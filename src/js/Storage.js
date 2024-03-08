import { Project, allProjects } from "./Projects";
import { Task, allTasks } from "./Tasks";

export { MyStorage };

class MyStorage {
	static getProjectStorage() {
		if (localStorage.projects != undefined) {
			const localProjects = JSON.parse(localStorage.projects);
			this.setProjectObjects(localProjects);
			allProjects.push(...localProjects);
		}
	}

	static setProjectObjects(arr) {
		arr.forEach((obj) => {
			Object.setPrototypeOf(obj, new Project());
		});
	}

	static setProjectStorage(projects) {
		localStorage.setItem("projects", projects);
		console.log(localStorage);
	}

	static getTaskStorage() {
		if (localStorage.tasks != undefined) {
			const localTasks = JSON.parse(localStorage.tasks);
			this.setTaskObjects(localTasks);
			allTasks.push(...localTasks);
		}
	}

	static setTaskObjects(arr) {
		arr.forEach((obj) => {
			Object.setPrototypeOf(obj, new Task());
		});
	}

	static setTaskStorage(tasks) {
		localStorage.setItem("tasks", tasks);
		console.log(localStorage);
	}
}
