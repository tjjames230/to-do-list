import { allTasks, addTask } from "./Tasks";
export { loadHome };

const main = document.querySelector("main");

function loadHome() {
  loadTasks();
}

function loadTasks() {
  //main.innerHTML = "<h1>Hello World</h1>";
}

function loadProjects() {}

document.querySelector("#add-task").addEventListener("click", addTask);
