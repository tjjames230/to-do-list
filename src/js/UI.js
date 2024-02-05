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
    addTaskBtn.addEventListener("click", addTaskDisplay);

    function addTaskDisplay() {
      console.log("new task display");
    }
  }
}
