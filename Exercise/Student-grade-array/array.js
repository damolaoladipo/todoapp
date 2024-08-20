//array of student grades
const studentGrades = [90, 85, 95, 80, 92, 88, 76] 
const studentGradesCopy = [56, 89, 91, 85, 90, 92, 88, 76]

// Add and R emove Grades
studentGrades.push(98); //add a grade to the end of the array
console.log(studentGrades);

studentGrades.pop(); //remove the last grade from the array
console.log(studentGrades)

studentGrades.unshift(75); //add a grade to the beginning of the array
console.log(studentGrades)

studentGrades.shift(); //remove the first grade from the array.
console.log(studentGrades)

//Modify the Array
studentGrades.splice(2, 3, 92); //Remove 3 grade at index 2 and insert 92
console.log(studentGrades);

let slicedGrades = studentGrades.slice(1,4);  //Create a new array containing a portion of the original array
console.log(slicedGrades);

// Combine and Split Arrays
let combinedStudentGrades = studentGrades.concat(...slicedGrades); // Merge two arrays of grades
console.log(combinedStudentGrades);

let joinedStudentGrades = combinedStudentGrades.join(", "); // Create a string from the array of grades, separated by commas
console.log("Joined Grades:", joinedStudentGrades);

// Reverse and Sort Grades
combinedStudentGrades.reverse(); // Reverse the order of grades in the array
console.log("Reversed Combined Student Grades:", combinedStudentGrades);

function sortGrades(a, b) { // Sort the grades in ascending order
    return a - b;
}
combinedStudentGrades.sort(sortGrades); 
console.log("Sorted Combined Student Grades:", combinedStudentGrades);

// Iterate and Transform Grades
console.log("Each Student Grade:");
combinedStudentGrades.forEach((grade) => console.log(grade)); // Print each grade

//rewrite line 44 and 45 using a normal function
let increasedStudentGrades = combinedStudentGrades.map((grade) => grade + 5); // Upgrade student grades, each increased by 5 points
console.log("Increased Student Grades:", increasedStudentGrades);

// Filter and Analyze Grades
let passingStudentGrades = combinedStudentGrades.filter((grade) => grade > 70); // Create an array of passing grades (above 70)
console.log("Passing Student Grades:", passingStudentGrades);

let totalSum = combinedStudentGrades.reduce((total, grade) => total + grade, 0); // Calculate the total sum of grades
console.log("Total Sum of Student Grades:", totalSum);

let first88 = combinedStudentGrades.find((grade) => grade === 88); // Locate the first grade that is exactly 88
console.log("First Student Grade That Is 88:", first88);

let firstBelow70Index = combinedStudentGrades.findIndex((grade) => grade < 70); // Find the index of the first grade that is below 70
console.log("Index of First Student Grade Below 70:", firstBelow70Index);

let anyBelow60 = combinedStudentGrades.some((grade) => grade < 60); // Check if any grade is below 60
console.log("Any Student Grade Below 60:", anyBelow60);

let allAbove50 = combinedStudentGrades.every((grade) => grade > 50); // Check if all grades are above 50
console.log("All Student Grades Above 50:", allAbove50);


// Check for Existence
let includes92 = combinedStudentGrades.includes(92); // Check if a specific grade exists in the array
console.log("Includes Student Grade 92:", includes92);