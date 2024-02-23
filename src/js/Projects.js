export { allProjects, Project };

const projectOne = {
	name: "Personal",
};

const allProjects = [projectOne];

class Project {
	constructor(name) {
		this.name = name;
	}

	deleteProject() {
		allProjects.splice(allProjects.indexOf(this), 1);
	}

	addProject() {
		allProjects.push(this);
	}
}
