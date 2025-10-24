Section 1

1. Create an object called studentSystem that represents a database for managing students in a class. Start by building the initial structure as follows:
   Top-level properties: className (string, e.g., "JavaScript 101"), students (an array of student objects), gradeLookup (an object for quick grade lookups where keys are letter grades like "A" and values are descriptions like "Excellent").
   Each student object in the students array should have:
   id (number), name (string), details (nested object with age (number) and city (string)), scores (nested array of numbers, e.g., [85, 90, 95]), status (string, e.g., "Active").
   Initialize studentSystem with at least two students. Then, perform the following operations in sequence within a function called manageStudents():
   Access and log the className using dot notation.
   Access and log the first student's name using bracket notation.
   Use a variable to dynamically access and log the age of the first student's details (e.g., let prop = "age"; use bracket notation on the nested object).
   Update the status of the second student to "Graduated".
   Add a new property enrollmentDate (string, e.g., "2023-01-01") to the first student object.
   Delete the city property from the second student's details.
   Use the gradeLookup object to look up and log the description for grade "B" (add "B": "Good" to the lookup if needed).
   Test if the first student has a scores property using hasOwnProperty and log "Scores available" if true.
   Manipulate a complex part: Add a new score (e.g., 100) to the first student's scores array.
   Access and log the nested age from the first student's details using nested dot notation.
   Access and log the second score from the second student's scores array using nested access.
   Finally, add a new student object to the students array with similar structure.
   Return the fully updated studentSystem object and log it to verify all changes.

Expected Output (After All Operations):
An updated object with changes like updated status, added properties, deleted city, new score, and a third student. Test by logging the object.
