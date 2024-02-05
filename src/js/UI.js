import { allTasks } from "./Tasks";
export { UI };

const main = document.querySelector("main");

class UI {
  static loadHome() {
    this.loadTasks();
    this.loadEventListeners();
  }

  static loadTasks() {
    //main.innerHTML = "<h1>Hello World</h1>";
  }

  static loadProjects() {}

  static loadEventListeners() {
    this.createTask();
  }

  static createTask() {
    const addTaskBtn = document.querySelector("#add-task");
    let newTaskWindow = 0;
    addTaskBtn.addEventListener("click", addTaskDisplay);

    function addTaskDisplay() {
      if (newTaskWindow === 0) {
        newTaskWindow++;
        const newTaskCtn = document.createElement("div");
        newTaskCtn.classList.add("new-task-bg");
        const newTaskForm = document.createElement("form");
        newTaskForm.classList.add("new-task-form");
        newTaskForm.innerHTML = `<div class="input-ctn" id="title-ctn">
        <label>Title</label>
        <input type="text" id="title" required />
      </div>
      <div class="input-ctn" id="description-ctn">
        <label>Description</label>
        <input />
      </div>
      <div class="input-ctn" id="due-date-ctn">
        <label>Due Date</label>
        <input type="date" required />
      </div>
      <div class="input-ctn" id="project-ctn">
        <label>Project</label>
        <input type="text" />
      </div>
      <button type="submit">Create Task</button>`;
        newTaskCtn.addEventListener("click", (e) => {
          if (e.target === newTaskCtn) {
            main.removeChild(newTaskCtn);
            newTaskWindow--;
          }
        });

        newTaskCtn.appendChild(newTaskForm);
        main.prepend(newTaskCtn);
      }
    }
  }
}
