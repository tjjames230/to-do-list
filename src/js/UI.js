import { allTasks } from "./Tasks";
export { UI };

const main = document.querySelector("main");

class UI {
  static loadHome() {
    this.loadTasks();
    this.loadProjects();
    this.loadEventListeners();
  }

  static clearMain() {
    main.innerHTML = "";
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

  static handleDocumentClick(e) {
    const { target } = e;
    if (target.matches("#add-task") && !UI.checkWindowOpen()) {
      UI.displayForm("task");
    } else if (target.matches("#add-project") && !UI.checkWindowOpen()) {
      UI.displayForm("project");
    }
  }

  static displayForm(formType) {
    UI.newTaskWindowOpen = true;
    const form =
      formType === "task" ? this.createTaskForm() : this.createProjectForm();
    const formCtn = this.createFormCtn(form);
    this.createFormEventListeners(formCtn);
    main.prepend(formCtn);
    if (formType === "task") {
      this.handleTaskSubmit();
    } else {
      this.handleProjectSubmit();
    }
  }

  static createFormCtn(form) {
    const formCtn = document.createElement("div");
    formCtn.classList.add("form-bg");
    formCtn.appendChild(form);
    return formCtn;
  }

  static createFormEventListeners(formCtn) {
    formCtn.addEventListener("click", (e) => {
      if (e.target === formCtn) {
        main.removeChild(formCtn);
        UI.newTaskWindowOpen = false;
      }
    });
  }

  static createTaskForm() {
    const form = document.createElement("form");
    form.classList.add("new-form");
    form.id = "task-form";
    form.innerHTML = `<div class="input-ctn" id="title-ctn">
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
    return form;
  }

  static createProjectForm() {
    const form = document.createElement("form");
    form.classList.add("new-form");
    form.id = "project-form";
    form.innerHTML = `<div class="input-ctn" id="project-name-ctn">
    <label for="project-name">Project Name</label>
    <input type="text" id="project-name" />
  </div>
  <button id="submit-new-project" type="submit">Create Project</button>`;
    return form;
  }

  static handleTaskSubmit() {
    let submitBtn = document.querySelector("#submit-new-task");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  static handleProjectSubmit() {
    const submitBtn = document.querySelector("#submit-new-project");
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
}
