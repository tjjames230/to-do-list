import { allTasks, Task } from "./Tasks";
import { allProjects, Project } from "./Projects";
import { format } from "date-fns";
import { MyStorage } from "./Storage";
export { UI };

const main = document.querySelector("main");

let desktopWidth = window.matchMedia("(min-width: 769px)");
let mobileWidth = window.matchMedia("(max-width: 768px)");

class UI {
	static currentTab = "";

	static getCurrentTab() {
		return this.currentTab;
	}

	static setCurrentTab(newTab) {
		this.currentTab = newTab;
	}

	static loadHome() {
		MyStorage.getProjectStorage();
		MyStorage.getTaskStorage();
		this.loadTasks("Today");
		this.setCurrentTab("Today");
		this.loadProjects();
		this.loadEventListeners();
	}

	static clearContent(sectionName) {
		const section = document.querySelector(sectionName);
		section.innerHTML = "";
	}

	static newTaskWindowOpen = false;

	static checkWindowOpen() {
		return this.newTaskWindowOpen;
	}

	static loadTasks(day) {
		this.clearContent("#task-ctn");
		const header = document.querySelector("#main-header");
		header.textContent = `${this.getHeader(day)} Tasks`;
		this.displayTasks(day);
	}

	static getHeader(day) {
		if (day === "Today") {
			return "Today's";
		} else if (day === "Week") {
			return "This Week's";
		} else if (day === "All") {
			return "All";
		}
	}

	static loadProjects() {
		this.clearContent("#project-ctn");
		this.displayProjects();
	}

	static loadEventListeners() {
		document.addEventListener("click", this.handleDocumentClick);
		this.resetAside();
	}

	static resetAside() {
		desktopWidth.addEventListener("change", (width) => {
			if (width.matches) {
				let aside = document.querySelector("aside");
				if (aside.style.display !== "flex") {
					aside.style.display = "flex";
				}
			}
		});
		mobileWidth.addEventListener("change", (width) => {
			if (width.matches) {
				let aside = document.querySelector("aside");
				if (aside.style.display === "flex") {
					aside.style.display = "none";
				}
			}
		});
	}

	static handleDocumentClick(e) {
		const { target } = e;
		if (target.matches("#add-task") && !UI.checkWindowOpen()) {
			UI.displayForm("task");
		} else if (target.matches("#add-project") && !UI.checkWindowOpen()) {
			UI.displayForm("project");
		} else if (target.matches("#tasks-today-btn")) {
			UI.setCurrentTab("Today");
			UI.loadTasks("Today");
		} else if (target.matches("#tasks-week-btn")) {
			UI.setCurrentTab("Week");
			UI.loadTasks("Week");
		} else if (target.matches("#tasks-all-btn")) {
			UI.setCurrentTab("All");
			UI.loadTasks("All");
		} else if (
			target.matches("#mobile-nav-btn") ||
			target.matches("#mobile-nav-btn div")
		) {
			UI.displayMobileNav();
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
			this.handleTaskSubmit(formCtn);
		} else {
			this.handleProjectSubmit(formCtn);
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
		<fieldset class="input-ctn">
		<legend>Select a priority:</legend>
		<div>
      	<input type="radio" id="low-priority" name="priority" value="low" checked />
      	<label for="low-priority">Low</label>
		</div>
		<div>
		<input type="radio" id="medium-priority" name="priority" value="medium" />
		<label for="medium-priority">Medium</label>
		</div>
		<div>
		<input type="radio" id="high-priority" name="priority" value="high" />
		<label for="high-priority">High</label>
		</div>
		</fieldset>
		<div class="input-ctn" id="due-date-ctn">
		<label for="due-date">Due Date</label>
		<input id="due-date" type="date" />
		</div>
		<div class="input-ctn" id="project-ctn">
		<label for="project">Project</label>
		<select name="project" id="project">
		<option value="">-- Choose a project --</option>
      ${this.createSelectOptions()}
		</select>
		</div>
		<button id="submit-new-task" type="submit">Create Task</button>`;
		return form;
	}

	static createSelectOptions() {
		let options = "";
		for (let i = 0; i < allProjects.length; i++) {
			let text = `<option value="${allProjects[i].name}">${allProjects[i].name}</option>`;
			options += text;
		}
		return options;
	}

	static getRadioBtnValue(name) {
		let option = document.querySelector(`input[name=${name}]:checked`).value;
		return option;
	}

	static createProjectForm() {
		const form = document.createElement("form");
		form.classList.add("new-form");
		form.id = "project-form";
		form.innerHTML = `<div class="input-ctn" id="project-name-ctn">
		<label for="project-name">Project Name</label>
		<input type="text" id="project-name" /></div>
		<button id="submit-new-project" type="submit">Create Project</button>`;
		return form;
	}

	static handleTaskSubmit(formCtn) {
		let submitBtn = document.querySelector("#submit-new-task");
		submitBtn.addEventListener("click", (e) => {
			e.preventDefault();

			// assign values from form
			const title = document.querySelector("#title").value;
			const day = document.querySelector("#due-date").value.slice(8, 10);
			const month = document.querySelector("#due-date").value.slice(5, 7);
			const year = document.querySelector("#due-date").value.slice(0, 4);
			const dueDate = format(new Date(year, month - 1, day), "MM/dd/yyyy");
			const description = document.querySelector("#description").value;
			const priority = this.getRadioBtnValue("priority");
			const project = document.querySelector("#project").value;

			// if valid, create new obj with values
			if (
				this.checkFormConditions(title) &&
				this.checkFormConditions(dueDate)
			) {
				const task = new Task(title, dueDate, priority, description, project);
				task.addTask();
				main.removeChild(formCtn);
				UI.newTaskWindowOpen = false;
				this.loadTasks(UI.getCurrentTab());
			}
		});
	}

	static displayTasks(day) {
		let arr = [];

		if (day === "Today") {
			for (let i = 0; i < allTasks.length; i++) {
				if (allTasks[i].dueDate === UI.getDates("Today")) {
					arr.push(allTasks[i]);
				}
			}

			UI.createTask(arr);
		} else if (day === "Week") {
			for (let i = 0; i < allTasks.length; i++) {
				if (
					allTasks[i].dueDate >= UI.getDates("Today") &&
					allTasks[i].dueDate <= UI.getDates("Week")
				) {
					arr.push(allTasks[i]);
				}
			}

			UI.createTask(arr);
		} else {
			UI.createTask(allTasks);
		}

		this.addTaskEventListeners();
	}

	static createTask(arr) {
		for (let i = 0; i < arr.length; i++) {
			const title = arr[i].title;
			const dueDate = arr[i].dueDate;
			const description = arr[i].description;
			const priority = arr[i].priority;
			const project = arr[i].project;
			const div = document.createElement("div");
			div.classList.add("task");
			div.innerHTML = `<h5 class="task-title">${title}</h5>
			<p class="task-date">${dueDate}</p>
			<p class="task-description">${description}</p>
			<p class="task-priority ${priority}"></p>
			<p class="task-project">${project}</p>
			<button class="task-complete">
        	<i class="fa-solid fa-check"></i>
			</button>`;
			document.querySelector("#task-ctn").appendChild(div);
		}
	}

	static addTaskEventListeners() {
		const completeBtns = document.querySelectorAll(".task-complete");
		completeBtns.forEach((btn) => {
			btn.addEventListener("click", this.checkTaskComplete);
		});
	}

	static checkTaskComplete(e) {
		const parentDiv = e.target.parentNode.parentNode;
		const title = parentDiv.firstChild.textContent;
		allTasks.map((obj) => {
			if (title === obj.title) {
				obj.deleteTask();
				UI.loadTasks(UI.getCurrentTab());
				return;
			}
		});
	}

	static checkFormConditions(field) {
		switch (field) {
			case "":
			case " ":
				return false;
			default:
				return true;
		}
	}

	static handleProjectSubmit(formCtn) {
		const submitBtn = document.querySelector("#submit-new-project");
		submitBtn.addEventListener("click", (e) => {
			e.preventDefault();
			const projectName = document.querySelector("#project-name").value;
			if (this.checkFormConditions(projectName)) {
				const project = new Project(projectName);
				project.addProject();
				main.removeChild(formCtn);
				UI.newTaskWindowOpen = false;
				this.loadProjects();
			}
		});
	}

	static displayProjects() {
		this.createProject();
		// this.addProjectEventListeners(); <-- THIS WILL BE FOR DELETING/EDITING PROJECTS
	}

	static createProject() {
		for (let i = 0; i < allProjects.length; i++) {
			const name = allProjects[i].name;
			const p = document.createElement("p");
			p.innerHTML = `# <span class="project">${name}</span>`;
			document.querySelector("#project-ctn").appendChild(p);
		}
	}

	static addProjectEventListeners() {}

	// get dates
	static getDates(date) {
		const newDate = new Date();
		const year = newDate.getFullYear();
		const month = newDate.getMonth() + 1;
		const day = newDate.getDate();
		const week = newDate.getDate() + 7;

		// get tasks due today
		if (date === "Today") {
			return `${month.toString().padStart(2, "0")}/${day
				.toString()
				.padStart(2, "0")}/${year}`;
		}
		// get tasks due within the week
		else if (date === "Week") {
			return `${month.toString().padStart(2, "0")}/${week
				.toString()
				.padStart(2, "0")}/${year}`;
		}
	}

	static displayMobileNav() {
		const aside = document.querySelector("aside");
		if (aside.style.display === "flex") {
			aside.style.display = "none";
		} else {
			aside.style.display = "flex";
		}
	}
}
