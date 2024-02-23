BASIC USE STRUCTURE

- sidebar will always be visible
- main content is what will be updated through js for "pages"
- bare minimum:
  -- users will see tasks due today on load
  -- users can navigate to see tasks due for week, all tasks, or create new task
  -- users can navigate to projects (on load, there should be one project listed for "work" and an add project button)
  -- tasks can be assigned to projects

TASKS

- new tasks will load a form that will need fields for title, description, due date, and project (not mandatory to add to project)
- would also like to add priority level, and sort tasks by highest priority by default

RESEARCH

- will need to add and read docs for datefns package

TODOs

- implement local storage so tasks aren't reset after reload
- add ability to click on projects to only display tasks for that project
- add block if trying to add new project with same name as current
- add ability to delete projects
  -- maybe strikethrough task project names for project's that have been deleted?
