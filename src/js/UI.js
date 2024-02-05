import { allTasks } from "./Tasks";
export { UI };

const main = document.querySelector("main");

class UI {
  static loadHome() {
    this.loadTasks();
    this.loadProjects();
    this.loadEventListeners();
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
    this.createTask();
  }

  static createTask() {
    const addTaskBtn = document.querySelector("#add-task");
    let windowOpen = false;
    addTaskBtn.addEventListener("click", addTaskDisplay);

    function addTaskDisplay() {
      if (windowOpen === false) {
        windowOpen = true;

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
            windowOpen = false;
          }
        });

        newTaskCtn.appendChild(newTaskForm);
        main.prepend(newTaskCtn);

        let submitTaskBtn = document.querySelector("#submit-new-task");
        submitTaskBtn.addEventListener("click", (e) => {
          e.preventDefault();
        });
      }
    }
  }

  static clearMain() {
    main.innerHTML = "";
  }
}
