Task 2: Skill Queue Manager
Description:
Create a function addSkill that takes a skill name and adds it to the beginning of a global array skills using unshift. Write another function removeFirstSkill that removes and returns the first skill using shift. Use a local variable inside addSkill to store a message about the added skill.
Requirements:
Initialize a global skills array with 2 skills (e.g., ["HTML", "CSS"]).
addSkill should take a skill name, use unshift, and store a message (e.g., "Added: JS") in a local variable before logging it.
removeFirstSkill should use shift and log the removed skill.
Test both functions with at least two calls each.
Explanation for Students:
“Think of skills as a line of people waiting to be listed on your portfolio. addSkill is like letting a new person (like ‘JavaScript’) cut to the front of the line with unshift. removeFirstSkill is like telling the first person to leave with shift. The message variable in addSkill is like a sticky note you write for yourself—it’s only used inside the function (local scope) and disappears afterward. The skills array is like a bulletin board everyone can see (global scope).”
Why It’s Useful:
Teaches unshift and shift for array manipulation.
Introduces local scope (message variable) vs. global scope (skills array).
