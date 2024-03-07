import { MyStorage } from "./Storage";
export { allProjects, Project };

const projectOne = {
	name: "Personal",
};

const projectTwo = {
	name: "Work",
};

const allProjects = [];

class Project {
	constructor(name) {
		this.name = name;
	}

	deleteProject() {
		allProjects.splice(allProjects.indexOf(this), 1);
		const localProjects = JSON.parse(localStorage.projects);
		localProjects.splice(localProjects.indexOf(this), 1);
		const updatedLocalProjects = JSON.stringify(localProjects);
		MyStorage.setProjectStorage(updatedLocalProjects);
	}

	addProject() {
		allProjects.push(this);
		const stringAllProjects = JSON.stringify(allProjects);
		MyStorage.setProjectStorage(stringAllProjects);
		console.log();
	}
}
