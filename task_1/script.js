// array , global array
let projects = ["Portfolio Website", "Task Tracker"];

// Function to add a new project with a parameter to take the project name and push it to the global array
function addProject(projectName) {
  projects.push(projectName); // Add new project at the end
}

addProject("Weather App"); // Example of adding a project
console.log(projects);

// Function to remove the last project
function removeLastProject() {
  const removedProject = projects.pop(); // Remove last project
}

removeLastProject(); // Example of adding a project
console.log(projects);

