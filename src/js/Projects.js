import { MyStorage } from "./Storage";
export { allProjects, Project };

const projectOne = {
	name: "Personal",
};

const projectTwo = {
	name: "Work",
};

const allProjects = [projectOne, projectTwo];

class Project {
	constructor(name) {
		this.name = name;
	}

	deleteProject() {
		allProjects.splice(allProjects.indexOf(this), 1);
	}

	addProject() {
		allProjects.push(this);
		let stringAllProjects = JSON.stringify(allProjects);
		MyStorage.setProjectStorage(stringAllProjects);
	}
}
