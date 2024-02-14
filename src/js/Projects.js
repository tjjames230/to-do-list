// file for keeping track of state for all projects & adding new projects
export { allProjects, Project };
const allProjects = [projectOne, projectTwo];

const projectOne = {
  name: "Personal",
};

const projectTwo = {
  name: "Work",
};

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
