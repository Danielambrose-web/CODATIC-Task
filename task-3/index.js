function manageStudents() {
  // STEP 1: Create the main student system object
  const studentSystem = {
    // Name of the class
    className: "JavaScript 101",

    // An array (list) that stores all students
    students: [
      {
        id: 1, // unique identifier
        name: "Alice",
        details: {
          age: 20,
          city: "Lagos"
        },
        scores: [85, 90, 95], // test scores
        status: "Active" // current student status
      },
      {
        id: 2,
        name: "Bob",
        details: {
          age: 22,
          city: "Abuja"
        },
        scores: [78, 82, 88],
        status: "Active"
      }
    ],

    // Object to quickly look up grade meanings
    gradeLookup: {
      A: "Excellent",
      B: "Good",
      C: "Average",
      D: "Poor"
    }
  };

  //  STEP 2: Access and log className using dot notation
  console.log("Class Name:", studentSystem.className);
  // ➜ Dot notation means using a dot to access properties (object.property)

  //  STEP 3: Access first student's name using bracket notation
  console.log("First Student Name:", studentSystem["students"][0]["name"]);
  // ➜ Bracket notation allows dynamic access, like object["propertyName"]

  //  STEP 4: Use a variable to dynamically access the age property
  let prop = "age";
  console.log("First Student Age:", studentSystem.students[0].details[prop]);
  // ➜ Here we use a variable instead of directly typing 'age'

  //  STEP 5: Update the second student's status to "Graduated"
  studentSystem.students[1].status = "Graduated";

  //  STEP 6: Add a new property 'enrollmentDate' to the first student
  studentSystem.students[0].enrollmentDate = "2023-01-01";

  //  STEP 7: Delete the 'city' property from the second student's details
  delete studentSystem.students[1].details.city;

  //  STEP 8: Use gradeLookup to log the meaning of grade "B"
  console.log("Grade B Description:", studentSystem.gradeLookup["B"]);

  // STEP 9: Check if the first student has a 'scores' property
  if (studentSystem.students[0].hasOwnProperty("scores")) {
    console.log("Scores available");
  }

  // STEP 10: Add a new score (100) to the first student's score list
  studentSystem.students[0].scores.push(100);
  // ➜ push() adds an element to the end of an array

  // STEP 11: Access and log the nested age using dot notation
  console.log("Nested Age:", studentSystem.students[0].details.age);
  // ➜ You can chain multiple dots to reach deeper levels of an object

  //STEP 12: Access and log the second score from the second student's scores
  console.log("Second Score (Bob):", studentSystem.students[1].scores[1]);
  // ➜ Remember: array indexes start from 0

  //  STEP 13: Create a new student and add them to the array
  const newStudent = {
    id: 3,
    name: "Charlie",
    details: {
      age: 19,
      city: "Kano"
    },
    scores: [80, 85, 90],
    status: "Active"
  };

  // Add the new student to the students array using push()
  studentSystem.students.push(newStudent);

  // 🧭 STEP 14: Log and return the final updated student system
  console.log("✅ Updated Student System:", studentSystem);
  return studentSystem;
}

// 🧠 Run the function to see the results in the console
manageStudents();
