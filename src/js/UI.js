import { allTasks } from "./Tasks";
export { UI };

const main = document.querySelector("main");

class UI {
  static loadHome() {
    this.loadTasks();
    this.loadProjects();
    this.loadEventListeners();
  }

  static newTaskWindowOpen = false;

  static checkWindowOpen() {
    return this.newTaskWindowOpen;
  }

  static loadTasks() {
    // this.clearMain();
    // main.innerHTML = "<h1>Tasks</h1>";
  }

  static loadProjects() {
    // this.clearMain();
    // main.innerHTML = `<h1>${project.name}</h1>`;
  }

  static loadEventListeners() {
    document.addEventListener("click", this.handleDocumentClick);
  }

  static handleDocumentClick(event) {
    const { target } = event;
    if (target.matches("#add-task") && !this.checkWindowOpen) {
      UI.displayForm("task");
    } else if (target.matches("#add-project") && !this.checkWindowOpen) {
      UI.displayForm("project");
    }
  }

  static displayForm(formType) {
    UI.newTaskWindowOpen = true;
    const form =
      formType === "task" ? this.createTaskForm() : this.createProjectForm();
  }

  static createTaskForm() {
    console.log("create task");
  }

  static createProjectForm() {
    console.log("create project");
  }

  static addTaskDisplay() {
    const newTaskCtn = document.createElement("div");
    newTaskCtn.classList.add("new-task-bg");

    const newTaskForm = document.createElement("form");
    newTaskForm.classList.add("new-task-form");

    newTaskForm.innerHTML = `<div class="input-ctn" id="title-ctn">
        <label for="title">Title</label>
        <input type="text" id="title" />
        </div>
        <div class="input-ctn" id="description-ctn">
          <label for="description">Description</label>
          <input type="text" id="description"/>
        </div>
        <div class="input-ctn" id="due-date-ctn">
          <label for="due-date">Due Date</label>
          <input id="due-date" type="date" />
        </div>
        <div class="input-ctn" id="project-ctn">
          <label for="project">Project</label>
          <input id="project" type="text" />
        </div>
        <button id="submit-new-task" type="submit">Create Task</button>`;

    newTaskCtn.addEventListener("click", (e) => {
      if (e.target === newTaskCtn) {
        main.removeChild(newTaskCtn);
        UI.newTaskWindowOpen = false;
      }
    });

    newTaskCtn.appendChild(newTaskForm);
    main.prepend(newTaskCtn);

    let submitTaskBtn = document.querySelector("#submit-new-task");
    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  static addProjectDisplay() {
    if (!this.checkWindowOpen()) {
      console.log("new project form");
    }
  }

  static clearMain() {
    main.innerHTML = "";
  }
}
