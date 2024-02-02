// file for keeping track of state for all tasks & adding new tasks
export { allTasks, addTask };

const taskOne = {
  title: "Buy dog food",
  description:
    "Dog will run out of food in a couple days, will go to the store to buy more.",
  dueDate: "01/02/2024",
  project: "Personal",
};

const taskTwo = {
  title: "Send email to Paul",
  description: "Need to send Paul a list of revisions that need to be done.",
  dueDate: "01/04/2024",
  project: "Work",
};

const allTasks = [taskOne, taskTwo];

class Task {
  constructor(title, description, dueDate, project = null) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
  }
}

function addTask() {
  console.log("add task function");
}
