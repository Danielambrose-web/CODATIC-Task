let skills = ["HTML", "CSS"];

// Function to add a new skill at the beginning
function addSkill(skillName) {
  let message = 'Added: javascript and figma'; // Local variable (only lives inside this function)
  skills.unshift(skillName); // Add new skill to the front
  console.log(message); // Log message using the local variable
}

addSkill("JavaScript");  // Example of adding a skill
console.log(skills);     // Show updated array

addSkill("figma");       // Example of adding another skill
console.log(skills);     // Show updated array

// Function to remove the first skill
function removeFirstSkill() {
 skills.shift(); // Remove first skill
}
removeFirstSkill(); // Example of removing a skill
console.log(skills); // Show updated array
